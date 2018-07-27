const merge = require('webpack-merge')
const { resolve, styleLoader } = require('./utils.js')
const fs = require('fs')
const baseConfig = require('./webpack.base.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const components = {}
const componentsPath = resolve('src/components')
const dirs = fs.readdirSync(componentsPath)

if (dirs && dirs.length) {
  dirs.forEach(name => {
    components[name] = resolve(componentsPath + '/' + name)
  })
}

process.env.NODE_ENV = 'production'

const webpackConfig = merge(baseConfig, {
  mode: 'production',
  entry: components,

  output: {
    path: resolve('lib'),
    publicPath: '/lib/',
    filename: '[name]/index.js'
  },

  module: {
    rules: styleLoader()
  },

  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },

  plugins: [
    new ExtractTextPlugin('[name]/style.css')
  ]
})

module.exports = webpackConfig