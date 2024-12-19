/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        guy: ["Luckiest Guy", "sans-serif"],
      },
    },
  },
  plugins: [],
};