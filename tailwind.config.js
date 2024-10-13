/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('/assets/galaxia.jpg')",
      },
    },
  },
  plugins: [],
}
