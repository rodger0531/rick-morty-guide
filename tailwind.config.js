const { COLOR_PALETTE } = require("./src/core/constants");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  important: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        42: "10.5rem",
      },
      colors: {
        "rm-pink": COLOR_PALETTE.PINK,
        "rm-brown": COLOR_PALETTE.BROWN,
        "rm-salmon": COLOR_PALETTE.SALMON,
        "rm-yellow": COLOR_PALETTE.YELLOW,
        "rm-lime": COLOR_PALETTE.LIME,
      },
      fontFamily: {
        schwifty: "getSchwifty",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
