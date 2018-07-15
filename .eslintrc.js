   module.exports = {
    root: true,
    parserOptions: {
      parser: 'babel-eslint'
    },
    env: {
      es6: true,
      node: true,
      browser: true
    },
    extends: 'standard',
    plugins: [
      'html'
    ],
    rules: {
      // allow async-await
      'generator-star-spacing': 0,
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
  }
  