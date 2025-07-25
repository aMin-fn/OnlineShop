/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        iransans: ["IranSans", "sans-serif"],
        iranyekan: ["IranYekan","sans-serif"],
      },
      
      colors:{
        baseRed : "#A72F3B"
      }
    },
  },
  plugins: [],
}

