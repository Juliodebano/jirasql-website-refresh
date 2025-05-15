
import Layout from '../components/Layout';
import Image from 'next/image';

const ProductCard = ({ name, description, image, brand, price }) => {
  return (
    <div className="bg-white border border-accent/10 rounded-sm shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div className="p-8 relative">
        <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-accent/10 -z-10 -mt-1 -mr-1"></div>
        <p className="text-accent text-sm uppercase tracking-widest mb-3">{brand}</p>
        <h3 className="text-xl font-serif text-primary mb-3">{name}</h3>
        <p className="text-secondary mb-4">{description}</p>
        {price && (
          <p className="text-accent font-serif text-lg">{price} €</p>
        )}
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
      image: '/images/product1.png',
      price: '24'
    },
    {
      name: 'Masque Nutritif',
      brand: 'L\'Oréal Professionnel',
      description: 'Un soin intensif qui nourrit en profondeur et restaure l\'éclat des cheveux.',
      image: '/images/product2.png',
      price: '32'
    },
    {
      name: 'Huile Sublimatrice',
      brand: 'Shu Uemura',
      description: 'Une huile légère qui apporte brillance et douceur aux cheveux.',
      image: '/images/product3.png',
      price: '45'
    },
    {
      name: 'Sérum Protection Thermique',
      brand: 'GHD',
      description: 'Un sérum qui protège les cheveux de la chaleur des appareils de coiffage.',
      image: '/images/product4.png',
      price: '28'
    }
  ];

  return (
    <Layout>
      <div className="pt-28 pb-20 bg-gray-50 relative">
        <div className="absolute inset-0 bg-[url('/images/vintage-texture.png')] opacity-5"></div>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center mb-16">
            <div className="h-[1px] flex-grow bg-accent/30"></div>
            <h1 className="text-5xl font-serif text-primary mx-8 text-center">Nos Produits</h1>
            <div className="h-[1px] flex-grow bg-accent/30"></div>
          </div>
          
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-secondary text-lg">
              Découvrez notre sélection de produits professionnels pour prendre soin de vos cheveux. 
              Nos experts vous conseillent les meilleurs soins adaptés à vos besoins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>

          <div className="mt-20 text-center max-w-2xl mx-auto p-8 bg-white/80 backdrop-blur-sm border border-accent/10 shadow-lg">
            <div className="inline-block mb-6">
              <div className="w-12 h-[1px] bg-accent/50 mx-auto"></div>
              <div className="w-3 h-3 border border-accent/50 transform rotate-45 mx-auto my-2"></div>
              <div className="w-12 h-[1px] bg-accent/50 mx-auto"></div>
            </div>
            <p className="text-secondary text-lg">
              Pour plus d'informations sur nos produits et des conseils personnalisés,
              n'hésitez pas à nous consulter lors de votre prochaine visite.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
