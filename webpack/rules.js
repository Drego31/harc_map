const resolve = require('./utils').resolve;

module.exports = {
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
      test: /\.(sass|scss)$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
        'import-glob-loader',
      ],
    },
    {
      test: /\.(css)$/,
      use: [
        'style-loader',
        'css-loader',
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
      options: {
        'plugins': [
          ['babel-plugin-transform-builtin-extend', {
            globals: ['Error'],
          }],
        ],
      },
    },
  ],
};
