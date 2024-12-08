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
        customYellow: "#FFD258",
      },
      fontFamily: {
        sans: ["Arame", "sans-serif"],
        helvetica: ["Helvetica", "sans-serif"],
      },
      backgroundImage: {
        main: "url('/images/Screen01/main.webp')",
        "custom-gradient":
          "linear-gradient(89.97deg, #500200 7.1%, #BA0005 99.98%)",
        "gold-gradient": "linear-gradient(90deg, #DDA14B 0%, #FCE095 100%)",
        "dark-gradient":
          "linear-gradient(359.71deg, #191914 29.36%, #483E35 136.63%)",
        "page03-gradient":
          "linear-gradient(178.27deg, #3E0104 3.55%, #1E0303 88.75%)",
        "page03-cardGradient":
          "linear-gradient(180deg, #FDAA21 0%, #6B0C0C 100%)",
        "page08-gradient":
          "linear-gradient(359.26deg, #650206 0.63%, #FFD258 328.52%)",
        s5: "url('/images/screen05/bg.png')",
        card1: "url(/images/screen06/1.png)",
        card2: "url(/images/screen06/2.png)",
        card3: "url(/images/screen06/3.png)",
        card4: "url(/images/screen06/4.png)",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateY(0)" },
          "90%": { transform: "translateY(-50%)" }, // Adjust for seamless scrolling
        },
        leftRight: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-4rem)" }, // Adjust for seamless scrolling
          "100%": { transform: "translateX(0)" },
        },
        playBtn: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.3)" }, // Adjust for seamless scrolling
          "100%": { transform: "scale(1)" },
        },
        anim1: {
          "0%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-.3rem,.2rem)" }, // Adjust for seamless scrolling
          "100%": { transform: "translate(0, 0)" },
        },
        anim2: {
          "0%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(.3rem,-.2rem)" }, // Adjust for seamless scrolling
          "100%": { transform: "translate(0, 0)" },
        },
        anim3: {
          "0%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(360deg)" },
        },
        animBtns: {
          "0%": { opacity: 1 },
          "50%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        animCloud: {
          "0%": { transform: "translateX(40%)" },
          "100%": { transform: "translateX(-80%)" },
        },
        animLine: {
          "0%": {
            strokeDasharray: "90 10",
            strokeDashoffset: "100",
          },
          "100%": {
            strokeDasharray: "100 0",
            strokeDashoffset: "0",
          },
        },
        dotDiagonal: {
          "0%": { transform: "translate(0, 0)", opacity: 1 },
          "50%": { transform: "translate(-4rem,-6rem)", opacity: 0.2 }, // Adjust for seamless scrolling
          "100%": { transform: "translate(0, 0)", opacity: 1 },
        },
        "alert-keyframes": {
          from: {
            transform: "translateX(-100%)",
          },
          to: {
            tranform: "translateX(0%)",
          },
        },
      },
      animation: {
        leftRight: "leftRight 20s linear infinite",
        playBtn: "playBtn 4s linear infinite",
        anim1: "anim1 4s linear infinite",
        anim2: "anim2 4s linear infinite",
        anim3: "anim3 4s linear infinite",
        animCloud: "animCloud 20s linear infinite",
        animStar: "animCloud 24s linear infinite",
        dotDiagonal: "dotDiagonal 8s linear infinite",
        scroll: "scroll 10s linear infinite",
        alert: "alert-keyframes 3s linear",
        animBtns1: "animBtns 2s linear infinite",
        animBtns2: "animBtns 2s .5s linear infinite",
        animBtns3: "animBtns 2s 1s linear infinite",
        animLine: "animLine 4s linear infinite",
      },
    },
    screens,
    fontSize,
  },
  plugins: [fluid],
};
