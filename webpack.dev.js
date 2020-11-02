const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = require('./webpack/utils').resolve;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: 'app.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('src/index.html'),
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false),
      USER: JSON.stringify('demo@demo.com'),
      PASSWORD: JSON.stringify('HarcMap1'),
    }),
  ],
});
