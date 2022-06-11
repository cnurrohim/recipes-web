module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontSize: {
        xxs: ".25rem",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        truculenta: ["Truculenta", "sans-serif"],
        viga: ["Viga", "sans-serif"],
      },
      gridTemplateColumns: {
        autofit: "repeat(auto-fit, minmax(25vw,1fr))",
      },
      boxShadow: {
        "3xl": "10px 10px 20px 2px rgba(0,0,0,0.2)",
        "3xl-inset": "inset 0px 5px 10px 0px",
        lite: "0px 0px 1px 1px rgba(0,0,0,0.2)",
      },
      colors: {
        "pink-blush": "rgb(208, 115, 131)",
        "softpink-blush": "rgb(247, 193, 162)",
        background: "#39065A",
        primary: "#6A0572",
        secondary: "#9A0F98",
        accent: "#EA0599",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}
