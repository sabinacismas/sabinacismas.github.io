/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}
