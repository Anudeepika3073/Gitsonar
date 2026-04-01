'use strict'

const eslint_js = require('@eslint/js')
const globals = require('globals')

module.exports = [
  {
    ignores: ["**/dist/*", "gen/**/*", "node_modules/**/*"],
  },
  eslint_js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.es6,
      },
    },
    rules: {
      "no-console": "warn",
      "eqeqeq": "error",
      "no-var": "error",
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
      "indent": ["error", 2]
    },
  },
];
