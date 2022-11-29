const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: "1.25rem",
        center: true,

        screens: {
          sm: "576px",
          md: "728px",
          lg: "984px",
          xl: "1240px",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
