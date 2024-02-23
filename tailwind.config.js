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
        blink: {
          "0%, 100%": { borderColor: "#1F1F1F" },
          "50%": { borderColor: "transparent" },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
        blink: "blink 1s linear infinite",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      // Adicionando a definição do gradiente personalizado
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #131313, #1F1F1F)",
      },
    },
  },
  plugins: [],
};
