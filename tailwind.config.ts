import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#05070b",
        steel: "#101723",
        electric: "#19b8ff",
        violet: "#8b5cf6",
        spotify: "#1ed760",
      },
      boxShadow: {
        glow: "0 0 40px rgba(25, 184, 255, 0.18)",
        violet: "0 0 42px rgba(139, 92, 246, 0.16)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
