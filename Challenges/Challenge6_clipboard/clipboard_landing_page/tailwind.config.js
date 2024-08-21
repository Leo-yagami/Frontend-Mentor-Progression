/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Bai Jamjuree", "sans-serif"],
    },
    extend: {
      colors: {
        darkGrayBlue: "hsl(210, 10%, 33%)",
        grayBlue: "hsl(201, 11%, 66%)",
        strongCyan: "hsl(171, 66%, 44%)",
        lightBlue: "hsl(233, 100%, 69%)",
      },
    },
  },
  plugins: [],
};
