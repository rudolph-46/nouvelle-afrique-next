import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Smartphone, Tablet } from "lucide-react";

export const metadata: Metadata = {
  title: "Nos Applications | Nouvelle Afrique",
  description: "Téléchargez nos applications mobiles pour rester informé partout.",
};

export default function ApplicationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8 md:py-12">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
          Nos Applications
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="text-center">
            <Smartphone className="w-24 h-24 mx-auto text-primary mb-6" />
            <h3 className="font-serif text-2xl font-bold mb-4">Application Mobile</h3>
            <p className="text-muted-foreground mb-6">
              Restez informé où que vous soyez avec notre application mobile. 
              Notifications personnalisées, lecture hors-ligne et interface optimisée.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-foreground text-background px-6 py-3 rounded-lg flex items-center gap-2">
                <span className="text-xs">Télécharger sur</span>
                <span className="font-bold">App Store</span>
              </button>
              <button className="bg-foreground text-background px-6 py-3 rounded-lg flex items-center gap-2">
                <span className="text-xs">Disponible sur</span>
                <span className="font-bold">Google Play</span>
              </button>
            </div>
          </div>
          
          <div className="text-center">
            <Tablet className="w-24 h-24 mx-auto text-primary mb-6" />
            <h3 className="font-serif text-2xl font-bold mb-4">Application Tablette</h3>
            <p className="text-muted-foreground mb-6">
              Une expérience de lecture enrichie sur grand écran. 
              Profitez de nos contenus multimédia dans les meilleures conditions.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-foreground text-background px-6 py-3 rounded-lg flex items-center gap-2">
                <span className="text-xs">Télécharger sur</span>
                <span className="font-bold">App Store</span>
              </button>
              <button className="bg-foreground text-background px-6 py-3 rounded-lg flex items-center gap-2">
                <span className="text-xs">Disponible sur</span>
                <span className="font-bold">Google Play</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-muted rounded-lg p-8">
          <h2 className="font-serif text-2xl font-bold mb-4">Fonctionnalités</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold mb-2">Lecture hors-ligne</h4>
              <p className="text-sm text-muted-foreground">Téléchargez vos articles pour les lire sans connexion.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Notifications</h4>
              <p className="text-sm text-muted-foreground">Alertes personnalisées selon vos centres d'intérêt.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Mode sombre</h4>
              <p className="text-sm text-muted-foreground">Lecture confortable de jour comme de nuit.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
