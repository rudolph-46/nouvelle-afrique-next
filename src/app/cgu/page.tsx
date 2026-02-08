import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation | Nouvelle Afrique",
  description: "Consultez les conditions générales d'utilisation du site Nouvelle Afrique.",
};

export default function CGUPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8 md:py-12">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
          Conditions Générales d'Utilisation
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">Dernière mise à jour : Janvier 2025</p>
          
          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold mb-4">1. Objet</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités 
              d'accès et d'utilisation du site Nouvelle Afrique. L'accès au site implique l'acceptation 
              pleine et entière des présentes CGU.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold mb-4">2. Accès au site</h2>
            <p className="text-muted-foreground leading-relaxed">
              Le site est accessible gratuitement à tout utilisateur disposant d'un accès internet. 
              Certains contenus peuvent être réservés aux abonnés. L'utilisateur est responsable de 
              son équipement informatique et de son accès internet.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold mb-4">3. Propriété intellectuelle</h2>
            <p className="text-muted-foreground leading-relaxed">
              L'ensemble des éléments du site (textes, images, vidéos, graphismes, logo, icônes) 
              sont la propriété exclusive de Nouvelle Afrique ou de ses partenaires. Toute reproduction, 
              représentation ou diffusion, même partielle, est interdite sans autorisation préalable.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold mb-4">4. Responsabilité</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nouvelle Afrique s'efforce d'assurer l'exactitude des informations diffusées mais ne peut 
              garantir leur exhaustivité. L'utilisateur reconnaît utiliser ces informations sous sa 
              responsabilité exclusive.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold mb-4">5. Commentaires et contributions</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les utilisateurs s'engagent à respecter les règles de courtoisie et à ne pas publier 
              de contenu illicite, diffamatoire, injurieux ou contraire à l'ordre public. 
              La modération se réserve le droit de supprimer tout contenu inapproprié.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold mb-4">6. Modification des CGU</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nouvelle Afrique se réserve le droit de modifier les présentes CGU à tout moment. 
              Les utilisateurs seront informés de toute modification substantielle.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
