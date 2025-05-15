
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A1A', // Noir plus profond pour un meilleur contraste
        secondary: '#3D3D3D', // Gris anthracite plus moderne
        accent: '#C4933F', // Or de logo conservé
        'accent-dark': '#9E7732', // Version plus foncée pour les survols
        wood: '#2C1810', // Couleur bois foncé conservée
        cream: '#F9F6F0', // Crème subtil pour les arrière-plans
        ivory: '#FFFFF0', // Ivoire pour certains éléments
        'gray-warm': '#E5E1DD', // Gris chaud pour les bordures
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'vintage': '0 4px 20px -2px rgba(0, 0, 0, 0.1), 0 2px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      borderWidth: {
        '3': '3px',
      },
      backgroundImage: {
        'vintage-paper': "url('/images/vintage-texture.png')",
      },
      letterSpacing: {
        'widest': '0.2em',
      },
      saturate: {
        '125': '1.25',
      },
      filter: {
        'grayscale-50': 'grayscale(0.5)',
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      scale: ['group-hover'],
      opacity: ['group-hover'],
      translate: ['group-hover'],
    }
  },
} 
