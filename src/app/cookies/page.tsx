import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Politique des Cookies | Nouvelle Afrique",
  description: "Découvrez comment nous utilisons les cookies sur Nouvelle Afrique.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8 md:py-12">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
          Politique des Cookies
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold mb-4">Qu'est-ce qu'un cookie ?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Un cookie est un petit fichier texte déposé sur votre appareil lors de la visite 
              d'un site web. Il permet au site de mémoriser vos actions et préférences.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold mb-4">Types de cookies utilisés</h2>
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-bold mb-2">Cookies essentiels</h3>
                <p className="text-sm text-muted-foreground">
                  Nécessaires au fonctionnement du site. Ils ne peuvent pas être désactivés.
                </p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-bold mb-2">Cookies analytiques</h3>
                <p className="text-sm text-muted-foreground">
                  Nous aident à comprendre comment les visiteurs utilisent le site.
                </p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-bold mb-2">Cookies publicitaires</h3>
                <p className="text-sm text-muted-foreground">
                  Utilisés pour afficher des publicités pertinentes selon vos centres d'intérêt.
                </p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-bold mb-2">Cookies de réseaux sociaux</h3>
                <p className="text-sm text-muted-foreground">
                  Permettent le partage de contenu sur les réseaux sociaux.
                </p>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold mb-4">Gérer vos préférences</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vous pouvez modifier vos préférences de cookies à tout moment. Notez que la 
              désactivation de certains cookies peut affecter votre expérience sur le site.
            </p>
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded hover:bg-primary/90 transition-colors">
              Gérer mes préférences
            </button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
