/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: '#151515',
        primary: '#01B3A7',
        light: '#ffffff',
        grey: '#f7f7f7',
        asul: '#162e44',
        asulDark: '#11263a',
        mint: '#50ba87',
        hoverBlue: '#304559',
      },

      boxShadow: {
        'md': '0 0 10px 0 rgba(0, 0, 0, 0.1);',
      },

      backgroundColor: {
        'blur': 'rgba(255, 255, 255, 0.2)',
        'blurB': 'rgba(0, 0, 0, 0.5)',
      },

      backgroundImage: {
        'slide1': 'url("./img/slider1.jpg")',
        'slide2': 'url("./img/slider2.jpg")',
        'slide3': 'url("./img/slider3.jpg")',

        'parallax': 'url("./img/parallax.jpg")',
        'parallax2': 'url("./img/parallax2.jpg")',
        'dreamBg': 'url("./img/dream.jpg")',
      },

      transitionTimingFunction: {
        'move-out': 'cubic-bezier(0.4, 1.55, 0.74, 0.55)',
      },

    },
  },
  plugins: [],
}

