import { useQuery as useConvexQuery, useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { Id } from '../../convex/_generated/dataModel';

export interface Article {
  _id: Id<"articles">;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  imageUrl: string | null;
  categoryId: Id<"categories"> | null;
  author: string;
  viewsCount: number;
  likesCount: number;
  commentsCount: number;
  publishedAt: number | null;
  createdAt: number;
  updatedAt: number;
  category?: string;
  categorySlug?: string;
}

export interface Category {
  _id: Id<"categories">;
  name: string;
  slug: string;
  description: string | null;
}

export function useArticles(limit?: number) {
  const articles = useConvexQuery(api.articles.list, { limit });
  
  return {
    data: articles,
    isLoading: articles === undefined,
    error: null,
  };
}

export function useArticleBySlug(slug: string) {
  const article = useConvexQuery(api.articles.getBySlug, slug ? { slug } : "skip");
  const incrementView = useMutation(api.articles.incrementView);
  
  // Track view when article loads
  if (article && article._id) {
    // Use localStorage to prevent duplicate views in same session
    const viewKey = `viewed_${article._id}`;
    if (!sessionStorage.getItem(viewKey)) {
      sessionStorage.setItem(viewKey, 'true');
      incrementView({ articleId: article._id });
    }
  }
  
  return {
    data: article,
    isLoading: article === undefined,
    error: null,
  };
}

export function useArticlesByCategory(categorySlug: string, limit?: number) {
  const articles = useConvexQuery(
    api.articles.list, 
    categorySlug ? { categorySlug, limit } : "skip"
  );
  
  return {
    data: articles || [],
    isLoading: articles === undefined,
    error: null,
  };
}

export function useRelatedArticles(articleId: string, categorySlug: string | null, limit: number = 3) {
  const articles = useConvexQuery(
    api.articles.list,
    categorySlug ? { categorySlug, limit: limit + 1 } : { limit: limit + 1 }
  );
  
  // Filter out current article
  const filtered = articles?.filter(a => a._id !== articleId).slice(0, limit);
  
  return {
    data: filtered || [],
    isLoading: articles === undefined,
    error: null,
  };
}

export function usePopularArticles(limit: number = 5) {
  const articles = useConvexQuery(api.articles.getPopular, { limit });
  
  return {
    data: articles || [],
    isLoading: articles === undefined,
    error: null,
  };
}

export function useCategories() {
  const categories = useConvexQuery(api.categories.list);
  
  return {
    data: categories || [],
    isLoading: categories === undefined,
    error: null,
  };
}

// Like functionality
export function useLikeArticle() {
  const likeMutation = useMutation(api.articles.like);
  
  const toggleLike = async (articleId: Id<"articles">) => {
    // Get or create visitor ID
    let visitorId = localStorage.getItem('nav_visitor_id');
    if (!visitorId) {
      visitorId = `visitor-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('nav_visitor_id', visitorId);
    }
    
    return await likeMutation({ articleId, visitorId });
  };
  
  return { toggleLike };
}

export function useIsArticleLiked(articleId: Id<"articles"> | undefined) {
  const visitorId = typeof window !== 'undefined' 
    ? localStorage.getItem('nav_visitor_id') || ''
    : '';
    
  const isLiked = useConvexQuery(
    api.articles.isLiked,
    articleId && visitorId ? { articleId, visitorId } : "skip"
  );
  
  return isLiked || false;
}

// Comments
export function useAddComment() {
  const addCommentMutation = useMutation(api.articles.addComment);
  
  const addComment = async (articleId: Id<"articles">, authorName: string, content: string) => {
    return await addCommentMutation({ articleId, authorName, content });
  };
  
  return { addComment };
}
