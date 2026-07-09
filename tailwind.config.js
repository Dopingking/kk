/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        head: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        brand: {
          blue: "#1D4ED8",
          navy: "#0F1B3D",
          orange: "#EA6A2F",
          pink: "#C2255C",
        },
      },
    },
  },
  plugins: [],
};
