/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./images/**/*"],
  theme: {
    extend: {
      colors: {
        almostWhite: "hsl(0, 0%, 98%)",
        almostGray: "hsl(0, 0%, 41%)",
        almostBlack: "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
