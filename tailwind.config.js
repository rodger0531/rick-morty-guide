module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  important: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        42: "10.5rem",
      },
    },
    screens: {
      mobile: { max: "767px" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
