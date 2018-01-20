const webpack = require('webpack');
const path = require('path');

require('babel-polyfill');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './client/src/app'
  ],
  module: {
    loaders: [
      { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.s?css$/, loader: 'style-loader!css-loader!sass-loader' },
    ]
  },
  resolve: {
    modules: [
      path.resolve('./'),
      path.resolve('./node_modules'),
    ],
    extensions: ['.js','.scss'],
  },
  output: {
    path: path.join(__dirname, '/client/build/'),
    filename: 'bundle.js'
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: './client/build',
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'HeyAssist',
      template: './client/public/index.html'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
