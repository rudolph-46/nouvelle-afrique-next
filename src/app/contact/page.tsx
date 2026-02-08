"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé ! Nous vous répondrons dans les plus brefs délais.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-editorial-black text-background py-12 md:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">
                Contactez-Nous
              </h1>
              <p className="font-sans text-lg text-background/80">
                Une question, une suggestion ou une collaboration ? Nous sommes à votre écoute.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="container py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-editorial-black mb-6">
                Envoyez-nous un message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-sans text-sm font-medium text-editorial-black mb-2">
                    Nom complet
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-sans text-sm font-medium text-editorial-black mb-2">
                    Adresse email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block font-sans text-sm font-medium text-editorial-black mb-2">
                    Sujet
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Objet de votre message"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-sans text-sm font-medium text-editorial-black mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full min-h-[150px]"
                    placeholder="Votre message..."
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-background">
                  Envoyer le message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-editorial-black mb-6">
                Nos coordonnées
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-editorial-black mb-1">Adresse</h3>
                    <p className="font-sans text-editorial-body text-sm">
                      123 Avenue de l'Indépendance<br />
                      Dakar, Sénégal
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-editorial-black mb-1">Email</h3>
                    <p className="font-sans text-editorial-body text-sm">
                      <a href="mailto:contact@nouvelleafrique.com" className="hover:text-primary transition-colors">
                        contact@nouvelleafrique.com
                      </a><br />
                      <a href="mailto:redaction@nouvelleafrique.com" className="hover:text-primary transition-colors">
                        redaction@nouvelleafrique.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-editorial-black mb-1">Téléphone</h3>
                    <p className="font-sans text-editorial-body text-sm">
                      +221 33 123 45 67<br />
                      +221 77 890 12 34
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-editorial-black mb-1">Horaires</h3>
                    <p className="font-sans text-editorial-body text-sm">
                      Lundi - Vendredi : 8h00 - 18h00<br />
                      Samedi : 9h00 - 13h00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
