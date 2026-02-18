// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F14",
        card: "#111827",
        soft: "#0F172A",
        text: "#E5E7EB",
        muted: "#9CA3AF",
        accent: "#7C3AED",
        accent2: "#22D3EE",
        border: "#1F2933",
      },
    },
  },
  plugins: [],
};
