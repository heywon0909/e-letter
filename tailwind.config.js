/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "template":"url('https://picsum.photos/600/400/?random')"
      }
    },
  },
  plugins: [],
}