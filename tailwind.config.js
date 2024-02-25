/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
}