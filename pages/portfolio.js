
import Layout from '../components/Layout';
import Image from 'next/image';
import { useState } from 'react';

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Effet d'échelle lorsqu'une image est agrandie
  const handleImageClick = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  const handleCloseImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative aspect-square cursor-pointer group"
            onClick={() => handleImageClick(image)}
          >
            <div className="absolute inset-0 border border-accent/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="overflow-hidden">
              <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-105">
                <Image
                  src={image}
                  alt={`Portfolio ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-filter duration-700 group-hover:saturate-125"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
              <span className="inline-block px-4 py-2 border border-white/20 text-white text-sm tracking-wide">
                VOIR PLUS
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={handleCloseImage}
        >
          <div className="relative w-full max-w-5xl h-[80vh] p-4">
            <div className="relative h-full w-full border border-accent/20">
              <Image
                src={selectedImage}
                alt="Selected work"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <button 
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-black/40 text-white border border-white/20 text-2xl"
              onClick={handleCloseImage}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default function Portfolio() {
  const images = [
    '/images/portfolio1.png',
    '/images/portfolio2.png',
    '/images/portfolio3.png',
    '/images/portfolio4.png',
    '/images/portfolio5.png',
    '/images/portfolio6.png',
  ];

  return (
    <Layout>
      <div className="pt-28 pb-20 bg-white relative">
        <div className="absolute inset-0 bg-[url('/images/vintage-texture.png')] opacity-5"></div>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center mb-16">
            <div className="h-[1px] flex-grow bg-accent/30"></div>
            <h1 className="text-5xl font-serif text-primary mx-8 text-center">Nos Réalisations</h1>
            <div className="h-[1px] flex-grow bg-accent/30"></div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Gallery images={images} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
