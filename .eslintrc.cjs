module.exports = {
  extends: [
    "react-app",
    "prettier"
  ],
  "plugins": [
    "react",
    "prettier"
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "prettier/prettier": [
      "warn",
      {
        "arrowParens": "always",
        "semi": true,
        "trailingComma": "none",
        "tabWidth": 2,
        "endOfLine": "auto",
        "useTabs": false,
        "singleQuote": true,
        "printWidth": 120,
        "jsxSingleQuote": true
      }
    ],
  }

}