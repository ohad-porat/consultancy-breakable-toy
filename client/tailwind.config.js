/* eslint-disable global-require */
module.exports = {
  plugins: [require("@tailwindcss/forms")],
  theme: {
    extend: {
      fontFamily: {
        eczar: ["Eczar", "serif"],
        special: ["Special Elite", "cursive"],
      },
    },
  },
}
