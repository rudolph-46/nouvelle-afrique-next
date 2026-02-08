import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Abonnement | Nouvelle Afrique",
  description: "Abonnez-vous à Nouvelle Afrique pour un accès illimité à nos contenus.",
};

export default function AbonnementPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8 md:py-12">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
          Abonnement
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <h3 className="font-serif text-xl font-bold mb-2">Découverte</h3>
            <p className="text-3xl font-bold text-primary mb-4">Gratuit</p>
            <ul className="text-sm text-muted-foreground space-y-2 mb-6">
              <li>5 articles par mois</li>
              <li>Newsletter hebdomadaire</li>
              <li>Accès aux archives limitées</li>
            </ul>
            <button className="w-full bg-primary text-primary-foreground py-2 rounded hover:bg-primary/90 transition-colors">
              S'inscrire
            </button>
          </div>
          
          <div className="bg-primary text-primary-foreground rounded-lg p-6 text-center transform scale-105">
            <div className="text-xs uppercase tracking-wider mb-2">Populaire</div>
            <h3 className="font-serif text-xl font-bold mb-2">Premium</h3>
            <p className="text-3xl font-bold mb-4">9,99€/mois</p>
            <ul className="text-sm opacity-90 space-y-2 mb-6">
              <li>Articles illimités</li>
              <li>Newsletter quotidienne</li>
              <li>Accès complet aux archives</li>
              <li>Contenu exclusif</li>
            </ul>
            <button className="w-full bg-background text-foreground py-2 rounded hover:bg-background/90 transition-colors">
              S'abonner
            </button>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <h3 className="font-serif text-xl font-bold mb-2">Entreprise</h3>
            <p className="text-3xl font-bold text-primary mb-4">Sur devis</p>
            <ul className="text-sm text-muted-foreground space-y-2 mb-6">
              <li>Licences multiples</li>
              <li>API d'accès</li>
              <li>Support dédié</li>
              <li>Rapports personnalisés</li>
            </ul>
            <button className="w-full bg-primary text-primary-foreground py-2 rounded hover:bg-primary/90 transition-colors">
              Nous contacter
            </button>
          </div>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="font-serif text-2xl font-bold mb-4">Pourquoi s'abonner ?</h2>
          <p className="text-muted-foreground leading-relaxed">
            En vous abonnant à Nouvelle Afrique, vous soutenez un journalisme indépendant et de qualité 
            dédié à l'actualité africaine. Nos équipes de journalistes travaillent chaque jour pour vous 
            apporter une information fiable, approfondie et contextualisée sur les enjeux qui façonnent 
            le continent africain.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
