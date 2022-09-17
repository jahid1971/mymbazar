/** @type {import('tailwindcss').Config} */ 
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [require("@tailwindcss/typography"),
  require('@tailwindcss/forms'),
  require("daisyui")
]
}