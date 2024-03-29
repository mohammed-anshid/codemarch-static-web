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
        'secondaryHover':'#EDF1E4',
        'brandText':'rgba(237, 241, 228, 1)',
        'brandHover':'rgba(215, 206, 165,0.9)'
      }
    },
  },
  plugins: [],
}
