/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/screens/Home.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#EDEEF0",
          highlight: "#B5CFD6",
          black: "#000"
        }
      }
    },
  },
  plugins: [],
}
