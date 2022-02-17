/* eslint-disable global-require */
module.exports = {
  plugins: [
    require("postcss-preset-env")({
      features: { "nesting-rules": false },
    }),
    require("postcss-assets")(),
    require("postcss-import")(),
    require("tailwindcss/nesting")(require("postcss-nesting")),
    require("tailwindcss")(`${__dirname}/tailwind.config.js`),
    require("autoprefixer"),
  ],
}
