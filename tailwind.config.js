/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-grey": "#080808",
        typography: "#F8FAFC",
        violet: "#6659EF",
        "dark-typography": "#5C5D5E",
      },
      screens: {
        laptop: { min: "1024px", max: "1366px" },
        md: { min: "767px", max: "1279px" },
      },
    },
  },
  plugins: [],
};
