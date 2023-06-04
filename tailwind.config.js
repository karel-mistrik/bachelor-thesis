/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      primary: "#000000",
      secondary: "#FF0000",
      background: "#ffffff",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      gelasio: ["Gelasio", "serif"],
    },
    fontSize: {
      title: "10rem",
      navigation: "0.75rem",
      chapter: "1.25rem",
      text: "0.938rem",
    },
    extend: {},
  },
  plugins: [],
};
