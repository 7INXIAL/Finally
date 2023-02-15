const {merge} = require("webpack-merge");
const config = require("./webpack.config.js");
module.exports = merge(
  {
    mode: "production",
  },
  config
);
