/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        SoftBlue: "hsl(215, 51%, 70%)",
        Cyan: "hsl(178, 100%, 50%)",
        darkBlueMain: "hsl(217, 54%, 11%)",
        darkBlueCard: "hsl(216, 50%, 16%)",
        darkBlueLine: "hsl(215, 32%, 27%)",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  "tailwindCSS.includeLanguages": {
    javascript: "javascript",
    html: "HTML",
  },
  "editor.quickSuggestions": {
    strings: true,
  },
  plugins: [],
};
