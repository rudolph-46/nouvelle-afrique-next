import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MapPin, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Carrières | Nouvelle Afrique",
  description: "Rejoignez l'équipe de Nouvelle Afrique. Découvrez nos offres d'emploi.",
};

const jobs = [
  { 
    title: "Journaliste Économie", 
    location: "Paris / Dakar", 
    type: "CDI",
    description: "Nous recherchons un journaliste spécialisé en économie africaine pour couvrir les marchés financiers et le business."
  },
  { 
    title: "Community Manager", 
    location: "Paris", 
    type: "CDI",
    description: "Gérez notre présence sur les réseaux sociaux et animez notre communauté de lecteurs."
  },
  { 
    title: "Développeur Front-end", 
    location: "Remote", 
    type: "CDI",
    description: "Participez au développement de notre plateforme digitale et de nos applications mobiles."
  },
  { 
    title: "Correspondant Afrique de l'Est", 
    location: "Nairobi", 
    type: "CDI",
    description: "Couvrez l'actualité de la région est-africaine pour notre rédaction."
  },
];

export default function CarrieresPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8 md:py-12">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
          Carrières
        </h1>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Rejoignez une équipe passionnée par l'information et l'Afrique. 
          Nous offrons un environnement de travail stimulant et des opportunités de croissance.
        </p>
        
        <div className="space-y-6 mb-12">
          {jobs.map((job) => (
            <div key={job.title} className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="font-serif text-xl font-bold mb-2">{job.title}</h3>
                  <p className="text-muted-foreground mb-3">{job.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" /> {job.type}
                    </span>
                  </div>
                </div>
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded hover:bg-primary/90 transition-colors whitespace-nowrap">
                  Postuler
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-muted rounded-lg p-8">
          <h2 className="font-serif text-2xl font-bold mb-4">Candidature spontanée</h2>
          <p className="text-muted-foreground mb-4">
            Vous ne trouvez pas le poste idéal ? Envoyez-nous votre candidature spontanée, 
            nous sommes toujours à la recherche de nouveaux talents.
          </p>
          <Link href="/contact" className="text-primary hover:underline font-medium">
            Nous contacter →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
