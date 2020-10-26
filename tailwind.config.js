module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors:{
        'gray-900-spotify': '#121212',
        'gray-800-spotify': '#181818',
        'gray-700-spotify': '#282828',
      },
      spacing:{
        '14': '3.3rem',
        '22': '5.5rem',
        '200': '50rem',
      }
    },
  },
  variants: {
    // backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    backgroundColor: ['group-hover'],
    textColor: ['group-hover', 'hover'],
    // textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
}
