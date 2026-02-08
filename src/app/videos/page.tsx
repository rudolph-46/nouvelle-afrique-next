import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/articles/SectionHeader";

export const metadata: Metadata = {
  title: "Vidéos | Nouvelle Afrique",
  description: "Découvrez nos reportages, interviews et analyses en format vidéo.",
};

const tiktokVideos = [
  {
    id: 1,
    title: "L'économie africaine en pleine croissance",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=600&fit=crop",
    views: "1.2M",
    date: "Il y a 2 jours"
  },
  {
    id: 2,
    title: "Interview exclusive avec le ministre des finances",
    thumbnail: "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=600&fit=crop",
    views: "890K",
    date: "Il y a 3 jours"
  },
  {
    id: 3,
    title: "Les startups africaines qui révolutionnent le continent",
    thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=600&fit=crop",
    views: "2.1M",
    date: "Il y a 5 jours"
  },
  {
    id: 4,
    title: "Culture et traditions : voyage au cœur de l'Afrique",
    thumbnail: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=400&h=600&fit=crop",
    views: "567K",
    date: "Il y a 1 semaine"
  },
  {
    id: 5,
    title: "Sport africain : les champions de demain",
    thumbnail: "https://images.unsplash.com/photo-1461896836934-28f4a84e7f68?w=400&h=600&fit=crop",
    views: "1.5M",
    date: "Il y a 1 semaine"
  },
  {
    id: 6,
    title: "Innovation technologique made in Africa",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=600&fit=crop",
    views: "780K",
    date: "Il y a 2 semaines"
  },
  {
    id: 7,
    title: "Les grandes infrastructures qui transforment l'Afrique",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=600&fit=crop",
    views: "1.8M",
    date: "Il y a 2 semaines"
  },
  {
    id: 8,
    title: "Jeunesse africaine : la relève est là",
    thumbnail: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=600&fit=crop",
    views: "2.3M",
    date: "Il y a 3 semaines"
  },
];

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-editorial-black text-background py-12 md:py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <span className="category-label text-primary mb-4 block">Vidéos</span>
              <h1 className="font-serif text-3xl md:text-5xl font-bold mb-6">
                Notre Galerie Vidéo
              </h1>
              <p className="font-sans text-lg text-background/80">
                Découvrez nos reportages, interviews et analyses en format vidéo. 
                Suivez-nous sur TikTok pour plus de contenu exclusif.
              </p>
            </div>
          </div>
        </section>

        {/* TikTok Videos Grid */}
        <section className="container py-12 md:py-16">
          <SectionHeader title="Nos Vidéos TikTok" />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {tiktokVideos.map((video) => (
              <article 
                key={video.id} 
                className="group cursor-pointer bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative aspect-[9/16] overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-sans text-sm font-medium text-white line-clamp-2 mb-2">
                      {video.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-white/70">
                      <span>{video.views} vues</span>
                      <span>{video.date}</span>
                    </div>
                  </div>
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA to TikTok */}
          <div className="text-center mt-12">
            <a 
              href="https://tiktok.com/@nouvelleafrique" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-editorial-black text-background px-8 py-4 font-sans text-sm font-medium hover:bg-primary transition-colors duration-300 rounded-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
              Suivez-nous sur TikTok
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
