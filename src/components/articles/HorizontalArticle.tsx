import Link from "next/link";

interface HorizontalArticleProps {
  slug: string;
  category: string;
  title: string;
  author: string;
  date: string;
  imageUrl: string;
}

const HorizontalArticle = ({ slug, category, title, author, date, imageUrl }: HorizontalArticleProps) => {
  return (
    <Link href={`/article/${slug}`} className="block">
      <article className="group cursor-pointer flex flex-col md:flex-row gap-4 md:gap-6 py-4 md:py-6 border-b border-editorial-divider last:border-b-0 bg-card md:bg-transparent rounded-sm shadow-card-mobile md:shadow-none overflow-hidden mb-4 md:mb-0 transition-all duration-300 hover:shadow-card-hover md:hover:bg-secondary/30">
        <div className="w-full md:w-[200px] flex-shrink-0 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-[180px] md:h-[130px] object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center p-4 md:p-0">
          <span className="category-label mb-2">{category}</span>
          <h3 className="article-title text-base md:text-article-headline mb-2 line-clamp-2 transition-colors duration-300">
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

export default HorizontalArticle;
