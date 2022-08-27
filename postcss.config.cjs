const colors = {
  red: {
    10: "#FFF2EE",
    20: "#811434",
  },
};

module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        main: colors.red,
        ...colors,
      },
    },
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
