import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.svg",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateX(-90%)" },
          "50%": { transform: "translateX(90%)" },
        },
      },
      animation: {
        wiggle: "wiggle 40s linear infinite",
      },
      fontFamily: {
        display: ["var(--font-messapia)"],
        sans: ["var(--font-satoshi)"],
      },
    },
  },
  plugins: [],
};
export default config;
