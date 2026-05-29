import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: "#fff7f8",
          100: "#ffecef",
          200: "#ffd9df",
          300: "#ffb8c4",
          400: "#f28da0",
        },
        ink: "#271f25",
        plum: "#7a3f59",
        sage: "#6b7d67",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(122, 63, 89, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
