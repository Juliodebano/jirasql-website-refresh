import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomePage = router.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        if (!isScrolled) setIsScrolled(true);
      } else {
        if (isScrolled) setIsScrolled(false);
      }
    };
    
    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isHomePage, isScrolled]);

  const navItems = [
    { href: '/', label: 'Accueil' },
    { href: '/equipe', label: 'L\'Équipe' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/produits', label: 'Produits' },
    { href: '/reservation', label: 'Réservation' }
  ];

  const navBackground = isHomePage
    ? isScrolled
      ? 'bg-primary shadow-lg'
      : 'bg-primary/80 backdrop-blur-sm'
    : 'bg-primary shadow-lg';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${navBackground}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link 
            href="/" 
            className="text-2xl font-serif text-white hover:text-accent transition-all duration-300"
          >
            FABIO BELLI
          </Link>
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  router.pathname === item.href
                    ? 'text-accent bg-white/10'
                    : 'text-white hover:text-accent hover:bg-white/5'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif mb-6">Contact</h3>
            <p className="mb-2">3 Chemin du Cabanon</p>
            <p className="mb-4">06740 Châteauneuf-Grasse</p>
            <a 
              href="tel:+33492604870" 
              className="inline-block text-lg hover:text-accent transition-colors"
            >
              +33 4 92 60 48 70
            </a>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-serif mb-6">Horaires</h3>
            <p className="mb-2">Mardi - Samedi</p>
            <p className="text-xl mb-4">9h00 - 18h30</p>
            <p className="text-gray-400">Dimanche - Lundi: Fermé</p>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-serif mb-6">Réservation</h3>
            <Link 
              href="/reservation" 
              className="inline-block px-8 py-3 bg-accent text-white rounded-lg hover:bg-white hover:text-accent transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Fabio Belli - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
};

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
} 