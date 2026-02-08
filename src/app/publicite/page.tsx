import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BarChart, Users, Globe, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Annonceurs & Publicité | Nouvelle Afrique",
  description: "Atteignez une audience qualifiée de décideurs africains avec Nouvelle Afrique.",
};

export default function PublicitePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8 md:py-12">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
          Annonceurs & Publicité
        </h1>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Atteignez une audience qualifiée de décideurs et professionnels intéressés par l'Afrique. 
          Nouvelle Afrique offre des solutions publicitaires adaptées à vos objectifs.
        </p>
        
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-muted rounded-lg">
            <Users className="w-10 h-10 mx-auto text-primary mb-3" />
            <p className="text-3xl font-bold">2M+</p>
            <p className="text-sm text-muted-foreground">Visiteurs mensuels</p>
          </div>
          <div className="text-center p-6 bg-muted rounded-lg">
            <Globe className="w-10 h-10 mx-auto text-primary mb-3" />
            <p className="text-3xl font-bold">54</p>
            <p className="text-sm text-muted-foreground">Pays africains couverts</p>
          </div>
          <div className="text-center p-6 bg-muted rounded-lg">
            <Target className="w-10 h-10 mx-auto text-primary mb-3" />
            <p className="text-3xl font-bold">65%</p>
            <p className="text-sm text-muted-foreground">Cadres et dirigeants</p>
          </div>
          <div className="text-center p-6 bg-muted rounded-lg">
            <BarChart className="w-10 h-10 mx-auto text-primary mb-3" />
            <p className="text-3xl font-bold">8min</p>
            <p className="text-sm text-muted-foreground">Temps moyen de visite</p>
          </div>
        </div>
        
        <h2 className="font-serif text-2xl font-bold mb-6">Nos formats publicitaires</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="border border-border rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2">Display Premium</h3>
            <p className="text-muted-foreground mb-4">
              Bannières, habillages, interstitiels sur l'ensemble de nos supports.
            </p>
            <p className="text-primary font-medium">À partir de 15€ CPM</p>
          </div>
          <div className="border border-border rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2">Native Advertising</h3>
            <p className="text-muted-foreground mb-4">
              Contenus sponsorisés intégrés naturellement à notre ligne éditoriale.
            </p>
            <p className="text-primary font-medium">Sur devis</p>
          </div>
          <div className="border border-border rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Insertions publicitaires dans nos newsletters quotidiennes et thématiques.
            </p>
            <p className="text-primary font-medium">À partir de 2000€</p>
          </div>
          <div className="border border-border rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2">Événements</h3>
            <p className="text-muted-foreground mb-4">
              Sponsoring de nos conférences et événements physiques.
            </p>
            <p className="text-primary font-medium">Sur devis</p>
          </div>
        </div>
        
        <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h2 className="font-serif text-2xl font-bold mb-4">Contactez notre régie publicitaire</h2>
          <p className="mb-6 opacity-90">
            Notre équipe commerciale est à votre disposition pour étudier vos besoins.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-background text-foreground px-8 py-3 rounded hover:bg-background/90 transition-colors"
          >
            Demander un devis
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
