const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve (dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: './app.min.js',
    path: resolve('./public'),
  },
  devServer: {
    contentBase: resolve('./public'),
    compress: true,
    port: 8000,
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
          'style-loader',
          'css-loader',
          'sass-loader',
          'import-glob-loader',
        ],
      },
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
      },
    ],
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js',
      src: resolve('./src'),
      components: resolve('./src/components'),
    },
    extensions: ['.vue', '.sass', '.js'],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
}
