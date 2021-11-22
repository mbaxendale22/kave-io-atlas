module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Montserrat: [ 'Montserrat', 'sans-serif' ],
        Roboto: [ 'Roboto Mono', 'monospace' ]
      },
      // backgroundImage: {
      //   'main-pattern': "url('/src/assets/subtle_dots_@2X.png')"
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
