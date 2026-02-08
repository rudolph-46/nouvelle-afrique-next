import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { convexClient, Article } from '@/lib/convex';
import { api } from '../../../../convex/_generated/api';

export const revalidate = 60; // ISR: revalidate every 60 seconds

interface Props {
  params: Promise<{ slug: string }>;
}

async function getArticle(slug: string): Promise<Article | null> {
  try {
    const article = await convexClient.query(api.articles.getBySlug, { slug });
    return article as Article | null;
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  
  if (!article) {
    return { title: 'Article non trouvé' };
  }
  
  const heroImage = article.heroImage || article.images?.find(i => i.isHero)?.url || article.images?.[0]?.url;
  const publishedAt = article.publishedAt || article._creationTime;
  const authorName = article.author?.name || article.authorName || 'Nouvelle Afrique';
  
  return {
    title: article.title,
    description: article.excerpt,
    authors: [{ name: authorName }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      url: `https://nouvelle-afrique-vision.vercel.app/article/${slug}`,
      siteName: 'Nouvelle Afrique',
      locale: 'fr_FR',
      images: heroImage ? [{ url: heroImage, width: 1200, height: 630, alt: article.title }] : [],
      publishedTime: new Date(publishedAt).toISOString(),
      authors: [authorName],
      section: article.category || 'Actualités',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: heroImage ? [heroImage] : [],
    },
    alternates: {
      canonical: `https://nouvelle-afrique-vision.vercel.app/article/${slug}`,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticle(slug);
  
  if (!article) {
    notFound();
  }
  
  const heroImage = article.heroImage || article.images?.find(i => i.isHero)?.url || article.images?.[0]?.url;
  const publishedAt = article.publishedAt || article._creationTime;
  const authorName = article.author?.name || article.authorName || 'Nouvelle Afrique';
  const readTime = article.readTime || Math.ceil(article.content.split(/\s+/).length / 200);
  
  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.excerpt,
    image: heroImage ? [heroImage] : [],
    datePublished: new Date(publishedAt).toISOString(),
    dateModified: new Date(publishedAt).toISOString(),
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nouvelle Afrique',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nouvelle-afrique-vision.vercel.app/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://nouvelle-afrique-vision.vercel.app/article/${slug}`,
    },
    articleSection: article.category || 'Actualités',
    wordCount: article.content.split(/\s+/).length,
    inLanguage: 'fr',
  };
  
  return (
    <>
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Category */}
        <div className="mb-4">
          <Link
            href={`/${article.categorySlug || article.category?.toLowerCase() || 'actualites'}`}
            className="text-sm font-semibold text-accent uppercase tracking-wide hover:underline"
          >
            {article.category || 'Actualités'}
          </Link>
        </div>
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4 leading-tight">
          {article.title}
        </h1>
        
        {/* Excerpt */}
        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
          {article.excerpt}
        </p>
        
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-6 border-b">
          <span className="font-medium text-gray-900">
            Par {authorName}
          </span>
          <span>•</span>
          <time dateTime={new Date(publishedAt).toISOString()}>
            {new Date(publishedAt).toLocaleDateString('fr-FR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </time>
          <span>•</span>
          <span>📖 {readTime} min de lecture</span>
          {article.viewsCount && article.viewsCount > 0 && (
            <>
              <span>•</span>
              <span>👁 {article.viewsCount} vues</span>
            </>
          )}
        </div>
        
        {/* Hero Image */}
        {heroImage && (
          <figure className="mb-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-gray-100">
              <Image
                src={heroImage}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <figcaption className="text-sm text-gray-500 mt-2 text-center italic">
              Illustration © Nouvelle Afrique
            </figcaption>
          </figure>
        )}
        
        {/* Content */}
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        
        {/* Source */}
        {(article.source || article.sourceName) && (
          <div className="mt-8 pt-6 border-t">
            <p className="text-sm text-gray-500">
              📰 Source : {article.source || article.sourceName}
              {article.sourceUrl && (
                <>
                  {' — '}
                  <a
                    href={article.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Voir l'article original
                  </a>
                </>
              )}
            </p>
          </div>
        )}
        
        {/* Author Bio */}
        {article.author && (
          <div className="mt-8 pt-6 border-t">
            <div className="flex items-center gap-4">
              {article.author.avatar && (
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              )}
              <div>
                <p className="font-semibold">{article.author.name}</p>
                {article.author.bio && (
                  <p className="text-sm text-gray-600">{article.author.bio}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </article>
    </>
  );
}
