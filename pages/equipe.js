
import Layout from '../components/Layout';
import Image from 'next/image';

const TeamMember = ({ name, role, image, description }) => {
  return (
    <div className="group">
      <div className="relative w-full aspect-[4/5] mx-auto mb-8 rounded-sm overflow-hidden shadow-xl border border-accent/10">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
          <h3 className="text-2xl lg:text-3xl font-serif mb-2">{name}</h3>
          <p className="text-accent mb-4">{role}</p>
          <p className="text-gray-200 text-sm transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function Team() {
  const team = [
    {
      name: 'Patricia',
      role: 'Coiffeuse Styliste',
      image: '/images/patricia.png',
      description: 'Avec plus de 15 ans d'expérience, Patricia excelle dans les coupes sophistiquées et les techniques de coloration avancées.'
    },
    {
      name: 'Franck',
      role: 'Coiffeur Styliste',
      image: '/images/franck.jpeg',
      description: 'Spécialiste du style masculin, Franck est reconnu pour ses talents en coupe homme et entretien de barbe.'
    },
    {
      name: 'Claudine',
      role: 'Coiffeuse Styliste',
      image: '/images/claudine.png',
      description: 'Reconnue pour sa créativité, Claudine maîtrise parfaitement les dernières tendances et techniques innovantes.'
    }
  ];

  return (
    <Layout>
      <div className="pt-24 pb-20 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="absolute inset-0 bg-[url('/images/vintage-texture.png')] opacity-5"></div>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center mb-16">
            <div className="h-[1px] flex-grow bg-accent/30"></div>
            <h1 className="text-5xl font-serif text-primary mx-8 text-center">Notre Équipe</h1>
            <div className="h-[1px] flex-grow bg-accent/30"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {team.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
          
          <div className="max-w-2xl mx-auto mt-20 text-center">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-sm border border-accent/10 shadow-lg relative">
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-accent/20 -z-10 -mt-4 -mr-4"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-accent/20 -z-10 -mb-4 -ml-4"></div>
              <p className="text-lg text-secondary mb-6 leading-relaxed">
                Notre équipe passionnée met son expertise et son savoir-faire à votre service pour sublimer votre beauté.
              </p>
              <p className="text-lg text-secondary leading-relaxed">
                Chaque membre de notre équipe suit régulièrement des formations pour rester à la pointe des dernières tendances et techniques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
