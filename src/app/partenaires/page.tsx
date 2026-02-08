import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Nos Partenaires | Nouvelle Afrique",
  description: "Découvrez les partenaires de Nouvelle Afrique.",
};

const partners = [
  {
    name: "Africa CEO Forum",
    description: "Le plus grand rassemblement de décideurs économiques africains. Nouvelle Afrique est partenaire média officiel de cet événement annuel incontournable.",
    type: "Événement"
  },
  {
    name: "Choiseul Africa",
    description: "Think tank dédié à l'analyse des dynamiques économiques et politiques africaines. Nous collaborons sur des publications et analyses exclusives.",
    type: "Think Tank"
  },
  {
    name: "AfricaNews",
    description: "Chaîne d'information panafricaine avec laquelle nous partageons contenus et expertises pour une couverture optimale du continent.",
    type: "Média"
  },
  {
    name: "Union Africaine",
    description: "Partenariat institutionnel pour la couverture des sommets et initiatives continentales.",
    type: "Institution"
  },
  {
    name: "BAD - Banque Africaine de Développement",
    description: "Collaboration éditoriale sur les enjeux de développement économique du continent.",
    type: "Institution"
  },
  {
    name: "Mo Ibrahim Foundation",
    description: "Partenariat pour la diffusion de l'Indice Ibrahim de la gouvernance africaine.",
    type: "Fondation"
  },
];

export default function PartenairesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8 md:py-12">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
          Nos Partenaires
        </h1>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Nouvelle Afrique collabore avec les acteurs majeurs du continent pour vous offrir 
          une information de qualité et des analyses approfondies.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {partners.map((partner) => (
            <div key={partner.name} className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <span className="text-xs uppercase tracking-wider text-primary font-medium">
                {partner.type}
              </span>
              <h3 className="font-serif text-xl font-bold mt-2 mb-3">{partner.name}</h3>
              <p className="text-muted-foreground">{partner.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-muted rounded-lg p-8">
          <h2 className="font-serif text-2xl font-bold mb-4">Devenir partenaire</h2>
          <p className="text-muted-foreground mb-6">
            Vous souhaitez collaborer avec Nouvelle Afrique ? Nous sommes ouverts aux partenariats 
            éditoriaux, événementiels et institutionnels qui enrichissent notre mission d'information.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded hover:bg-primary/90 transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
