/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#004870",
        "blue-light": "#00E1DB"
      },
      fontFamily: {
        font : ["Poppins", "Padauk"],
      }
    }
  },
  plugins: []
};
