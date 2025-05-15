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
      <div className="py-32 bg-white select-none">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif text-primary mb-8">Réservation</h1>
          <p className="text-secondary mb-8">
            Vous allez être redirigé vers notre plateforme de réservation en ligne...
          </p>
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent mx-auto"></div>
          <a 
            href={planityUrl}
            className="inline-block mt-8 px-8 py-3 bg-accent text-white rounded hover:bg-opacity-90 transition-colors"
          >
            Cliquez ici si vous n'êtes pas redirigé automatiquement
          </a>
        </div>
      </div>
    </Layout>
  );
} 