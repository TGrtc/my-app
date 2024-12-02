/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  extends: ["next/core-web-vitals"],
  rules: {
    "react/no-unescaped-entities": "off"
  }
};

module.exports = config; 