const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

function resolve (dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  mode: 'development',
  entry: './js/index.js',
  output: {
    filename: './main.min.js',
    path: resolve('./public'),
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [
          resolve('src'),
        ],
        options: {
          formatter: require('eslint-friendly-formatter'),
        },
      },
      {
        test: /\.(sass)$/,
        use: [
          // MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'import-glob-loader',
        ],
      },
      // {
      //   test: /\.(css)$/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     'css-loader',
      //   ],
      // },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env'],
        },
      },
    ],
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js',
      // app: resolve('./js/app/'),
      root: resolve('./'),
    },
    extensions: ['.vue', '.sass', '.js'],
  },
  plugins: [
    new VueLoaderPlugin(),
    // new MiniCssExtractPlugin({
    //   filename: 'main.css',
    // }),
  ],
}
