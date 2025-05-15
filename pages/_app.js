import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div className="select-none">
      <Head>
        <title>Fabio Belli - Coiffeur et Barbier</title>
        <meta name="description" content="Salon de coiffure Fabio Belli à Châteauneuf-Grasse. Coiffure, barbier et soins pour femmes, hommes et enfants." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp; 