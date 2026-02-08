import { ConvexHttpClient } from 'convex/browser';

export const convexClient = new ConvexHttpClient(
  process.env.NEXT_PUBLIC_CONVEX_URL!
);

// Types pour les articles
export interface Article {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  heroImage?: string;
  images?: { url: string; isHero: boolean; caption: string; credit: string }[];
  category?: string;
  categorySlug?: string;
  author?: {
    name: string;
    slug: string;
    avatar?: string;
    bio?: string;
  };
  authorName?: string;
  source?: string;
  sourceName?: string;
  sourceUrl?: string;
  viewsCount?: number;
  likesCount?: number;
  readTime?: number;
  publishedAt?: number;
  _creationTime: number;
  status: string;
}
