/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Black: "#4E3B57",
        White: "#ffffff",
        Primary: "#8E0ACC",
        Grey: "#7A7A7A",
        DarkPrimary: "#671090",
        LightPrimary: "#D06DFF",
        LightPurple: "#FDF8FF",
      },
    },
  },
  plugins: [],
};
