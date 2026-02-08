import Link from "next/link";

interface GridArticleProps {
  slug: string;
  category: string;
  title: string;
  author: string;
  date: string;
  imageUrl: string;
}

const GridArticle = ({ slug, category, title, author, date, imageUrl }: GridArticleProps) => {
  return (
    <Link href={`/article/${slug}`} className="block">
      <article className="group cursor-pointer bg-card rounded-sm overflow-hidden shadow-card-mobile md:shadow-none md:bg-transparent hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
        <div className="overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-[200px] md:h-[180px] lg:h-[200px] object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-4 md:p-0 md:pt-4">
          <span className="category-label mb-2 block">{category}</span>
          <h3 className="article-title text-base md:text-lg lg:text-article-headline mb-3 line-clamp-3 transition-colors duration-300">
            {title}
          </h3>
          <div className="metadata">
            {author} • {date}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default GridArticle;
