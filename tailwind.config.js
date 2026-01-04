/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandGreen: "#0B7A3B",
        brandRed: "#B11217",
        brandDark: "#0B1120",
      },
    },
  },
  plugins: [],
}
