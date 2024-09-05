import { transform } from "typescript";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
        rodar: "rodar 15s linear infinite",
      },
      fontFamily: {
        Oran: "Oranienbaum",
        Lora: "Lora",
        dmSans: "DM Sans"
      },
      colors: {
        roxoEscuro: "#0c0219",
        roxoMedio: "#8c52ff",
        roxoClaro: "#cebfff"
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        rodar: {
          to: {
            rotate: "360deg"
          }
        }
      },
      backgroundImage: {
        fundoBanner: "url('./src/assets/images/fundoPortfolio.jpg')"
      }
    },
  },
  plugins: [addVariablesForColors],
}


function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

