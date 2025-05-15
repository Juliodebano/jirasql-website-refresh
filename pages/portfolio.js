import Layout from '../components/Layout';
import Image from 'next/image';
import { useState } from 'react';

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative aspect-square cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image}
              alt={`Portfolio ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={selectedImage}
              alt="Selected work"
              layout="fill"
              objectFit="contain"
            />
            <button 
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setSelectedImage(null)}
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
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif text-primary text-center mb-12">Nos Réalisations</h1>
          <Gallery images={images} />
        </div>
      </div>
    </Layout>
  );
} 