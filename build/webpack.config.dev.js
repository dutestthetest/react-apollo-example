const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client',
    './src/index',
  ],
  resolve: {
    extensions: ['', '.js', '.css'],
    alias: {
      '@config': path.join(__dirname, '../src/config'),
      '@store': path.join(__dirname, '../src/store'),
      '@components': path.join(__dirname, '../src/ressources/components'),
      '@layouts': path.join(__dirname, '../src/ressources/layouts'),
      '@utils': path.join(__dirname, '../src/utils'),
      '@Feed': path.join(__dirname, '../src/app/Feed'),
    },
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.(js)$/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-0', 'react'],
        env: {
          development: {
            presets: ['react-hmre']
          }
        },
        compact: false,
      },
      include: path.join(__dirname, '../src'),
    }, {
      test: /\.css$/,
      loaders: [
        'style',
        'css?modules&localIdentName=[name]__[local]___[hash:base64:5]',
        'postcss',
      ],
    }],
  },
};
