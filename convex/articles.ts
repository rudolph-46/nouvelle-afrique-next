import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// ============================================
// LIST ARTICLES (public, published only)
// ============================================

export const list = query({
  args: {
    categorySlug: v.optional(v.string()),
    limit: v.optional(v.number()),
    status: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const status = args.status || "published";
    
    let articles = await ctx.db
      .query("articles")
      .withIndex("by_status", (q) => q.eq("status", status))
      .order("desc")
      .collect();

    // Filter by category if specified
    if (args.categorySlug) {
      const category = await ctx.db
        .query("categories")
        .withIndex("by_slug", (q) => q.eq("slug", args.categorySlug!))
        .first();
      
      if (category) {
        articles = articles.filter(a => a.categoryId === category._id);
      }
    }

    // Enrich with category and author
    const enriched = await Promise.all(
      articles.map(async (article) => {
        const category = await ctx.db.get(article.categoryId);
        const author = await ctx.db.get(article.authorId);
        return {
          ...article,
          category: category?.name || "Actualités",
          categorySlug: category?.slug || "actualites",
          categoryColor: category?.color || "#4B5563",
          authorAvatar: author?.avatar,
        };
      })
    );

    return args.limit ? enriched.slice(0, args.limit) : enriched;
  },
});

// ============================================
// GET FEATURED ARTICLES
// ============================================

export const getFeatured = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const articles = await ctx.db
      .query("articles")
      .withIndex("by_featured", (q) => q.eq("isFeatured", true))
      .order("desc")
      .take(args.limit || 5);

    const enriched = await Promise.all(
      articles.map(async (article) => {
        const category = await ctx.db.get(article.categoryId);
        return {
          ...article,
          category: category?.name || "Actualités",
          categorySlug: category?.slug,
        };
      })
    );

    return enriched;
  },
});

// ============================================
// GET POPULAR ARTICLES
// ============================================

export const getPopular = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const articles = await ctx.db
      .query("articles")
      .withIndex("by_views")
      .order("desc")
      .take(args.limit || 5);

    const enriched = await Promise.all(
      articles.map(async (article) => {
        const category = await ctx.db.get(article.categoryId);
        return {
          ...article,
          category: category?.name || "Actualités",
        };
      })
    );

    return enriched;
  },
});

// ============================================
// GET ARTICLE BY SLUG
// ============================================

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const article = await ctx.db
      .query("articles")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();

    if (!article) return null;

    const category = await ctx.db.get(article.categoryId);
    const author = await ctx.db.get(article.authorId);
    
    // Get comments
    const comments = await ctx.db
      .query("comments")
      .withIndex("by_article", (q) => q.eq("articleId", article._id))
      .order("desc")
      .collect();

    return {
      ...article,
      category: category?.name || "Actualités",
      categorySlug: category?.slug || "actualites",
      categoryColor: category?.color,
      author: author ? {
        name: author.name,
        slug: author.slug,
        avatar: author.avatar,
        bio: author.bio,
      } : null,
      comments,
    };
  },
});

// ============================================
// GET ARTICLE BY ID
// ============================================

export const getById = query({
  args: { id: v.string() },
  handler: async (ctx, args) => {
    const articleId = ctx.db.normalizeId("articles", args.id);
    if (!articleId) return null;
    
    const article = await ctx.db.get(articleId);
    if (!article) return null;

    return {
      _id: article._id,
      title: article.title,
      slug: article.slug,
      status: article.status,
    };
  },
});

// ============================================
// GET PENDING ARTICLES (for admin review)
// ============================================

export const getPending = query({
  handler: async (ctx) => {
    const articles = await ctx.db
      .query("articles")
      .withIndex("by_status", (q) => q.eq("status", "pending_review"))
      .order("desc")
      .collect();

    const enriched = await Promise.all(
      articles.map(async (article) => {
        const category = await ctx.db.get(article.categoryId);
        const author = await ctx.db.get(article.authorId);
        return {
          ...article,
          category: category?.name,
          authorName: author?.name,
        };
      })
    );

    return enriched;
  },
});

// ============================================
// CREATE ARTICLE (from pipeline)
// ============================================

