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
    },
  },
  plugins: [],
};
