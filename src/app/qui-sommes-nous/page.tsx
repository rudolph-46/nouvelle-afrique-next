import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Qui Sommes-Nous | Nouvelle Afrique",
  description: "Découvrez Nouvelle Afrique, votre source d'information de référence sur le continent africain.",
};

export default function QuiSommesNousPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-editorial-black text-background py-12 md:py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-3xl md:text-5xl font-bold mb-6">
                Qui Sommes-Nous
              </h1>
              <p className="font-sans text-lg md:text-xl text-background/80">
                Nouvelle Afrique, votre source d'information de référence sur le continent africain
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="container py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-editorial-black mb-6">
                Notre Mission
              </h2>
              <p className="font-sans text-editorial-body leading-relaxed mb-8">
                Fondée avec la vision de devenir la voix incontournable de l'Afrique moderne, 
                Nouvelle Afrique s'engage à offrir une couverture éditoriale de qualité sur 
                l'actualité politique, économique, culturelle et sociale du continent africain.
              </p>

              <div className="my-12">
                <img 
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop"
                  alt="Notre équipe de rédaction"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-sm text-editorial-grey mt-3 text-center italic">
                  Notre équipe de rédaction basée à Dakar, Abidjan et Paris
                </p>
              </div>

              <h2 className="font-serif text-2xl md:text-3xl font-bold text-editorial-black mb-6">
                Nos Valeurs
              </h2>
              <p className="font-sans text-editorial-body leading-relaxed mb-6">
                Nous croyons en un journalisme rigoureux, indépendant et engagé. Nos valeurs 
                fondamentales guident chaque article que nous publions :
              </p>
              
              <ul className="space-y-4 mb-8 list-none pl-0">
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="font-sans text-editorial-black">Intégrité</strong>
                    <p className="font-sans text-editorial-body">
                      Nous nous engageons à rapporter les faits avec précision et honnêteté.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="font-sans text-editorial-black">Excellence</strong>
                    <p className="font-sans text-editorial-body">
                      Chaque contenu est soumis à une vérification rigoureuse avant publication.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="font-sans text-editorial-black">Diversité</strong>
                    <p className="font-sans text-editorial-body">
                      Nous célébrons la richesse et la diversité du continent africain.
                    </p>
                  </div>
                </li>
              </ul>

              <h2 className="font-serif text-2xl md:text-3xl font-bold text-editorial-black mb-6">
                Notre Équipe
              </h2>
              <p className="font-sans text-editorial-body leading-relaxed mb-8">
                Notre rédaction est composée de journalistes expérimentés, d'analystes politiques 
                et économiques, ainsi que de correspondants présents dans plus de 20 pays africains. 
                Cette diversité nous permet d'offrir une perspective authentique et nuancée sur 
                les enjeux du continent.
              </p>

              <div className="bg-muted p-8 rounded-lg">
                <h3 className="font-serif text-xl font-bold text-editorial-black mb-4">
                  Contactez-nous
                </h3>
                <p className="font-sans text-editorial-body mb-4">
                  Pour toute question ou collaboration, n'hésitez pas à nous contacter :
                </p>
                <p className="font-sans text-editorial-body">
                  <strong>Email :</strong> redaction@nouvelleafrique.com<br />
                  <strong>Téléphone :</strong> +221 33 123 45 67
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
