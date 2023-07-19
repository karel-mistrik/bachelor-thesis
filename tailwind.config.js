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
      "title-mobile": "4rem",
      navigation: "0.75rem",
      "navigation-mobile": "1.25rem",
      chapter: "1.25rem",
      text: "0.938rem",
      subchapter: "0.75rem",
    },
    extend: {
      lineHeight: {
        title: "100%",
      },
      keyframes: {
        blink: {
          "0%": { borderColor: "transparent" },
          "50%": { borderColor: "#FF0000" },
          "100%": { borderColor: "transparent" },
        },
      },
      animation: {
        blink: "blink 2s ease-in infinite",
      },
    },
  },
  plugins: [],
};
