module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: require('./package.json').browserslist
    },
    'postcss-pxtorem': {
      rootValue: 50,
      unitPrecision: 5,
      propList: ['*']
    }
  }
}
