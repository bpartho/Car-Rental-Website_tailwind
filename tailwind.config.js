/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        abc:["Tiro Bangla", 'serif'],
      },
    },
  },
  plugins: [require('daisyui'),],
}

