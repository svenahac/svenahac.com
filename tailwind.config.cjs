/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#31427E",
        secondary: "#FFFFFF",
      },
      spacing: {
        100: "26rem",
      },
    },
  },
  plugins: [],
};
