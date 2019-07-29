const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
 
const outputDirectory = "dist";
 
module.exports = {
  entry: [
    "./src/client/index.js",
    "./src/client/style.css"
],
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    host: "0.0.0.0",
    port: 4000,
    open: true,
    disableHostCheck : true,
    historyApiFallBack: true,
    
    proxy: {
      'api/**': {
        target : "http://192.168.0.15:8080",
        changeOrigin: true,
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
