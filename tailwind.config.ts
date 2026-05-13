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
        // Matte black + graphite
        ink: {
          DEFAULT: "#0A0A0A",
          deep: "#050505",
          black: "#000000",
        },
        graphite: {
          900: "#0F0F10",
          800: "#141416",
          700: "#1A1A1D",
          600: "#23232A",
          500: "#2D2D35",
          400: "#3B3B45",
          300: "#54545F",
          200: "#7A7A85",
          100: "#A8A8B0",
        },
        // Off-white
        bone: {
          DEFAULT: "#EDEAE0",
          50: "#F7F6F1",
          100: "#EDEAE0",
          200: "#D9D5C7",
          300: "#B5AF9D",
        },
        // Muted military green accent
        olive: {
          DEFAULT: "#5C6B4C",
          light: "#7A8B69",
          dark: "#3F4A33",
          deep: "#2A3322",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: [
          "var(--font-display)",
          "var(--font-inter)",
          "system-ui",
          "sans-serif",
        ],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        hebrew: [
          "var(--font-heebo)",
          "var(--font-inter)",
          "system-ui",
          "sans-serif",
        ],
      },
      maxWidth: {
        container: "1440px",
        readable: "640px",
      },
      fontSize: {
        // Cinematic display sizes
        "display-xl": ["clamp(56px, 11vw, 184px)", { lineHeight: "0.92", letterSpacing: "-0.045em" }],
        "display-lg": ["clamp(44px, 7.6vw, 128px)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "display-md": ["clamp(36px, 5.4vw, 88px)", { lineHeight: "1", letterSpacing: "-0.035em" }],
      },
      letterSpacing: {
        ultratight: "-0.045em",
        tightish: "-0.02em",
        wider2: "0.2em",
        wider3: "0.32em",
      },
      transitionTimingFunction: {
        cinema: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      animation: {
        "fade-in": "fadeIn 1.2s ease-out forwards",
        "fade-up": "fadeUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "shimmer": "shimmer 8s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
