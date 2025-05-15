import Layout from '../components/Layout';
import Image from 'next/image';

const ProductCard = ({ name, description, image, brand }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-64">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <p className="text-accent text-sm uppercase tracking-wide mb-2">{brand}</p>
        <h3 className="text-xl font-serif text-primary mb-2">{name}</h3>
        <p className="text-secondary">{description}</p>
      </div>
    </div>
  );
};

export default function Products() {
  const products = [
    {
      name: 'Shampooing Réparateur',
      brand: 'Kérastase',
      description: 'Un shampooing professionnel qui répare et fortifie les cheveux abîmés.',
      image: '/images/product1.png'
    },
    {
      name: 'Masque Nutritif',
      brand: 'L\'Oréal Professionnel',
      description: 'Un soin intensif qui nourrit en profondeur et restaure l\'éclat des cheveux.',
      image: '/images/product2.png'
    },
    {
      name: 'Huile Sublimatrice',
      brand: 'Shu Uemura',
      description: 'Une huile légère qui apporte brillance et douceur aux cheveux.',
      image: '/images/product3.png'
    },
    {
      name: 'Sérum Protection Thermique',
      brand: 'GHD',
      description: 'Un sérum qui protège les cheveux de la chaleur des appareils de coiffage.',
      image: '/images/product4.png'
    }
  ];

  return (
    <Layout>
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif text-primary text-center mb-12">Nos Produits</h1>
          
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-secondary">
              Découvrez notre sélection de produits professionnels pour prendre soin de vos cheveux. 
              Nos experts vous conseillent les meilleurs soins adaptés à vos besoins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-secondary">
              Pour plus d'informations sur nos produits et des conseils personnalisés,
              n'hésitez pas à nous consulter lors de votre prochaine visite.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
} 