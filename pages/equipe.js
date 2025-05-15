import Layout from '../components/Layout';
import Image from 'next/image';

const TeamMember = ({ name, role, image }) => {
  return (
    <div className="group">
      <div className="relative w-72 h-72 mx-auto mb-8 rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-105 shadow-xl">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-2xl font-serif mb-2">{name}</h3>
          <p className="text-gray-200">{role}</p>
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
      image: '/images/patricia.png'
    },
    {
      name: 'Franck',
      role: 'Coiffeur Styliste',
      image: '/images/franck.jpeg'
    },
    {
      name: 'Claudine',
      role: 'Coiffeuse Styliste',
      image: '/images/claudine.png'
    }
  ];

  return (
    <Layout>
      <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-serif text-primary text-center mb-16">Notre Équipe</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
            {team.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
          <div className="max-w-2xl mx-auto mt-20 text-center">
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
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