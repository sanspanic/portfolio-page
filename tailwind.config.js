module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        monocut: ["Cutive Mono"],
        majormono: ["Major Mono Display"],
        monofett: ["Monofett"],
        open: ["Open Sans"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
