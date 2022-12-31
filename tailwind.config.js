/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "huge-logo": "url('/src/assets/huge-logo.svg')",
      },
      fontFamily: {
        exo: ["Exo"],
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      colors: {
        primary: "#3b3b3b",
        secondary: {
          1: "#FF7A00",
          2: "#FF3D00",
        },
        gray: {
          1: "#F8F8F8",
          2: "#F2F2F2",
          3: "#E4E4E4",
          4: "#C4C4C4",
          5: "#B3B3B3",
        },
      },
      boxShadow: {
        subtle: "0 1px 20px -10px rgba(0, 0, 0, 0.3)",
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "14700px",
      },
      animation: {
        "spin-pizza": "spin 1.5s",
        "puls-pizza": "ping 1s cubic-bezier(0, 0, 0, 0)",
      },
    },
  },
  plugins: [require("tailwindcss-inner-border")],
};
