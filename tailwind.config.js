/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#343C6A",
        secondary:"#343C6A",
        darkText: "#232323",
        iconBackground: '#F5F7FA',
        searchBackground: '#8BA3CB',
        textBlueLight: '#718EBF',
        textBlueDark: '#232323'
      },
      fontFamily: {
        inter: ["Inter","Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
}

