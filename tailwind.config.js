/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./.storybook/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        nhs: {
          blue: "#005EB8",
          lightBlue: "#41B6E6",
          purple: "#8C7FB7",
          green: "#009639",
          darkGrey: "#425563",
          paleGrey: "#E8EDEE",
          aquaGreen: "#00A499",
        },
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        calibri: ["Calibri", "sans-serif"],
      },
      fontSize: {
        xs: "0.625rem", // 10px (email text)
        sm: "0.75rem", // 12px
        base: "0.875rem", // 14px (body text)
        lg: "1rem", // 16px (heading or UI labels)
        xl: "1.125rem", // 18px
        "2xl": "1.25rem", // 20px
      },
      spacing: {
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
      },
      borderRadius: {
        sm: "4px",
        md: "6px",
        lg: "8px",
      },
      boxShadow: {
        card: "0 2px 4px rgba(0, 0, 0, 0.05)",
        focus: "0 0 0 3px rgba(0, 94, 184, 0.5)", // NHS Blue focus ring
      },
    },
  },
  plugins: [],
};
