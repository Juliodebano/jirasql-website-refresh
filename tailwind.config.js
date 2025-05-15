module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F1F1F', // Dark gray/almost black
        secondary: '#4A4A4A', // Anthracite gray
        accent: '#C4933F', // Gold accent from logo
        wood: '#2C1810', // Dark wood color
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
} 