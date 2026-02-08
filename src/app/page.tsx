import Link from 'next/link';
import Image from 'next/image';
import { convexClient, Article } from '@/lib/convex';
import { api } from '../../convex/_generated/api';

export const revalidate = 60; // ISR: revalidate every 60 seconds

async function getArticles(): Promise<Article[]> {
  try {
    const articles = await convexClient.query(api.articles.list, { limit: 20 });
    return articles as Article[];
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

export default async function HomePage() {
  const articles = await getArticles();
  
  const featured = articles[0];
  const latest = articles.slice(1, 7);
  const more = articles.slice(7);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      {featured && (
        <section className="mb-12">
          <Link href={`/article/${featured.slug}`} className="group block">
            <div className="relative aspect-[21/9] overflow-hidden rounded-xl bg-gray-100">
              {(featured.heroImage || featured.images?.[0]?.url) && (
                <Image
                  src={featured.heroImage || featured.images![0].url}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-semibold rounded mb-3">
                  {featured.category || 'Actualités'}
                </span>
                <h1 className="text-2xl md:text-4xl font-display font-bold text-white mb-3 group-hover:text-gold transition">
                  {featured.title}
                </h1>
                <p className="text-gray-200 text-sm md:text-base max-w-2xl line-clamp-2">
                  {featured.excerpt}
                </p>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Latest Articles */}
      <section className="mb-12">
        <h2 className="text-2xl font-display font-bold mb-6 border-b-2 border-accent pb-2 inline-block">
          À la une
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map((article) => (
            <ArticleCard key={article._id} article={article} />
          ))}
        </div>
      </section>

      {/* More Articles */}
      {more.length > 0 && (
        <section>
          <h2 className="text-2xl font-display font-bold mb-6 border-b-2 border-accent pb-2 inline-block">
            Plus d'actualités
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {more.map((article) => (
              <ArticleCardSmall key={article._id} article={article} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function ArticleCard({ article }: { article: Article }) {
  const imageUrl = article.heroImage || article.images?.[0]?.url;
  
  return (
    <Link href={`/article/${article.slug}`} className="group block">
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-gray-100 mb-3">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
      </div>
      <span className="text-xs font-semibold text-accent uppercase tracking-wide">
        {article.category || 'Actualités'}
      </span>
      <h3 className="text-lg font-semibold mt-1 group-hover:text-accent transition line-clamp-2">
        {article.title}
      </h3>
      <p className="text-gray-600 text-sm mt-2 line-clamp-2">
        {article.excerpt}
      </p>
      <div className="text-xs text-gray-400 mt-2">
        {article.author?.name || article.authorName} • {formatDate(article.publishedAt || article._creationTime)}
      </div>
    </Link>
  );
}

function ArticleCardSmall({ article }: { article: Article }) {
  const imageUrl = article.heroImage || article.images?.[0]?.url;
  
  return (
    <Link href={`/article/${article.slug}`} className="group flex gap-3">
      <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded bg-gray-100">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <span className="text-xs font-semibold text-accent uppercase">
          {article.category || 'Actualités'}
        </span>
        <h4 className="text-sm font-medium mt-1 group-hover:text-accent transition line-clamp-2">
          {article.title}
        </h4>
        <div className="text-xs text-gray-400 mt-1">
          {formatDate(article.publishedAt || article._creationTime)}
        </div>
      </div>
    </Link>
  );
}

function formatDate(timestamp: number): string {
  const date = new Date(timestamp);
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}
