module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--text)",
        paper: "var(--bg)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        line: "var(--line)",
        surface: "var(--surface)",
      },
      fontFamily: { sans: ["Arial", "Helvetica", "sans-serif"] },
      boxShadow: { soft: "0 24px 80px -35px rgba(0,0,0,.25)" },
    },
  },
  plugins: [],
};
