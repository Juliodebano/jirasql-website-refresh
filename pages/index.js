
import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section avec un effet parallaxe subtil */}
      <div className="relative h-[85vh] bg-black overflow-hidden">
        <div className="absolute inset-0 transform transition-transform duration-500 hover:scale-105">
          <Image
            src="/images/hero.png"
            alt="Salon Fabio Belli"
            layout="fill"
            objectFit="cover"
            className="opacity-80 filter saturate-75"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center transform transition-all duration-700 hover:scale-105 px-6">
            <div className="inline-block p-1 border-2 border-accent/30 rounded-sm mb-6">
              <h4 className="text-sm md:text-base text-white font-sans tracking-[0.3em] px-4 py-1">DEPUIS 2000</h4>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl text-white font-serif text-center mb-4 tracking-wider drop-shadow-lg">
              FABIO BELLI
              <span className="block text-xl md:text-2xl mt-6 font-sans font-light tracking-[0.2em]">
                COIFFEUR ET BARBIER
              </span>
            </h1>
            <Link 
              href="/reservation"
              className="inline-block mt-10 px-10 py-4 bg-accent text-white rounded-sm hover:bg-white hover:text-accent transition-all duration-300 transform hover:scale-105 tracking-wide"
            >
              Réserver maintenant
            </Link>
          </div>
        </div>
      </div>

      {/* Section Histoire avec éléments décoratifs vintage */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-16">
              <div className="h-[1px] flex-grow bg-accent/30"></div>
              <h2 className="text-5xl font-serif text-primary mx-8 text-center">Notre Histoire</h2>
              <div className="h-[1px] flex-grow bg-accent/30"></div>
            </div>
            <div className="space-y-8 text-secondary leading-relaxed relative">
              <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-accent/20 -z-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-accent/20 -z-10"></div>
              <p className="text-lg">
                Depuis son ouverture en 2000, le salon de coiffure Fabio Belli, à Châteauneuf-Grasse, dans les Alpes-Maritimes, redonne ses lettres de noblesse à la haute coiffure. Et si celui qui a donné son nom à cette enseigne réputée en est devenu le directeur artistique, l'équipe qui officie aujourd'hui au salon en est la digne héritière : exigence, sens du service et prestations impeccables y font le bonheur des clientes et clients les plus exigeants !
              </p>
              <p className="text-lg">
                Idéalement situé au cœur de Châteauneuf-Grasse, en face d'un grand parking où vous pourrez facilement stationner, le salon de coiffure Fabio Belli est à l'image de son créateur : un modèle de professionnalisme et de créativité. Femmes, hommes et enfants viennent s'y faire coiffer avec plaisir par Franck, Emma ou Patricia, qui mettent leur expertise et leur savoir-faire au service de la beauté des cheveux.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-accent/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent/5 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* Section Services avec cartes modernes mais style vintage */}
      <section className="py-24 bg-gradient-to-br from-primary/95 to-secondary/95 text-white relative">
        <div className="absolute inset-0 bg-[url('/images/vintage-texture.png')] opacity-5 mix-blend-overlay"></div>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center mb-16">
            <div className="h-[1px] flex-grow bg-white/30"></div>
            <h2 className="text-5xl font-serif mx-8 text-center">Nos Services</h2>
            <div className="h-[1px] flex-grow bg-white/30"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center transform transition-all duration-500 hover:scale-105">
              <div className="bg-white/10 p-10 rounded-sm backdrop-blur-sm border border-white/10 relative group">
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 mx-auto mb-6 border border-accent rounded-full flex items-center justify-center">
                  <span className="text-2xl font-serif">F</span>
                </div>
                <h3 className="text-2xl font-serif mb-6">Pour Elle</h3>
                <p className="text-gray-200 leading-relaxed">
                  La clientèle féminine profite d'un grand choix de prestations adaptées à tous les styles et toutes les envies : coupe classique ou tendance, coloration, mèches et balayage…
                </p>
              </div>
            </div>
            <div className="text-center transform transition-all duration-500 hover:scale-105">
              <div className="bg-white/10 p-10 rounded-sm backdrop-blur-sm border border-white/10 relative group">
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 mx-auto mb-6 border border-accent rounded-full flex items-center justify-center">
                  <span className="text-2xl font-serif">M</span>
                </div>
                <h3 className="text-2xl font-serif mb-6">Pour Lui</h3>
                <p className="text-gray-200 leading-relaxed">
                  Coupe, mèches, permanente, cover ou soin ciblé peuvent même être complétés par une taille de barbe et un Black Mask, qui rend la peau douce et nette.
                </p>
              </div>
            </div>
            <div className="text-center transform transition-all duration-500 hover:scale-105">
              <div className="bg-white/10 p-10 rounded-sm backdrop-blur-sm border border-white/10 relative group">
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 mx-auto mb-6 border border-accent rounded-full flex items-center justify-center">
                  <span className="text-2xl font-serif">E</span>
                </div>
                <h3 className="text-2xl font-serif mb-6">Pour les Enfants</h3>
                <p className="text-gray-200 leading-relaxed">
                  Le style n'étant pas une question d'âge, le salon accueille également la jeune clientèle, avec des coupes dédiées aux filles et aux garçons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
