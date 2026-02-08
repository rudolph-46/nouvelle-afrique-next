import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Nouvelle Afrique",
  description: "Découvrez comment nous protégeons vos données personnelles sur Nouvelle Afrique.",
};

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8 md:py-12">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
          Politique de Confidentialité
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">Dernière mise à jour : Janvier 2025</p>
          
          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold mb-4">1. Collecte des données</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nous collectons les données personnelles que vous nous fournissez volontairement : 
              nom, adresse email, lors de votre inscription à notre newsletter ou création de compte. 
              Des données de navigation sont également collectées automatiquement (adresse IP, cookies).
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold mb-4">2. Utilisation des données</h2>
            <p className="text-muted-foreground leading-relaxed">
              Vos données sont utilisées pour : vous envoyer nos newsletters, personnaliser votre 
              expérience de lecture, améliorer nos services, et à des fins statistiques anonymisées.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold mb-4">3. Protection des données</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données 
              contre tout accès non autorisé, modification, divulgation ou destruction.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold mb-4">4. Vos droits</h2>
            <p className="text-muted-foreground leading-relaxed">
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression 
              et de portabilité de vos données. Vous pouvez exercer ces droits en nous contactant à 
              l'adresse privacy@nouvelleafrique.com.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold mb-4">5. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez gérer 
              vos préférences de cookies à tout moment via notre page dédiée.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold mb-4">6. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              Pour toute question concernant notre politique de confidentialité, contactez notre 
              Délégué à la Protection des Données à privacy@nouvelleafrique.com.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
