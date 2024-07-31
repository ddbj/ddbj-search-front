/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/**/*.stories.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff8c00",
        "primary-dark": "#cc7000",
      },
      gridTemplateColumns: {
        "min-1fr": "min-content 1fr",
        "auto-fill-100": "repeat(auto-fill, minmax(100px, 1fr))",
        "auto-fit-100": "repeat(auto-fit, minmax(100px, 1fr))",
      },
      spacing: {
        128: "32rem",
        192: "48rem",
        256: "64rem",
      },
    },
  },
  plugins: [],
};
