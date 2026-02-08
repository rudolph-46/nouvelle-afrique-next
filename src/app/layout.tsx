import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { ConvexClientProvider } from '@/components/ConvexClientProvider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: {
    default: 'Nouvelle Afrique | Actualités, Politique, Économie & Culture Africaine',
    template: '%s | Nouvelle Afrique',
  },
  description: 'Votre source d\'informations de référence sur l\'actualité africaine. Politique, économie, culture et analyses approfondies du continent.',
  keywords: ['Afrique', 'actualités africaines', 'politique africaine', 'économie africaine', 'culture africaine'],
  authors: [{ name: 'Nouvelle Afrique' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Nouvelle Afrique',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@NouvelleAfrique',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${playfair.variable} min-h-screen bg-white font-sans`}>
        <ConvexClientProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
