module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      height: {
        header: '140px',
        hero: '550px',
        logo: '60px',
        search: '54px',
        box: '300px',
      },
      width: {
        logo: '193px',
        search: '85%',
        box: '300px',
        '90%': '90%',
        '80%': '80%',
        showcase: '490px',
      },
      spacing: {
        '77px': '77px',
        '40px': '40px',
        '109px': '109px',
        '159px': '159px',
        '97px': '97px',
        '67px': '67px',
        '63px': '63px',
        '13px': '13px',
        showcase: '282px',
      },
      colors: {
        darkgray: '#292929',
        lightgray: '#FFFFFF',
      },
      lineHeight: {
        12: '6.5rem',
      },
    },
  },
  plugins: [],
}
