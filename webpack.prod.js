const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = require('./webpack/utils').resolve;

module.exports = merge(common, {
  mode: 'production',
  performance: {
    hints: false,
  },
  output: {
    filename: 'app.[contenthash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('src/index.html'),
      filename: 'index.html',
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      USER: JSON.stringify(''),
      PASSWORD: JSON.stringify(''),
    }),
  ],
});
