/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
module.exports = function getConfig(api) {
  const isDevelopmentEnv = api.env("development")
  const isProductionEnv = api.env("production")
  const isTestEnv = api.env("test") || api.env("e2e")

  return {
    presets: [
      isTestEnv && [
        require("@babel/preset-env").default,
        {
          targets: {
            node: "current",
          },
        },
      ],
      (isProductionEnv || isDevelopmentEnv) && [
        require("@babel/preset-env").default,
        {
          forceAllTransforms: true,
          useBuiltIns: "entry",
          corejs: 3,
          modules: false,
          exclude: ["transform-typeof-symbol"],
        },
      ],
      [
        require("@babel/preset-react").default,
        {
          development: isDevelopmentEnv || isTestEnv,
          useBuiltIns: true,
        },
      ],
    ].filter(Boolean),
    plugins: [
      require("@babel/plugin-syntax-dynamic-import").default,
      require("@babel/plugin-transform-destructuring").default,
      [
        require("@babel/plugin-proposal-class-properties").default,
        {
          loose: true,
        },
      ],
      [
        require("@babel/plugin-proposal-object-rest-spread").default,
        {
          useBuiltIns: true,
        },
      ],
      [
        require("@babel/plugin-transform-runtime").default,
        {
          helpers: false,
          regenerator: true,
          corejs: false,
        },
      ],
      [
        require("@babel/plugin-transform-regenerator").default,
        {
          async: false,
        },
      ],
      [require("@babel/plugin-proposal-private-property-in-object").default, { loose: true }],
      [require("@babel/plugin-proposal-private-methods").default, { loose: true }],
    ].filter(Boolean),
  }
}
