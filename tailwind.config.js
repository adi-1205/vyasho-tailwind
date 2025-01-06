/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors: {
        f0f0f0: '#f0f0f0', 
        f2f0f1: '#f2f0f1', 
        f0eeed: '#f0eeed', 
      },
      fontFamily: {
        'integral': ['IntegralCF', 'sans-serif'],
        'satoshi': ['Satoshi', 'sans-serif']
      },
    },
  },
  plugins: [],
}