export const create = mutation({
  args: {
    slug: v.string(),
    title: v.string(),
    excerpt: v.string(),
    content: v.string(),
    aiSummary: v.optional(v.string()),
    images: v.array(v.object({
      url: v.string(),
      caption: v.string(),
      credit: v.string(),
      isHero: v.boolean(),
    })),
    categoryId: v.id("categories"),
    tags: v.array(v.string()),
    isFeatured: v.optional(v.boolean()),
    authorId: v.id("authors"),
    authorName: v.string(),
    sourceUrl: v.string(),
    sourceName: v.string(),
    originalLanguage: v.string(),
    isTranslated: v.boolean(),
    isAutoGenerated: v.optional(v.boolean()),
    generationModel: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Check for duplicate slug
    const existing = await ctx.db
      .query("articles")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();

    if (existing) {
      throw new Error(`Article with slug "${args.slug}" already exists`);
    }

    // Calculate reading time (words / 200)
    const wordCount = args.content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    const readingTime = Math.max(1, Math.ceil(wordCount / 200));

    const articleId = await ctx.db.insert("articles", {
      ...args,
      isFeatured: args.isFeatured || false,
      isAutoGenerated: args.isAutoGenerated || false,
      readingTime,
      viewsCount: 0,
      likesCount: 0,
      recommendsCount: 0,
      usefulCount: 0,
      commentsCount: 0,
      status: "pending_review",
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    // Increment author article count
    const author = await ctx.db.get(args.authorId);
    if (author) {
      await ctx.db.patch(args.authorId, {
        articleCount: author.articleCount + 1,
      });
    }

    // Log scraping
    await ctx.db.insert("scrapingLogs", {
      source: args.sourceName,
      sourceUrl: args.sourceUrl,
      title: args.title,
      status: "processed",
      articleId,
      createdAt: Date.now(),
    });

    return articleId;
  },
});

// ============================================
// PUBLISH ARTICLE (admin action)
// ============================================

export const publish = mutation({
  args: { id: v.id("articles") },
  handler: async (ctx, args) => {
    const article = await ctx.db.get(args.id);
    if (!article) throw new Error("Article not found");

    await ctx.db.patch(args.id, {
      status: "published",
      publishedAt: Date.now(),
      reviewedAt: Date.now(),
      updatedAt: Date.now(),
    });

    return true;
  },
});

// ============================================
// SET ARTICLE TO PENDING (admin action)
// ============================================

export const setPending = mutation({
  args: { 
    id: v.id("articles"),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      status: "pending_review",
      updatedAt: Date.now(),
    });
    return true;
  },
});

// ============================================
// REJECT ARTICLE (admin action)
// ============================================

export const reject = mutation({
  args: { 
    id: v.id("articles"),
    reason: v.string(),
  },
  handler: async (ctx, args) => {
    const article = await ctx.db.get(args.id);
    if (!article) throw new Error("Article not found");

    await ctx.db.patch(args.id, {
      status: "rejected",
      rejectionReason: args.reason,
      reviewedAt: Date.now(),
      updatedAt: Date.now(),
    });

    // Update scraping log
    const log = await ctx.db
      .query("scrapingLogs")
      .withIndex("by_url", (q) => q.eq("sourceUrl", article.sourceUrl))
      .first();
    
    if (log) {
      await ctx.db.patch(log._id, { status: "rejected" });
    }

    return true;
  },
});

// ============================================
// INCREMENT VIEW
// ============================================

export const incrementView = mutation({
  args: {
    articleId: v.id("articles"),
    visitorId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const article = await ctx.db.get(args.articleId);
    if (!article) return;

    await ctx.db.insert("articleViews", {
      articleId: args.articleId,
      userId: args.visitorId,
      viewedAt: Date.now(),
    });

    await ctx.db.patch(args.articleId, {
      viewsCount: article.viewsCount + 1,
    });
  },
});

// ============================================
// LIKE ARTICLE
// ============================================

export const like = mutation({
  args: {
    articleId: v.id("articles"),
    visitorId: v.string(),
  },
  handler: async (ctx, args) => {
    const article = await ctx.db.get(args.articleId);
    if (!article) throw new Error("Article not found");

    const existing = await ctx.db
      .query("articleLikes")
      .withIndex("by_article_visitor", (q) => 
        q.eq("articleId", args.articleId).eq("visitorId", args.visitorId)
      )
      .first();

    if (existing) {
      await ctx.db.delete(existing._id);
      await ctx.db.patch(args.articleId, {
        likesCount: Math.max(0, article.likesCount - 1),
      });
      return { liked: false };
    } else {
      await ctx.db.insert("articleLikes", {
        articleId: args.articleId,
        visitorId: args.visitorId,
        createdAt: Date.now(),
      });
      await ctx.db.patch(args.articleId, {
        likesCount: article.likesCount + 1,
      });
      return { liked: true };
    }
  },
});

// ============================================
// CHECK IF LIKED
// ============================================

export const isLiked = query({
  args: {
    articleId: v.id("articles"),
    visitorId: v.string(),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("articleLikes")
      .withIndex("by_article_visitor", (q) => 
        q.eq("articleId", args.articleId).eq("visitorId", args.visitorId)
      )
      .first();

    return !!existing;
  },
});

// ============================================
// ADD COMMENT
// ============================================

export const addComment = mutation({
  args: {
    articleId: v.id("articles"),
    authorName: v.string(),
    content: v.string(),
    userId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const article = await ctx.db.get(args.articleId);
    if (!article) throw new Error("Article not found");

    await ctx.db.insert("comments", {
      articleId: args.articleId,
      authorName: args.authorName,
      content: args.content,
      userId: args.userId,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    await ctx.db.patch(args.articleId, {
      commentsCount: article.commentsCount + 1,
    });

    return true;
  },
});

// ============================================
// CHECK IF SOURCE URL ALREADY PROCESSED
// ============================================

export const isSourceProcessed = query({
  args: { sourceUrl: v.string() },
  handler: async (ctx, args) => {
    const log = await ctx.db
      .query("scrapingLogs")
      .withIndex("by_url", (q) => q.eq("sourceUrl", args.sourceUrl))
      .first();

    return !!log;
  },
});
