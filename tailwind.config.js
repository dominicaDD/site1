/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",],
  theme: {
    screens: {
      lg: {'max': '1999.99px'},
      md: {'max': '991.99px'},
      sm: {'max': '767.99px'},
      xs: {'max': '479.99px'},
    },
extend: {
  fontFamily: {
  poppins: ['Poppins', 'sanf-serif'],
  montserrat: ['Montserrat', 'sans-serif'],
},
backgroudImage: {
  heroGradient:
  'linear-gradient(94.59deg, #4923B4 2.39%, #E878cF 97.66%)',

},
colors: {
blueviolet: '#502785',
lighgray: '#666768',
},
   },
},
}
