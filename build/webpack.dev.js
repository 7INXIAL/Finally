const { merge } = require("webpack-merge");
const path = require("path");
const config = require("./webpack.config.js");
module.exports = merge(
  {
    mode: "development",
    devtool: "eval-cheap-module-source-map",
    stats: {
      builtAt: true,
      logging: "none",
    },
    devServer: {
      compress: true,
      port: 9000,
      open: true,
      proxy: {
        "/api": "http://localhost:3000",
      },
      client: {
        progress: true,
        overlay: true,
      },
      onListening: function (devServer) {
        if (!devServer) {
          throw new Error('webpack-dev-server is not defined');
        }
        const port = devServer.server.address().port;
        console.info('Listening on port:', port);
      },
    },
  },
  config
);
