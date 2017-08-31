
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js",
    publicPath : "/"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.css$/, exclude: /node_modules/, use: ['style-loader' , 'css-loader']}
    ]
  },
  devServer : {historyApiFallback : true},
  plugins: [HTMLWebpackPluginConfig]
};
