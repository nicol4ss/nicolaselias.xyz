/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        container: {
          center: true,
        },
      },
      plugins: [],
    },
  },
};
