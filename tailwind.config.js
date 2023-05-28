/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      width: ['hover'],
    },
  },
  plugins: [],
  darkMode: false,
  purge: ["./src/**/*.{html,js}"],
}