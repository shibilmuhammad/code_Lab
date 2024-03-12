/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          mainBg:"#FCFDFF",
          main:"#F5F5F5",
        },
        secondary:{
          mainBorder:"#D9D9D9",
          bg:'#A9A9A9'

        },
        teritary:{
          main:"#5429FF"
        }
      }
    },
  },
  plugins: [],
}