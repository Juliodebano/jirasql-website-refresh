
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    } else {
      setIsScrolled(true);
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
      ? 'bg-primary/95 shadow-lg backdrop-blur-md'
      : 'bg-transparent'
    : 'bg-primary/95 shadow-lg backdrop-blur-md';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${navBackground}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          <Link 
            href="/" 
            className="text-2xl lg:text-3xl font-serif text-white hover:text-accent transition-all duration-300 tracking-widest"
          >
            FABIO BELLI
          </Link>
          
          {/* Menu mobile */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {!isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Menu desktop */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-sm transition-all duration-300 border border-transparent ${
                  router.pathname === item.href
                    ? 'text-accent border-accent/30'
                    : 'text-white hover:text-accent hover:border-accent/30'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-md shadow-lg">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-3 rounded-sm transition-all duration-300 ${
                    router.pathname === item.href
                      ? 'text-accent bg-white/5'
                      : 'text-white hover:text-accent hover:bg-white/5'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white relative">
      {/* Texture subtile vintage */}
      <div className="absolute inset-0 bg-[url('/images/vintage-texture.png')] opacity-5 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6">
        {/* Séparateur décoratif */}
        <div className="pt-16 flex items-center justify-center">
          <div className="h-[1px] w-16 bg-accent/50"></div>
          <div className="w-3 h-3 border border-accent/50 transform rotate-45 mx-4"></div>
          <div className="h-[1px] w-16 bg-accent/50"></div>
        </div>
        
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif mb-8 text-accent/80">Contact</h3>
            <p className="mb-2">3 Chemin du Cabanon</p>
            <p className="mb-6">06740 Châteauneuf-Grasse</p>
            <a 
              href="tel:+33492604870" 
              className="inline-block text-lg hover:text-accent transition-colors group"
            >
              +33 4 92 60 48 70
              <span className="block h-[1px] w-0 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-serif mb-8 text-accent/80">Horaires</h3>
            <p className="mb-2">Mardi - Samedi</p>
            <p className="text-xl mb-6">9h00 - 18h30</p>
            <p className="text-gray-400">Dimanche - Lundi: Fermé</p>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-serif mb-8 text-accent/80">Réservation</h3>
            <Link 
              href="/reservation" 
              className="inline-block px-8 py-3 bg-accent/90 text-white rounded-sm hover:bg-white hover:text-accent border border-transparent hover:border-accent/30 transition-all duration-300"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
        
        <div className="py-8 border-t border-white/10 text-center text-sm text-gray-400">
          <p>© {currentYear} Fabio Belli - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
};

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
