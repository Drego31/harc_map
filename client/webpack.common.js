const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackUtils = require('./webpack/utils');
const webpackRules = require('./webpack/rules').rules;
const resolve = webpackUtils.resolve;

const AppName = 'HarcMap';
const AppVersion = webpackUtils.getAppVersionFromPackageJSON();
const publicPath = '../public';

webpackUtils.removeOldBundleFiles(publicPath + '/*app.*.js');
webpackUtils.removeOldBundleFiles(publicPath + '/*app.js');

module.exports = {
  mode: 'development',
  entry: 'src/index.js',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  output: {
    // filename in dev and prod configs
    path: resolve(publicPath),
    publicPath: '/',
  },
  module: {
    rules: webpackRules,
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js',
      src: resolve('src'),
      api: resolve('src/api'),
      map: resolve('src/map'),
      store: resolve('src/store'),
      utils: resolve('src/utils'),
      vendors: resolve('../vendors'),
      validateCodes: resolve('../lib/validateCodes.js'),

      atoms: resolve('src/components/atoms'),
      extends: resolve('src/components/extends'),
      mixins: resolve('src/components/mixins'),
      molecules: resolve('src/components/molecules'),
      organisms: resolve('src/components/organisms'),
      pages: resolve('src/components/pages'),
      templates: resolve('src/components/templates'),
    },
    extensions: ['.js', '.vue', '.sass', '.css'],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolve('src/index.html'),
    }),
    new webpack.DefinePlugin({
      APP_NAME: JSON.stringify(AppName),
      VERSION: JSON.stringify(AppVersion),
    }),
  ],
};
