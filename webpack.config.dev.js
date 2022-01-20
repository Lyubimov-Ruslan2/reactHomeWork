const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dev"),
    filename: "index_bundle.js",
  },
  watch: true,
  devtool: "source-map",
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"),
    },
    extensions: [".js", ".jsx"],
  },

  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader", exclude: /node_modules/ },
      { test: /\.(jsx)$/, use: "babel-loader", exclude: /node_modules/ },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
};
