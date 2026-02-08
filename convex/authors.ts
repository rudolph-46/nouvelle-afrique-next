import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// ============================================
// LIST AUTHORS
// ============================================

export const list = query({
  args: { activeOnly: v.optional(v.boolean()) },
  handler: async (ctx, args) => {
    if (args.activeOnly) {
      return await ctx.db
        .query("authors")
        .withIndex("by_active", (q) => q.eq("isActive", true))
        .collect();
    }
    return await ctx.db.query("authors").collect();
  },
});

// ============================================
// GET BY SLUG
// ============================================

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("authors")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();
  },
});

// ============================================
// GET BY CATEGORY
// ============================================

export const getByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, args) => {
    const authors = await ctx.db
      .query("authors")
      .withIndex("by_active", (q) => q.eq("isActive", true))
      .collect();
    
    return authors.filter(a => a.categories.includes(args.category));
  },
});

// ============================================
// GET NEXT AUTHOR FOR CATEGORY (rotation)
// ============================================

export const getNextForCategory = query({
  args: { category: v.string() },
  handler: async (ctx, args) => {
    const authors = await ctx.db
      .query("authors")
      .withIndex("by_active", (q) => q.eq("isActive", true))
      .collect();
    
    const eligible = authors.filter(a => a.categories.includes(args.category));
    
    if (eligible.length === 0) return null;
    if (eligible.length === 1) return eligible[0];
    
    // Return the one with fewest articles (rotation)
    return eligible.sort((a, b) => a.articleCount - b.articleCount)[0];
  },
});

// ============================================
// CREATE AUTHOR
// ============================================

export const create = mutation({
  args: {
    name: v.string(),
    slug: v.string(),
    avatar: v.string(),
    bio: v.string(),
    categories: v.array(v.string()),
    expertise: v.array(v.string()),
    writingStyle: v.string(),
    tone: v.string(),
    signaturePhrase: v.optional(v.string()),
    sampleIntro: v.string(),
    sampleConclusion: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("authors", {
      ...args,
      isActive: true,
      articleCount: 0,
      createdAt: Date.now(),
    });
  },
});

// ============================================
// INCREMENT ARTICLE COUNT
// ============================================

export const incrementArticleCount = mutation({
  args: { id: v.id("authors") },
  handler: async (ctx, args) => {
    const author = await ctx.db.get(args.id);
    if (!author) return;
    
    await ctx.db.patch(args.id, {
      articleCount: author.articleCount + 1,
    });
  },
});
