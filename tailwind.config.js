// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "flip-in": {
          from: { transform: "rotateX(90deg)" },
          to: { transform: "rotateX(0deg)" },
        },
        "flip-out": {
          from: { transform: "rotateX(0deg)" },
          to: { transform: "rotateX(90deg)" },
        },
      },
      animation: {
        "flip-in": "flip-in 300ms linear",
        "flip-out": "flip-out 300ms linear",
      },
    },
  },
  plugins: [],
};
