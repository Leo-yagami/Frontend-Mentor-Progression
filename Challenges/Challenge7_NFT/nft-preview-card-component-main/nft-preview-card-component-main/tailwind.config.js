/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,css}"],
  theme: {
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
    },
    extend: {
      colors: {
        heavyDarkBlue: "hsl(217, 54%, 11%)",
        darkBlue: "hsl(216, 50%, 16%)",
        lightDarkBlue: "hsl(215, 32%, 27%)",
        softBlue: "hsl(215, 51%, 70%)",
        Cyan: "hsl(178, 100%, 50%)",
      },
    },
  },
  plugins: [],
};
