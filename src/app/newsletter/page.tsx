import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Newsletters | Nouvelle Afrique",
  description: "Inscrivez-vous à nos newsletters pour recevoir l'actualité africaine directement dans votre boîte mail.",
};

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8 md:py-12">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
          Newsletters
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-serif text-xl font-bold mb-2">L'Essentiel du Jour</h3>
            <p className="text-muted-foreground mb-4">
              Chaque matin à 7h, recevez un résumé des actualités les plus importantes du continent africain.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="flex-1 px-4 py-2 border border-border rounded bg-background"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                S'inscrire
              </button>
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-serif text-xl font-bold mb-2">Économie & Business</h3>
            <p className="text-muted-foreground mb-4">
              Hebdomadaire - Les analyses économiques et les opportunités d'affaires en Afrique.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="flex-1 px-4 py-2 border border-border rounded bg-background"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                S'inscrire
              </button>
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-serif text-xl font-bold mb-2">Tech & Innovation</h3>
            <p className="text-muted-foreground mb-4">
              Bi-mensuelle - L'actualité des startups et de la transformation numérique africaine.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="flex-1 px-4 py-2 border border-border rounded bg-background"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                S'inscrire
              </button>
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-serif text-xl font-bold mb-2">Culture & Société</h3>
            <p className="text-muted-foreground mb-4">
              Mensuelle - Les événements culturels, artistiques et les portraits inspirants.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="flex-1 px-4 py-2 border border-border rounded bg-background"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
