module.exports = {
  plugins: [
    // 样式前缀 cssnano 已集成
    // require("autoprefixer"),
    // 样式兼容, 以适应不同的浏览器环境
    require("postcss-preset-env"),
    // 优化样式文件, 如合并样式,去除空白,名称简写,去除未用的规则等
    // 也可以压缩, 但是压缩不够好, 采用 CssMinimizerPlugin 配合 cssnano 压缩
    // require("cssnano")({
    //   preset: [
    //     "advanced",
    //     {
    //       autoprefixer: false,
    //     },
    //   ],
    // }),
  ],
};
