
import Layout from '../components/Layout';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Reservation() {
  const router = useRouter();
  const planityUrl = 'https://www.planity.com/fabio-belli-06740-chateauneuf-grasse-jlf';

  useEffect(() => {
    window.location.href = planityUrl;
  }, []);

  return (
    <Layout>
      <div className="py-40 bg-white relative flex items-center justify-center min-h-[60vh]">
        <div className="absolute inset-0 bg-[url('/images/vintage-texture.png')] opacity-5"></div>
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-xl mx-auto p-12 bg-white/80 backdrop-blur-sm border border-accent/10 shadow-lg relative">
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-accent/20 -z-10 -mt-4 -mr-4"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-accent/20 -z-10 -mb-4 -ml-4"></div>
            
            <h1 className="text-4xl font-serif text-primary mb-8">Réservation</h1>
            <p className="text-secondary mb-12 text-lg">
              Vous allez être redirigé vers notre plateforme de réservation en ligne...
            </p>
            <div className="flex items-center justify-center mb-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
            </div>
            <a 
              href={planityUrl}
              className="inline-block px-10 py-4 bg-accent text-white rounded-sm hover:bg-primary transition-colors"
            >
              Cliquez ici si vous n'êtes pas redirigé automatiquement
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
