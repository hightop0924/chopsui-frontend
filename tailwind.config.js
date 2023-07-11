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
        50: "#0C111E",
        100: "#142237",
        150: "#000103",
        200: "#03090F",
        300: "#060B15",
        400: "#00040B",
        500: "#061834",
        600: "#10192D",
      },

      secondary: {
        50: "#F4C607",
        100: "#FFA430",
        150: "#FBBE25",
      },
      blue: {
        10: "#CCE3FF",
        50: "#0D5FDB",
        150: "#11151E",
        200: "#03315C",
        300: "#010F2D",
        400: "#08A6EA",
        500: "#0082C0",
        600: "#0B63E8",
        700: "#07357B",
        800: "#051834",
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
