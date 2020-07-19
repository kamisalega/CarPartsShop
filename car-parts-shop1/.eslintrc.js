module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: ['standard', 'plugin:vue/recommended'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ]
}
