module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Roboto: ['Roboto Mono', 'monospace'],
      },
      fontSize: {
        xxs: '0.65rem',
      },
      colors: {
        main: '#5CDB95',
        light: '#EDF5E1',
        contrast: '#05386B',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
