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
    contentBase: './demo',
    historyApiFallback: true,
    noInfo: true,
    host: '0.0.0.0',
    port: '3000'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    }
  }
}
