const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 8080,
    host: "0.0.0.0",
    devMiddleware: {
      writeToDisk: true,
    },
    static: {
      directory: "./dist",
    },
  },
});
