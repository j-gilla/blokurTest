const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test:/\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(png|jpg)$/, loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    modules: [
      path.resolve('./client'),
      path.resolve('./node_modules')
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
