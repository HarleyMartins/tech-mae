/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,php}"],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('/assets/galaxia.jpg')",
        gradiente: "url('/assets/bg.png')",
      },
    },
  },
  plugins: [],
}
