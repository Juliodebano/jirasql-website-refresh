
import Layout from '../components/Layout';
import Image from 'next/image';
import { useState } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to your backend
    // For now, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Votre message a été envoyé. Nous vous répondrons dans les plus brefs délais.'
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <Layout>
      <div className="pt-28 pb-20 bg-gradient-to-br from-cream to-white relative">
        <div className="absolute inset-0 bg-[url('/images/vintage-texture.png')] opacity-5"></div>
        
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center mb-16">
            <div className="h-[1px] flex-grow bg-accent/30"></div>
            <h1 className="text-5xl font-serif text-primary mx-8 text-center">Contactez-Nous</h1>
            <div className="h-[1px] flex-grow bg-accent/30"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-sm border border-accent/10 shadow-vintage relative">
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-accent/20 -z-10 -mt-4 -mr-4"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-accent/20 -z-10 -mb-4 -ml-4"></div>
              
              <h2 className="text-3xl font-serif mb-8 text-primary">Informations</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Adresse</h3>
                    <p className="text-secondary">3 Chemin du Cabanon</p>
                    <p className="text-secondary">06740 Châteauneuf-Grasse</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Téléphone</h3>
                    <a href="tel:+33492604870" className="text-secondary hover:text-accent transition-colors">+33 4 92 60 48 70</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Horaires</h3>
                    <p className="text-secondary">Mardi - Samedi: 9h00 - 18h30</p>
                    <p className="text-secondary">Dimanche - Lundi: Fermé</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-medium text-lg mb-2">Retrouvez-nous</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-sm border border-accent/10 shadow-vintage relative">
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-accent/20 -z-10 -mt-4 -mr-4"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-accent/20 -z-10 -mb-4 -ml-4"></div>
              
              <h2 className="text-3xl font-serif mb-8 text-primary">Formulaire de Contact</h2>
              
              {formStatus.submitted ? (
                <div className={`p-4 rounded-sm ${formStatus.error ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'}`}>
                  <p>{formStatus.message}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-secondary">Nom</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-warm rounded-sm focus:outline-none focus:ring-1 focus:ring-accent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-secondary">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-warm rounded-sm focus:outline-none focus:ring-1 focus:ring-accent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-secondary">Téléphone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-warm rounded-sm focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 text-secondary">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 bg-white border border-gray-warm rounded-sm focus:outline-none focus:ring-1 focus:ring-accent"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="px-8 py-3 bg-accent text-white rounded-sm hover:bg-accent-dark transition-colors"
                  >
                    Envoyer
                  </button>
                </form>
              )}
            </div>
          </div>
          
          {/* Map Section */}
          <div className="mt-20 max-w-6xl mx-auto">
            <div className="relative w-full h-96 bg-gray-warm/30 rounded-sm border border-accent/10 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-center text-secondary">
                  Carte interactive de localisation <br/>
                  <span className="text-sm">(Une carte Google Maps serait intégrée ici)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
