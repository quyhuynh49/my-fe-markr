/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sst: ['SST'],
      },
      gridTemplateRows: {
        '7': 'repeat(7, minmax(60px, 1fr))',
        '2': 'repeat(2, minmax(60px, 1fr))',
      },
      backgroundImage: {
        'header': "url('./assets/images/header.jpeg')"
      },
      boxShadow: {
        DEFAULT: '0px 4px 4px 0px rgba(0, 0, 0, 0.08)',
        'btn-header': '0px 0px 12px 0px rgba(194, 251, 255, 1)',
      },
      container: {
        center: true,
        padding: {
          xl: '32px'
        },
        screens: {
          xl: '1440px'
        }
      },
      screens: {
        xl: '1440px'
      }
    },
  },
  plugins: [],
}

