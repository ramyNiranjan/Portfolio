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
          400: "#048c78",
          500: "#037060",
        },
        secondary: {
          100: "#1D1D1D",
          200: "#2B2B2B",
        },
      },
      fontFamily: {
        exo: ['"Exo 2"'],
        iceland: ["Iceland"],
      },
      screens: {
        // "sm-minMax": { raw: "((min-width: 640px) and (min-width: 740px) )" },
        // "sm-minMax": "(min-width: 640px) and (min-width: 740px)",
      },
      width: {
        "width-200": "200%",
        "width-400": "400%",
        "width-200vw": "200vw",
      },
      animation: {
        scroller: "scroller 20s linear infinite ;",
      },
      keyframes: {
        scroller: {
          "0%": { left: 0 },
          "100%": { left: "-100%" },
        },
      },
      spacing: {
        22: "5.5rem",
      },
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill,250px)",
      },
      gridAutoRows: {
        250: "250px",
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
