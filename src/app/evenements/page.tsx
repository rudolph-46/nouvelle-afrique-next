import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Calendar, MapPin, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Événements | Nouvelle Afrique",
  description: "Retrouvez les événements organisés ou couverts par Nouvelle Afrique.",
};

const events = [
  {
    title: "Africa Business Summit 2025",
    date: "15-17 Mars 2025",
    location: "Abidjan, Côte d'Ivoire",
    description: "Le rendez-vous annuel des entrepreneurs et investisseurs africains.",
    attendees: "500+ participants"
  },
  {
    title: "Forum Tech Africa",
    date: "22-23 Avril 2025",
    location: "Lagos, Nigeria",
    description: "Conférence dédiée à l'innovation technologique et aux startups africaines.",
    attendees: "300+ participants"
  },
  {
    title: "Rencontres Économiques de Dakar",
    date: "10 Mai 2025",
    location: "Dakar, Sénégal",
    description: "Débats et analyses sur les perspectives économiques du continent.",
    attendees: "200+ participants"
  },
  {
    title: "Africa Media Week",
    date: "5-7 Juin 2025",
    location: "Nairobi, Kenya",
    description: "Semaine dédiée aux médias africains et à la liberté de la presse.",
    attendees: "400+ participants"
  },
];

export default function EvenementsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8 md:py-12">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
          Événements
        </h1>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Retrouvez les événements organisés ou couverts par Nouvelle Afrique. 
          Conférences, forums, rencontres : des moments privilégiés d'échange et de networking.
        </p>
        
        <div className="space-y-6 mb-12">
          {events.map((event) => (
            <div key={event.title} className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-primary" /> {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-primary" /> {event.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-primary" /> {event.attendees}
                    </span>
                  </div>
                </div>
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded hover:bg-primary/90 transition-colors whitespace-nowrap">
                  S'inscrire
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-muted rounded-lg p-8">
          <h2 className="font-serif text-2xl font-bold mb-4">Organiser un événement avec nous</h2>
          <p className="text-muted-foreground mb-6">
            Vous souhaitez organiser un événement en partenariat avec Nouvelle Afrique ? 
            Notre équipe événementielle est à votre disposition.
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
