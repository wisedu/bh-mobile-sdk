'use strict'

let path = require('path')

module.exports = {
  entry: './demo/index.js',
  output: {
    path: path.resolve(__dirname, './demo/dist'),
    filename: 'dist.js',
    publicPath: '/dist/',
  },
  devServer: {
    contentBase: './demo'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
}
