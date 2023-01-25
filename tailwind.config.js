
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        100: ['13px', '18px'],
        200: ['15px', '20px'],
        300: ['18px', '25px'],
        500: ['50px', '68px']
      }
    },
    colors: {
      transparent: 'transparent',
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
        light: '#3e3e3e',
        dark: '#131313'
      }
    }
  },
  plugins: [],
}
