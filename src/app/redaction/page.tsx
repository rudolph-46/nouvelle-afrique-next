import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Notre Rédaction | Nouvelle Afrique",
  description: "Découvrez l'équipe de journalistes de Nouvelle Afrique.",
};

const teamMembers = [
  { name: "Aminata Diallo", role: "Rédactrice en chef", bio: "20 ans d'expérience dans le journalisme panafricain." },
  { name: "Kwame Asante", role: "Directeur éditorial", bio: "Spécialiste des questions économiques africaines." },
  { name: "Fatou Sow", role: "Chef de rubrique Politique", bio: "Ancienne correspondante à l'Union Africaine." },
  { name: "Mohamed Benali", role: "Chef de rubrique Économie", bio: "Expert en finances et marchés africains." },
  { name: "Grace Okonkwo", role: "Chef de rubrique Culture", bio: "Passionnée par les arts et la culture africaine." },
  { name: "Jean-Pierre Mukendi", role: "Chef de rubrique Sport", bio: "Journaliste sportif depuis 15 ans." },
];

export default function RedactionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8 md:py-12">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
          Notre Rédaction
        </h1>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Notre équipe de journalistes expérimentés travaille chaque jour pour vous apporter 
          une information de qualité sur l'actualité africaine. Découvrez les visages derrière Nouvelle Afrique.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-card border border-border rounded-lg p-6">
              <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-muted-foreground">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-center mb-1">{member.name}</h3>
              <p className="text-primary text-sm text-center mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground text-center">{member.bio}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-muted rounded-lg p-8">
          <h2 className="font-serif text-2xl font-bold mb-4">Rejoignez notre rédaction</h2>
          <p className="text-muted-foreground mb-4">
            Vous êtes journaliste et passionné par l'Afrique ? Nous sommes toujours à la recherche 
            de talents pour renforcer notre équipe.
          </p>
          <Link href="/carrieres" className="text-primary hover:underline font-medium">
            Voir nos offres d'emploi →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
