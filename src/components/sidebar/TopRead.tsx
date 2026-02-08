"use client";

import Link from "next/link";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Skeleton } from "@/components/ui/skeleton";

const TopRead = () => {
  const articles = useQuery(api.articles.getPopular, { limit: 5 });
  const isLoading = articles === undefined;

  if (isLoading) {
    return (
      <div className="bg-secondary p-6">
        <h3 className="font-sans text-module-title uppercase text-editorial-black mb-6">
          Les Plus Lus
        </h3>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex gap-4 pb-4 border-b border-editorial-divider last:border-b-0">
              <Skeleton className="w-8 h-8" />
              <Skeleton className="h-12 flex-1" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  const topArticles = articles?.slice(0, 5) || [];

  return (
    <div className="bg-secondary p-6">
      <h3 className="font-sans text-module-title uppercase text-editorial-black mb-6">
        Les Plus Lus
      </h3>
      <div className="space-y-4">
        {topArticles.map((article, index) => (
          <Link
            key={article._id}
            href={`/article/${article.slug}`}
            className="group cursor-pointer flex gap-4 pb-4 border-b border-editorial-divider last:border-b-0 last:pb-0"
          >
            <span className="font-serif text-3xl font-bold text-primary/30 group-hover:text-primary transition-colors">
              {index + 1}
            </span>
            <h4 className="font-serif text-sm font-medium text-editorial-body leading-snug group-hover:text-primary transition-colors line-clamp-3">
              {article.title}
            </h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopRead;
