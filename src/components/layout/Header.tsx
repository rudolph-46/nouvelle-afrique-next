"use client";

import { useState, useEffect } from "react";
import TopBar from "./TopBar";
import Navigation from "./Navigation";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header>
        <TopBar />
        
        {/* Full Masthead with Description - visible when not scrolled */}
        <div className={`bg-background transition-all duration-300 ${isScrolled ? 'hidden' : 'block'}`}>
          <div className="container py-6 md:py-8">
            <div className="flex flex-col items-center justify-center text-center">
              <Link href="/" className="masthead text-2xl md:text-masthead tracking-wide mb-1 md:mb-2">
                NOUVELLE AFRIQUE
              </Link>
              <p className="font-serif text-sm md:text-xl text-editorial-grey italic">
                L'Afrique en marche
              </p>
            </div>
          </div>
        </div>
        
        <Navigation />
      </header>

      {/* Sticky Header - appears on scroll */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-background border-b border-editorial-divider transition-transform duration-300 ${
          isScrolled ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container py-3">
          <div className="flex items-center justify-center">
            <Link href="/" className="masthead text-xl md:text-2xl tracking-wide">
              NOUVELLE AFRIQUE
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
