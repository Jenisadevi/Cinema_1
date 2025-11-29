import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6366f1",
          dark: "#4f46e5"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
