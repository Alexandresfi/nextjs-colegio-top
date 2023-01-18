
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      white: '#ffff',
      gray: {
        length:{
          100: '#E5E5E5',
          200: '#EBEBEB',
          300: '#f4f4f4',
        },
        default:  '#ACACAC'
      },
      red: {
        dark:'#670017',
        light: '#910020'
      },
      black: {
        light: '#3e3e3e'
      }
    }
  },
  plugins: [],
}
