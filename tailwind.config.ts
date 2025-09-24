import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
colors: {
  // 🌞 Light Mode
  background: "#fefae0",
  softWhite: "#fffdf3",
  text: "#2e2e2e",
  muted: "#7d7d7d",

  primary: "#c16800",
  accent: "#e07b39",
  secondary: "#8e4d9c",
  secondaryDark:'#44284a',
  clay: "#814421",
},
      fontFamily: {
        bahnschrift: ['"Bahnschrift"', "sans-serif"], 
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        bounceY: {
          "0%, 100%": { transform: "translateY(-5%)" },
          "50%": { transform: "translateY(5%)" },
        },
        bounceX: {
          "0%, 100%": { transform: "translateX(-5%)" },
          "50%": { transform: "translateX(5%)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        zoomIn: {
          from: { transform: "scale(0.8)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
        slideLeft: {
          from: { transform: "translateX(100%)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        slideRight: {
          from: { transform: "translateX(-100%)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        slideUp: {
          from: { transform: "translateY(100%)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          from: { transform: "translateY(-100%)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        pulseFast: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        fadeZoom: {
          "0%": {
            transform: "scale(0.8)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        gradientMove: {
  '0%': {
    backgroundPosition: '0% 50%',
  },
  '100%': {
    backgroundPosition: '100% 50%',
  },
},

      },
      animation: {
        float: "float 3s ease-in-out infinite",
        wiggle: "wiggle 0.3s ease-in-out",
        bounceY: "bounceY 1s infinite",
        bounceX: "bounceX 3s infinite",
        fadeIn: "fadeIn 0.5s ease-in forwards",
        zoomIn: "zoomIn 0.5s ease-in-out",
        slideLeft: "slideLeft 0.5s ease-out",
        slideRight: "slideRight 0.5s ease-out",
        slideUp: "slideUp 0.5s ease-out",
        slideDown: "slideDown 0.5s ease-out",
        pulseFast: "pulseFast 0.8s ease-in-out infinite",
        fadeZoom: "fadeZoom 1s ease-in-out forwards",
        gradientMove: 'gradientMove 3s linear infinite',
      },
       textShadow: {
    glow: "0 0 10px #f77f00, 0 0 20px #f38b23", // sunset glow
    scripture: "1px 1px 2px rgba(59, 58, 48, 0.7)", // subtle holy text
    soft: "0 1px 1px rgba(0, 0, 0, 0.2)",
  },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};

export default config;
