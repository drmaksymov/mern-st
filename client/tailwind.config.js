/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      Nunito: "'Nunito', sans-serif;",
      Russo: "'Russo One', sans-serif;",
    },
    },
    extend: { 
      
       
  },
  plugins: ['@tailwindcss/forms',],
}
