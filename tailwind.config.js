/** @type {import('tailwindcss').Config} */
const ThemeColors = require("./src/styles/theme-colors");
const Breakpoints = require("./src/styles/theme-breakpoints");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: Breakpoints,
      colors: ThemeColors,
    },
  },
  plugins: [],
};
