const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.resolve = function (dir) {
  return path.resolve(__dirname, '..', dir)
}

exports.styleLoader = function () {
  const development = [
    {
      test: /\.css$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'postcss-loader'
      ]
    },
    {
      test: /\.scss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    }
  ]

  const production = [
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'vue-style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          },
          'postcss-loader'
        ]
      })
    },
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'vue-style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      })
    }
  ]
  return process.env.NODE_ENV === 'production' ? production : development
}