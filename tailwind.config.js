/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,
      // or have default horizontal padding
      // padding: "1rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
    colors: {
      mainBgColor: " #DEEDED",
      unkown: "#5D5F7E",
      inputBg: "#C9DDE2",
    },
    extend: {
      gridTemplateColumns: {
        "159px": "repeat(2, 159px)",
      },
      dropShadow: {
        newXl: "-10px 4px 130px 0px #2E3156",
      },
      boxShadow: {
        footer: "0px 4px 14px rgba(46, 49, 86, 0.4)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
