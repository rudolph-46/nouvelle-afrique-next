"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "À la Une", href: "/" },
  { label: "Politique", href: "/politique" },
  { label: "Économie", href: "/economie" },
  { label: "Technologie", href: "/technologie" },
  { label: "Culture", href: "/culture" },
  { label: "Sport", href: "/sport" },
  { label: "Opinions", href: "/opinions" },
  { label: "Vidéos", href: "/videos" },
];

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-y border-editorial-divider sticky top-0 z-40">
      <div className="container">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between py-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="nav-link"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden py-3">
          <button
            className="text-editorial-body flex items-center gap-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            <span className="font-sans text-sm">Menu</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 animate-fade-in border-t border-editorial-divider pt-4">
            <div className="grid grid-cols-2 gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="nav-link py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
