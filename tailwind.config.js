/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      bullina: ["Bullina"],
      rubik: ["Rubik"],
      lemon: ["Lemon"],
    },
    colors: {
      primary: {
        50: "#0A1A29",
        100: "#191E22",
        150: "#000103",
        200: "#03090F",
      },

      secondary: {
        50: "#FFDB21",
        100: "#8F7800",
      },
      blue: {
        50: "#0D5FDB",
        100: "#1D354E",
        150: "#11151E",
        200: "#03315C",
        300: "#010F2D",
      },
      red: {
        50: "#DF1525",
      },
      grey: {
        50: "#A2B1BF",
      },
      white: "#FFFFFF",
      black: {
        50: "#0D0F11",
        100: "#262626",
        full: "#000000",
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
