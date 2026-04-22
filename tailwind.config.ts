import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1628",
          50: "#F2F5F9",
          100: "#D8E1EC",
          200: "#AFC0D4",
          300: "#7A92B2",
          400: "#4A6487",
          500: "#2A3E5C",
          600: "#1A2A44",
          700: "#0F1C33",
          800: "#0A1628",
          900: "#050B16",
        },
        accent: {
          DEFAULT: "#C8A456",
          hover: "#B8944A",
          dark: "#A07E38",
        },
        ink: {
          DEFAULT: "#0A1628",
          muted: "#4A5568",
          soft: "#718096",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#F7F9FC",
          muted: "#EDF1F6",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1240px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(10, 22, 40, 0.04), 0 4px 16px rgba(10, 22, 40, 0.06)",
        cardHover: "0 2px 4px rgba(10, 22, 40, 0.06), 0 12px 32px rgba(10, 22, 40, 0.12)",
      },
      letterSpacing: {
        tightish: "-0.015em",
        tighter2: "-0.025em",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
