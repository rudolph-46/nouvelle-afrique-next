import Link from "next/link";
import Image from "next/image";

interface HeroArticleProps {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
}

const HeroArticle = ({ slug, category, title, excerpt, author, date, imageUrl }: HeroArticleProps) => {
  return (
    <Link href={`/article/${slug}`} className="block">
      <article className="group cursor-pointer animate-fade-in">
        <div className="relative overflow-hidden mb-4 md:mb-6 rounded-sm md:rounded-none shadow-card-mobile md:shadow-none transition-shadow duration-300 hover:shadow-card-hover">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-[280px] md:h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-editorial-black/70 via-editorial-black/20 to-transparent transition-opacity duration-300 group-hover:from-editorial-black/80" />
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-10 transition-transform duration-300 group-hover:translate-y-[-4px]">
            <span className="category-label bg-primary text-primary-foreground px-2 md:px-3 py-1 inline-block mb-2 md:mb-4 text-[10px] md:text-category">
              {category}
            </span>
            <h1 className="font-serif text-xl md:text-hero-headline lg:text-4xl text-background mb-2 md:mb-4 max-w-3xl leading-tight transition-colors duration-300">
              {title}
            </h1>
            <p className="font-sans text-sm md:text-body text-background/80 mb-2 md:mb-4 max-w-2xl hidden md:block line-clamp-2">
              {excerpt}
            </p>
            <div className="metadata text-background/60 text-[10px] md:text-metadata">
              Par <span className="text-background/80">{author}</span> • {date}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default HeroArticle;
