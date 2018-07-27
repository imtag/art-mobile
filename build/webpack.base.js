const { resolve } = require('./utils.js')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const webpackConfig = {
  target: 'web',

  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: [resolve('node_modules')],
        loader: 'vue-loader',
        options: {
          preserveWhitespace: false
        }
      },
      {
        test: /\.(js|vue)$/,
        exclude: [resolve('node_modules')],
        enforce: 'pre',
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: [resolve('node_modules')],
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: '8192',
          name: 'styles/images/[name].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: '8192',
          name: 'styles/fonts/[name].[ext]'
        }
      }
    ]
  },

  resolve: {
    modules: [resolve('node_modules')],
    extensions: ['.js', '.vue', '.json', '.scss', '.css'],
    alias: {
      'src': resolve('src'),
      'example': resolve('example')
    }
  },

  plugins: [
    new VueLoaderPlugin()
  ]
}

module.exports = webpackConfig