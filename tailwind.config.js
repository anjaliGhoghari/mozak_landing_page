
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      fontFamily: {
        twk: ['TWKLausanne', 'mono'],
      },
      colors: {
        'orange': "#ED442D",
        "gray": "#858585",
       "green":"#46D15C"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundColor:{
        'bg': 'rgba(255, 255, 255, 0.30)',
      },
      screens: {
        'max-xl': { 'max': '1440px' },
      }
    },
  },
  plugins: [],
}