const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: 'app.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false),
      USER: JSON.stringify('demo@demo.com'),
      PASSWORD: JSON.stringify('HarcMap1'),
    }),
  ],
});
