import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";
import colors from "tailwindcss/colors";

export default withMT({
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      istok: ["Istok Web", "sans-serif"],
    },
    colors: {
      ...colors,
      background: "#f8fafc",
      primary: "#1C00EE",
      secondary: "#CC00FF",
    },
    extend: {
      backgroundImage: {
        "hero-1": "url('/heroback.jpg')",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        move: "move 5s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - 144px))" },
        },
        move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        },
      },
      maxWidth: {
        bigscrn: "1440px",
      },
    },
  },
} satisfies Config);
