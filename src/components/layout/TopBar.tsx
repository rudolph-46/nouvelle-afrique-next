"use client";

import { Facebook, Twitter, Instagram, Youtube, Search, User, Settings } from "lucide-react";
import Link from "next/link";

const TopBar = () => {
  // TODO: Integrate with Convex auth when available
  const user = null;
  const isAdmin = false;

  return (
    <div className="bg-background border-b border-editorial-divider">
      <div className="container flex items-center justify-between py-2">
        <div className="hidden md:flex items-center gap-6">
          <Link href="/contact" className="font-sans text-xs text-editorial-grey hover:text-primary transition-colors">
            Contact
          </Link>
          <Link href="/abonnement" className="font-sans text-xs text-editorial-grey hover:text-primary transition-colors">
            Abonnez-vous
          </Link>
          <Link href="/newsletter" className="font-sans text-xs text-editorial-grey hover:text-primary transition-colors">
            Newsletter
          </Link>
        </div>
        <div className="flex items-center gap-4 ml-auto">
          <a href="#" className="text-editorial-body hover:text-primary transition-colors">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="#" className="text-editorial-body hover:text-primary transition-colors">
            <Twitter className="w-4 h-4" />
          </a>
          <a href="#" className="text-editorial-body hover:text-primary transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#" className="text-editorial-body hover:text-primary transition-colors">
            <Youtube className="w-4 h-4" />
          </a>
          <div className="w-px h-4 bg-editorial-divider mx-2" />
          <button className="text-editorial-body hover:text-primary transition-colors">
            <Search className="w-4 h-4" />
          </button>
          <div className="w-px h-4 bg-editorial-divider mx-2" />
          {user ? (
            <div className="flex items-center gap-3">
              {isAdmin && (
                <Link 
                  href="/admin" 
                  className="text-primary hover:text-primary/80 transition-colors"
                  title="Administration"
                >
                  <Settings className="w-4 h-4" />
                </Link>
              )}
              <Link 
                href="/auth" 
                className="text-editorial-body hover:text-primary transition-colors"
                title="Mon compte"
              >
                <User className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <Link 
              href="/auth" 
              className="font-sans text-xs text-editorial-grey hover:text-primary transition-colors"
            >
              Connexion
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
