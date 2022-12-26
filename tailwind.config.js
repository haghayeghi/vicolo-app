/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'primary': "#434343",
        'secondary': {
        '1':"#FF7A00",
        '2':"#FF3D00"
      },
        'gray': {
          '1':"#FAFAFA",
          '2':"#F2F2F2",
          '3':"#E4E4E4",
          '4':"#C4C4C4"
        },
      }
    },
  },
  plugins: [],
}
