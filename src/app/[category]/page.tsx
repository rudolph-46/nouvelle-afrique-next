import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { convexClient, Article } from '@/lib/convex';
import { api } from '../../../convex/_generated/api';

export const revalidate = 60;

const CATEGORIES: Record<string, { name: string; description: string }> = {
  politique: {
    name: 'Politique',
    description: 'Actualités politiques africaines : élections, gouvernance, diplomatie et relations internationales.',
  },
  economie: {
    name: 'Économie',
    description: 'Économie africaine : marchés, investissements, développement et croissance du continent.',
  },
  sport: {
    name: 'Sport',
    description: 'Sport africain : football, basketball, athlétisme et compétitions continentales.',
  },
  technologie: {
    name: 'Technologie',
    description: 'Tech africaine : startups, innovation, fintech et transformation numérique.',
  },
  culture: {
    name: 'Culture',
    description: 'Culture africaine : musique, cinéma, art, littérature et patrimoine.',
  },
};

interface Props {
  params: Promise<{ category: string }>;
}

async function getArticlesByCategory(category: string): Promise<Article[]> {
  try {
    const articles = await convexClient.query(api.articles.list, { limit: 50 }) as Article[];
    // Filter by category (case-insensitive)
    return articles.filter(
      (a) => a.category?.toLowerCase() === category.toLowerCase()
    );
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = CATEGORIES[category];
  
  if (!cat) {
    return { title: 'Page non trouvée' };
  }
  
  return {
    title: `${cat.name} - Actualités ${cat.name} Afrique`,
    description: cat.description,
    openGraph: {
      title: `${cat.name} | Nouvelle Afrique`,
      description: cat.description,
      type: 'website',
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = CATEGORIES[category];
  
  if (!cat) {
    notFound();
  }
  
  const articles = await getArticlesByCategory(cat.name);
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-display font-bold text-gray-900 mb-3">
          {cat.name}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          {cat.description}
        </p>
      </div>
      
      {/* Articles Grid */}
      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article._id} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">
            Aucun article dans cette catégorie pour le moment.
          </p>
          <Link href="/" className="text-accent hover:underline mt-4 inline-block">
            Retour à l'accueil
          </Link>
        </div>
      )}
    </div>
  );
}

function ArticleCard({ article }: { article: Article }) {
  const imageUrl = article.heroImage || article.images?.[0]?.url;
  const publishedAt = article.publishedAt || article._creationTime;
  
  return (
    <Link href={`/article/${article.slug}`} className="group block">
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-gray-100 mb-4">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
      </div>
      <h2 className="text-xl font-semibold group-hover:text-accent transition line-clamp-2 mb-2">
        {article.title}
      </h2>
      <p className="text-gray-600 text-sm line-clamp-2 mb-3">
        {article.excerpt}
      </p>
      <div className="text-xs text-gray-400">
        {article.author?.name || article.authorName} • {new Date(publishedAt).toLocaleDateString('fr-FR', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        })}
      </div>
    </Link>
  );
}

// Generate static params for known categories
export async function generateStaticParams() {
  return Object.keys(CATEGORIES).map((category) => ({ category }));
}
