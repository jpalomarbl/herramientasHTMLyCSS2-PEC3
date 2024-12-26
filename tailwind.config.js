/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontSize: {
      'xs': '.8rem',
       sm: '.9rem',
       base: '1.2rem',
       xl: '1.4rem',
      '2xl': '1.6rem',
      '3xl': '2rem',
      '4xl': '3rem',
    },
    extend: {
      colors: {
        'primary': '#297fca',
        'secondary': '#3fa2f7',
        'info': '#fff',
        'light': '#73edff',
        'dark': '#000078'
      },
      fontFamily: {
        roboto: ['"Roboto"', "serif"],
        doto: ['"Doto"', "serif"]
      }
    },
  },
  plugins: [],
}

