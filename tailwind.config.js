module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "neon-purple": "#9d32ef",
        "neon-yellow": "#F0ED46",
        "faded-white": "#fdfdfc",
      },
      fontFamily: {
        monocut: ["Cutive Mono"],
        majormono: ["Major Mono Display"],
        monofett: ["Monofett"],
        open: ["Open Sans"],
        roboto: ["Roboto"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
