import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className="relative h-[80vh] bg-black">
        <Image
          src="/images/hero.png"
          alt="Salon Fabio Belli"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center transform transition-all duration-700 hover:scale-105">
            <h1 className="text-5xl md:text-7xl text-white font-serif text-center px-4 mb-6 tracking-wider">
              FABIO BELLI
              <span className="block text-xl md:text-2xl mt-4 font-sans font-light tracking-widest">
                COIFFEUR ET BARBIER
              </span>
            </h1>
            <Link 
              href="/reservation"
              className="inline-block mt-8 px-8 py-3 bg-accent text-white rounded-full hover:bg-white hover:text-accent transition-all duration-300 transform hover:scale-105"
            >
              Réserver maintenant
            </Link>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif text-primary mb-12 text-center">Notre Histoire</h2>
            <div className="space-y-8 text-secondary leading-relaxed">
              <p className="text-lg">
                Depuis son ouverture en 2000, le salon de coiffure Fabio Belli, à Châteauneuf-Grasse, dans les Alpes-Maritimes, redonne ses lettres de noblesse à la haute coiffure. Et si celui qui a donné son nom à cette enseigne réputée en est devenu le directeur artistique, l'équipe qui officie aujourd'hui au salon en est la digne héritière : exigence, sens du service et prestations impeccables y font le bonheur des clientes et clients les plus exigeants !
              </p>
              <p className="text-lg">
                Idéalement situé au cœur de Châteauneuf-Grasse, en face d'un grand parking où vous pourrez facilement stationner, le salon de coiffure Fabio Belli est à l'image de son créateur : un modèle de professionnalisme et de créativité. Femmes, hommes et enfants viennent s'y faire coiffer avec plaisir par Franck, Emma ou Patricia, qui mettent leur expertise et leur savoir-faire au service de la beauté des cheveux.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center transform transition-all duration-500 hover:scale-105">
              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
                <h3 className="text-2xl font-serif mb-6">Pour Elle</h3>
                <p className="text-gray-200 leading-relaxed">
                  La clientèle féminine profite d'un grand choix de prestations adaptées à tous les styles et toutes les envies : coupe classique ou tendance, coloration, mèches et balayage…
                </p>
              </div>
            </div>
            <div className="text-center transform transition-all duration-500 hover:scale-105">
              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
                <h3 className="text-2xl font-serif mb-6">Pour Lui</h3>
                <p className="text-gray-200 leading-relaxed">
                  Coupe, mèches, permanente, cover ou soin ciblé peuvent même être complétés par une taille de barbe et un Black Mask, qui rend la peau douce et nette.
                </p>
              </div>
            </div>
            <div className="text-center transform transition-all duration-500 hover:scale-105">
              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
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