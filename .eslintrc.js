module.exports = {
  extends: ['next/core-web-vitals'],
  plugins: ['react'],
  rules: {
    'react/no-unescaped-entities': 0,
    '@next/next/no-page-custom-font': 0,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  }
}; 