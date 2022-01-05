module.exports = {
  plugins: [
    require("postcss-preset-env"),
    require("postcss-nesting")(),
    require("postcss-assets")(),
    require("postcss-import")(),
    require("tailwindcss")(`${__dirname}/tailwind.config.js`),
    require("autoprefixer"),
  ],
};
