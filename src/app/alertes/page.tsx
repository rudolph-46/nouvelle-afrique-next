import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Bell, Mail, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Alertes & Notifications | Nouvelle Afrique",
  description: "Configurez vos alertes pour ne rien manquer de l'actualité africaine.",
};

export default function AlertesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8 md:py-12">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
          Alertes & Notifications
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8">
          Configurez vos alertes pour ne rien manquer de l'actualité africaine. 
          Choisissez les thématiques qui vous intéressent et le canal de notification préféré.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <Bell className="w-12 h-12 mx-auto text-primary mb-4" />
            <h3 className="font-serif text-xl font-bold mb-2">Push Notifications</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Recevez des alertes instantanées sur votre navigateur ou application mobile.
            </p>
            <button className="w-full bg-primary text-primary-foreground py-2 rounded hover:bg-primary/90 transition-colors">
              Activer
            </button>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <Mail className="w-12 h-12 mx-auto text-primary mb-4" />
            <h3 className="font-serif text-xl font-bold mb-2">Alertes Email</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Recevez un email dès qu'un article correspond à vos critères.
            </p>
            <button className="w-full bg-primary text-primary-foreground py-2 rounded hover:bg-primary/90 transition-colors">
              Configurer
            </button>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <Smartphone className="w-12 h-12 mx-auto text-primary mb-4" />
            <h3 className="font-serif text-xl font-bold mb-2">SMS</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Pour les breaking news les plus importantes, recevez un SMS.
            </p>
            <button className="w-full bg-primary text-primary-foreground py-2 rounded hover:bg-primary/90 transition-colors">
              Activer
            </button>
          </div>
        </div>
        
        <div className="bg-muted rounded-lg p-8">
          <h2 className="font-serif text-2xl font-bold mb-6">Thématiques disponibles</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Politique", "Économie", "Technologie", "Culture", "Sport", "Environnement", "Société", "International"].map((theme) => (
              <label key={theme} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-primary" />
                <span>{theme}</span>
              </label>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
