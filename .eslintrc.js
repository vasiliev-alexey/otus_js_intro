module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],

  plugins: ["jest"],

  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
    "no-alert": "off",
    "import/extensions": ["off"],
    "import/prefer-default-export": "off",
    "max-len": ["error", { ignoreComments: true }],
  },
};
