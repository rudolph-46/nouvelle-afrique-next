import Link from 'next/link';

const categories = [
  { name: 'Politique', href: '/politique' },
  { name: 'Économie', href: '/economie' },
  { name: 'Sport', href: '/sport' },
  { name: 'Technologie', href: '/technologie' },
  { name: 'Culture', href: '/culture' },
];

export function Header() {
  return (
    <header className="bg-primary text-white">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-4 border-b border-white/10">
          <Link href="/" className="text-2xl md:text-3xl font-display font-bold">
            Nouvelle Afrique
          </Link>
          <div className="hidden md:flex items-center gap-4 text-sm">
            <Link href="/qui-sommes-nous" className="hover:text-gold transition">
              À propos
            </Link>
            <Link href="/contact" className="hover:text-gold transition">
              Contact
            </Link>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="py-3">
          <ul className="flex items-center gap-6 overflow-x-auto">
            {categories.map((cat) => (
              <li key={cat.href}>
                <Link
                  href={cat.href}
                  className="text-sm font-medium hover:text-gold transition whitespace-nowrap"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
