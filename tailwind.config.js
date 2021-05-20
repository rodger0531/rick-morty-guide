module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        42: "10.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
