module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#182b29",
        paper: "#f8f9f5",
        muted: "#586762",
        accent: "#d8ee9e",
        line: "#dfe5dc",
      },
      fontFamily: { sans: ["Arial", "Helvetica", "sans-serif"] },
      boxShadow: { soft: "0 24px 80px -35px rgba(24,43,41,.25)" },
    },
  },
  plugins: [],
};
