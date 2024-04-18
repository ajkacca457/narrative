/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#fcfcf4',
        'dark-blue': '#001c91',
        'dark-pink': '#ff52f7',
      },
      colors: {
        'dark-blue': '#001c91',
        'dark-pink': '#ff52f7',
        'dark-purple':'#3b1486'
      },
    },
  },
  plugins: [],
}