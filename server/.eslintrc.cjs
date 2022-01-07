// If switching to TypeScript, uncomment lines and toggle lines as needed

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    // "plugin:import/typescript",
    // "google",
    // "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  // parser: "@typescript-eslint/parser",
  parser: "@babel/eslint-parser",
  parserOptions: {
    // project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
  ],
  plugins: ["import"],
  // plugins: ["@typescript-eslint", "import"],
  rules: {
    "quote-props": "off",
    "object-curly-spacing": "off",
    "arrow-parens": "off",
    "new-cap": "off",
    // "@typescript-eslint/no-var-requires": "off",
    // "@typescript-eslint/no-unused-vars": ["error"],
    "require-jsdoc": "off",
    "no-console": "warn",
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "import/no-default-export": "error",
  },
};
