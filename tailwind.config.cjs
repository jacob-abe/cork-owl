/** @type {import('tailwindcss').Config} */
const COLORS = {
  red: {
    10: "#F7F1F3",
    20: "#811434",
  },
  gray: {
    10: "#ECF1F4",
    20: "#8C8CA1",
    30: "#485572",
  },
};
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...COLORS,
      },
    },
  },
  plugins: [],
};
