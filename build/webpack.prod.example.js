const merge = require('webpack-merge')
const { resolve, styleLoader } = require('./utils.js')
const baseConfig = require('./webpack.base.js')
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

process.env.NODE_ENV = 'production'

const webpackConfig = merge(baseConfig, {
  target: 'web',
  mode: 'production',
  entry: resolve('example/main.js'),

  output: {
    path: resolve('dist/example'),
    publicPath: '/art-mobile/example/',
    filename: 'js/[name].js'
  },
  
  module: {
    rules: styleLoader()
  },

  plugins: [
    new ExtractTextPlugin('styles/[name].css'),
    new HtmlPlugin({
      template: resolve('example/index.html'),
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    })
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          name: 'common',
          chunks: 'all',
          test: /src/,
          minChunks: 2,
          minSize: 0
        },
        vendor: {
          name: 'vendor',
          chunks: 'all',
          test: resolve('node_modules')
        }
      }
    },
    runtimeChunk: {
      name: 'manifest'
    }
  }
})

module.exports = webpackConfig