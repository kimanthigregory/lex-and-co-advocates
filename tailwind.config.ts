import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1A1D32", // Deep Navy
        },
        secondary: {
          DEFAULT: "#C9A441", // Gold
        },
        neutral: {
          light: "#F5F5F5",
          dark: "#1A1D32",
        },
      },
      fontFamily: {
        serif: ["var(--font-source-serif-pro)", "serif"],
        sans: ["var(--font-nunito-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
