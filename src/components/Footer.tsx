import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Nouvelle Afrique</h3>
            <p className="text-gray-400 text-sm">
              Votre source d'informations de référence sur l'actualité africaine.
            </p>
          </div>
          
          {/* Catégories */}
          <div>
            <h4 className="font-semibold mb-4">Catégories</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/politique" className="hover:text-white">Politique</Link></li>
              <li><Link href="/economie" className="hover:text-white">Économie</Link></li>
              <li><Link href="/sport" className="hover:text-white">Sport</Link></li>
              <li><Link href="/technologie" className="hover:text-white">Technologie</Link></li>
              <li><Link href="/culture" className="hover:text-white">Culture</Link></li>
            </ul>
          </div>
          
          {/* À propos */}
          <div>
            <h4 className="font-semibold mb-4">À propos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/qui-sommes-nous" className="hover:text-white">Qui sommes-nous</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link></li>
              <li><Link href="/confidentialite" className="hover:text-white">Confidentialité</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-3">
              Recevez nos articles directement dans votre boîte mail.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-3 py-2 text-sm bg-white/10 rounded-l focus:outline-none focus:ring-1 focus:ring-gold"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-accent text-white text-sm font-medium rounded-r hover:bg-accent/90 transition"
              >
                OK
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Nouvelle Afrique. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
