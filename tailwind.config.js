/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens, fontSize } from "fluid-tailwind";
module.exports = {
  content: {
    files: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract,
  },
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customYellow: "#FF9D00",
      },
      fontFamily: {
        sans: ["Arame", "sans-serif"],
      },
      backgroundImage: {
        main: "url('/images/Screen01/main.png')",
        'custom-gradient': 'linear-gradient(89.97deg, #500200 7.1%, #BA0005 99.98%)',
        'gold-gradient': 'linear-gradient(90deg, #DDA14B 0%, #FCE095 100%)',
        'dark-gradient': 'linear-gradient(359.71deg, #191914 29.36%, #483E35 136.63%)',
        'page03-gradient': 'linear-gradient(178.27deg, #3E0104 3.55%, #1E0303 88.75%)',
        'page03-cardGradient': 'linear-gradient(180deg, #FDAA21 0%, #6B0C0C 100%)',
      },
    },
    screens,
    fontSize,
  },
  plugins: [fluid],
};
