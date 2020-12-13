module.exports = {
  purge: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#08FDD8",
          200: "#02DDBC",
          300: "#02B89D",
        },
        secondary: {
          100: "#1D1D1D",
          200: "#2B2B2B",
        },
      },
      fontFamily: {
        exo: ['"Exo 2"'],
      },
      screens: {},
      spacing: {
        22: "5.5rem",
      },
    },
  },
  variants: {
    extend: {
      scale: ["active"],
      // textColor: ["hover"],
    },
  },
  plugins: [],
};
