import { MetadataRoute } from 'next';
import { convexClient, Article } from '@/lib/convex';
import { api } from '../../convex/_generated/api';

const BASE_URL = 'https://nouvelle-afrique-vision.vercel.app';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/politique`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/economie`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/sport`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/technologie`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/culture`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/qui-sommes-nous`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // Dynamic article pages
  let articlePages: MetadataRoute.Sitemap = [];
  
  try {
    const articles = await convexClient.query(api.articles.list, { limit: 500 }) as Article[];
    
    articlePages = articles.map((article) => ({
      url: `${BASE_URL}/article/${article.slug}`,
      lastModified: new Date(article.publishedAt || article._creationTime),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Error fetching articles for sitemap:', error);
  }

  return [...staticPages, ...articlePages];
}
