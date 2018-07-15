const merge = require('webpack-merge')
const { resolve, styleLoader } = require('./utils.js')
const baseConfig = require('./webpack.base.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

process.env.NODE_ENV = 'production'

const webpackConfig = merge(baseConfig, {
  mode: 'production',
  entry: resolve('src/main.js'),
  
  module: {
    rules: styleLoader()
  },

  output: {
    path: resolve('lib'),
    publicPath: '/lib/',
    filename: 'art-mobile.js',
    library: 'art-mobile',
    libraryTarget: 'umd'
  },

  externals: {
    vue: 'Vue'
  },

  plugins: [
    new ExtractTextPlugin('styles/art-mobile.css')
  ]
})

module.exports = webpackConfig