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
        // Dark primary — deep teal, aligned with brand text color.
        navy: {
          DEFAULT: "#0F2A2D",
          50: "#F0F5F5",
          100: "#D5E2E1",
          200: "#ABC4C3",
          300: "#739C9A",
          400: "#457571",
          500: "#25525D",
          600: "#1A3D42",
          700: "#122E32",
          800: "#0F2A2D",
          900: "#081518",
        },
        // Brand teal-green — from the logo mark.
        accent: {
          DEFAULT: "#399189",
          hover: "#2E7B74",
          dark: "#256962",
        },
        // Brand muted gray-blue — secondary mark color.
        slate2: {
          DEFAULT: "#A0A8BC",
          soft: "#C4CAD6",
          deep: "#7E8699",
        },
        ink: {
          DEFAULT: "#0F2A2D",
          muted: "#4A5763",
          soft: "#6B7680",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#F4F7F7",
          muted: "#E7EDED",
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
        card: "0 1px 2px rgba(15, 42, 45, 0.04), 0 4px 16px rgba(15, 42, 45, 0.06)",
        cardHover:
          "0 2px 4px rgba(15, 42, 45, 0.06), 0 12px 32px rgba(15, 42, 45, 0.12)",
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
