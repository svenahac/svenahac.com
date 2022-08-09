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
        101: "27rem",
        130: "30rem",
      },
      screens: {
        dsk: "886px",
      },
    },
  },
  plugins: [],
};
