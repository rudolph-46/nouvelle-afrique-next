import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Mentions Légales | Nouvelle Afrique",
  description: "Consultez les mentions légales du site Nouvelle Afrique.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-editorial-black text-background py-12 md:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">
                Mentions Légales
              </h1>
              <p className="font-sans text-background/80">
                Dernière mise à jour : Décembre 2025
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="container py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-10">
              
              <div>
                <h2 className="font-serif text-2xl font-bold text-editorial-black mb-4 pb-2 border-b border-editorial-divider">
                  1. Éditeur du Site
                </h2>
                <div className="font-sans text-editorial-body space-y-2">
                  <p><strong>Raison sociale :</strong> Nouvelle Afrique Media SAS</p>
                  <p><strong>Siège social :</strong> 123 Avenue de l'Indépendance, Dakar, Sénégal</p>
                  <p><strong>Capital social :</strong> 100 000 000 FCFA</p>
                  <p><strong>RCCM :</strong> SN-DKR-2024-B-12345</p>
                  <p><strong>NINEA :</strong> 123456789 2G3</p>
                  <p><strong>Directeur de la publication :</strong> M. Amadou Diallo</p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-editorial-black mb-4 pb-2 border-b border-editorial-divider">
                  2. Hébergement
                </h2>
                <div className="font-sans text-editorial-body space-y-2">
                  <p><strong>Hébergeur :</strong> Vercel Inc.</p>
                  <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
                  <p><strong>Site web :</strong> https://vercel.com</p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-editorial-black mb-4 pb-2 border-b border-editorial-divider">
                  3. Propriété Intellectuelle
                </h2>
                <p className="font-sans text-editorial-body leading-relaxed">
                  L'ensemble du contenu de ce site (textes, images, vidéos, graphismes, logo, icônes, etc.) 
                  est la propriété exclusive de Nouvelle Afrique Media SAS, sauf mention contraire. 
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie 
                  des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, 
                  sauf autorisation écrite préalable de Nouvelle Afrique Media SAS.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-editorial-black mb-4 pb-2 border-b border-editorial-divider">
                  4. Protection des Données Personnelles
                </h2>
                <p className="font-sans text-editorial-body leading-relaxed mb-4">
                  Conformément à la loi sur la protection des données personnelles, vous disposez d'un droit 
                  d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                </p>
                <p className="font-sans text-editorial-body leading-relaxed">
                  Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : 
                  <a href="mailto:privacy@nouvelleafrique.com" className="text-primary hover:underline ml-1">
                    privacy@nouvelleafrique.com
                  </a>
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-editorial-black mb-4 pb-2 border-b border-editorial-divider">
                  5. Cookies
                </h2>
                <p className="font-sans text-editorial-body leading-relaxed">
                  Le site Nouvelle Afrique utilise des cookies pour améliorer l'expérience utilisateur et 
                  mesurer l'audience. En poursuivant votre navigation sur ce site, vous acceptez l'utilisation 
                  de cookies. Vous pouvez configurer votre navigateur pour refuser les cookies.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-editorial-black mb-4 pb-2 border-b border-editorial-divider">
                  6. Limitation de Responsabilité
                </h2>
                <p className="font-sans text-editorial-body leading-relaxed">
                  Nouvelle Afrique Media SAS ne saurait être tenue responsable des erreurs ou omissions 
                  présentes sur le site, ainsi que des dommages directs ou indirects résultant de l'accès 
                  ou de l'utilisation du site. Les informations contenues sur ce site sont fournies à 
                  titre indicatif et sont susceptibles d'être modifiées à tout moment.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-editorial-black mb-4 pb-2 border-b border-editorial-divider">
                  7. Droit Applicable
                </h2>
                <p className="font-sans text-editorial-body leading-relaxed">
                  Les présentes mentions légales sont soumises au droit sénégalais. En cas de litige, 
                  les tribunaux de Dakar seront seuls compétents.
                </p>
              </div>

              <div className="bg-muted p-6 rounded-lg mt-10">
                <p className="font-sans text-sm text-editorial-grey">
                  Pour toute question concernant ces mentions légales, vous pouvez nous contacter à 
                  l'adresse <a href="mailto:legal@nouvelleafrique.com" className="text-primary hover:underline">
                    legal@nouvelleafrique.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
