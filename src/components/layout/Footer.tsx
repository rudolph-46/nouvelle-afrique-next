import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const footerLinks = {
  services: {
    title: "Services",
    links: [
      { label: "Abonnement", path: "/abonnement" },
      { label: "Newsletter", path: "/newsletter" },
      { label: "Applications", path: "/applications" },
      { label: "Alertes", path: "/alertes" },
    ],
  },
  apropos: {
    title: "À Propos",
    links: [
      { label: "Qui sommes-nous", path: "/qui-sommes-nous" },
      { label: "Rédaction", path: "/redaction" },
      { label: "Carrières", path: "/carrieres" },
      { label: "Contact", path: "/contact" },
    ],
  },
  legal: {
    title: "Mentions Légales",
    links: [
      { label: "CGU", path: "/cgu" },
      { label: "Politique de confidentialité", path: "/confidentialite" },
      { label: "Cookies", path: "/cookies" },
      { label: "Publicité", path: "/publicite" },
    ],
  },
  partenaires: {
    title: "Partenaires",
    links: [
      { label: "Nos Partenaires", path: "/partenaires" },
      { label: "Événements", path: "/evenements" },
    ],
  },
};

const Footer = () => {
  return (
    <footer className="bg-editorial-black text-background">
      {/* Zone 1: Logo and Quick Links */}
      <div className="border-b border-editorial-grey/20">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="font-serif text-2xl font-bold text-primary">
              NOUVELLE AFRIQUE
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/qui-sommes-nous" className="font-sans text-sm text-background/70 hover:text-primary transition-colors">
                Qui Sommes Nous
              </Link>
              <Link href="/mentions-legales" className="font-sans text-sm text-background/70 hover:text-primary transition-colors">
                Mentions Légales
              </Link>
              <Link href="/contact" className="font-sans text-sm text-background/70 hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Zone 2: Corporate Sections */}
      <div className="border-b border-editorial-grey/20">
        <div className="container py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-background/50 mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.path}
                        className="font-sans text-sm text-background/70 hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Zone 3: Copyright & Social */}
      <div className="container py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-background/50">
            © Nouvelle Afrique 2025. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-background/50 hover:text-primary transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="text-background/50 hover:text-primary transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="text-background/50 hover:text-primary transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-background/50 hover:text-primary transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="#" className="text-background/50 hover:text-primary transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
