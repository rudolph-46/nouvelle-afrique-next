"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroArticle from "@/components/articles/HeroArticle";
import HorizontalArticle from "@/components/articles/HorizontalArticle";
import GridArticle from "@/components/articles/GridArticle";
import SectionHeader from "@/components/articles/SectionHeader";
import Sidebar from "@/components/sidebar/Sidebar";
import { Skeleton } from "@/components/ui/skeleton";

export default function OpinionsPage() {
  const opinionArticles = useQuery(api.articles.list, { categorySlug: "opinions", limit: 10 });
  const allArticles = useQuery(api.articles.list, { limit: 6 });

  const isLoading = opinionArticles === undefined;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-8">
          <Skeleton className="h-[400px] w-full mb-8" />
        </main>
        <Footer />
      </div>
    );
  }

  const heroArticle = opinionArticles?.[0] || allArticles?.[0];
  const otherArticles = opinionArticles?.length ? opinionArticles.slice(1) : allArticles?.slice(1, 4) || [];
  const relatedArticles = allArticles?.slice(3, 6) || [];

  if (!heroArticle) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-16 text-center">
          <h1 className="font-serif text-2xl">Aucun article dans cette catégorie</h1>
        </main>
        <Footer />
      </div>
    );
  }

  const formatDate = (date: number | null | undefined) => 
    date ? new Date(date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' }) : '';

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="container py-8">
          <HeroArticle
            slug={heroArticle.slug}
            category="Opinions"
            title={heroArticle.title}
            excerpt={heroArticle.excerpt || ''}
            author={heroArticle.authorName || 'Rédaction'}
            date={formatDate(heroArticle.publishedAt)}
            imageUrl={heroArticle.images?.[0]?.url || '/placeholder.svg'}
          />
        </section>
        <section className="container pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-8">
              <SectionHeader title="Opinions & Débats" />
              <div className="mb-12">
                {otherArticles.slice(0, 3).map((article) => (
                  <HorizontalArticle
                    key={article._id}
                    slug={article.slug}
                    category={article.category || 'Opinions'}
                    title={article.title}
                    author={article.authorName || 'Rédaction'}
                    date={formatDate(article.publishedAt)}
                    imageUrl={article.images?.[0]?.url || '/placeholder.svg'}
                  />
                ))}
              </div>
              {relatedArticles.length > 0 && (
                <>
                  <SectionHeader title="À lire aussi" />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedArticles.map((article) => (
                      <GridArticle
                        key={article._id}
                        slug={article.slug}
                        category={article.category || 'Actualités'}
                        title={article.title}
                        author={article.authorName || 'Rédaction'}
                        date={formatDate(article.publishedAt)}
                        imageUrl={article.images?.[0]?.url || '/placeholder.svg'}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="lg:col-span-4">
              <Sidebar />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
