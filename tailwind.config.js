/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '765px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        brand: '#EA603F',
        cardBg: "#191919",
        cardBorder: "#2B2B2B",
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Fira Sans", "sans-serif"],
      },
      backgroundImage: {
        bgMain: "./src/images/bg-main.png",
        bannerText: "linear-gradient(to right, #555555, #FFFFFF)"
      }
    },
  },
  plugins: [],
};