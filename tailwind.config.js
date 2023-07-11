/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '3rem',
    },
    extend: {
      colors:{
        'secondaryText':'#D6CCA4',
        'secondaryHover':'#EDF1E4'
      }
    },
  },
  plugins: [],
}
