module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  plugins: [
    "react-hooks"
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  extends: `react-app`,
}