const path = require("path");
// 清理构建目录
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 构建 index.html
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 打包分析
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
// 把 CSS 抽离成单独的文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 压缩 CSS
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// 压缩 JavaScript
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  stats: {
    moduleAssets: false,
    modules: false,
    builtAt: true,
  },
  entry: {
    index: path.resolve(__dirname, "../src/main.js"),
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "static/js/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.less$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            },
          },
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        type: "asset",
        generator: {
          filename: "static/images/[contenthash:8][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
      {
        test: /\.(otf|eot|woff2?|ttf|svg)$/i,
        type: "asset",
        generator: {
          filename: "static/fonts/[hash:8][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
      {
        test: /\.(txt|xml)$/i,
        type: "asset",
        generator: {
          filename: "static/file/[contenthash:8][ext]",
        },
      },
      {
        test: /.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: "asset/resource",
        generator: {
          filename: "static/media/[contenthash:8][ext]",
        },
      },
    ],
  },
  resolve: {
    alias: {},
  },
  plugins: [
    // 清理打包文件
    new CleanWebpackPlugin(),
    // 按模板生成 index.heml
    new HtmlWebpackPlugin({
      title: "webpack-react",
      template: "index.html",
      filename: 'index.html',
    }),
    // 将 CSS 抽离成单独的文件
    new MiniCssExtractPlugin({
      filename: "static/style/[contenthash:8].css",
    }),
    // 打包分析
    // new BundleAnalyzerPlugin(),
  ],
  // 外部扩展优化
  externals: {
    lodash: "_",
    dayjs: "dayjs",
  },
  // 缓存
  // cache: {
  //   type: "filesystem",
  //   cacheDirectory: path.resolve(__dirname, "../cache/.javascript_cache"),
  // },
  // 优化
  optimization: {
    // 开启 CssMinimizerPlugin 后, webpack 自带的 js 压缩失效
    // 使用插件 TerserPlugin 压缩 js 文件
    minimize: true,
    minimizer: [
      // 压缩 JavaScript
      new TerserPlugin({
        terserOptions: {
          compress: {
            // 去掉 console
            // drop_console: true,
          },
        },
      }),
      // 压缩 CSS
      new CssMinimizerPlugin({
        // 多进程并行运行
        parallel: true,
        // 并发运行数
        parallel: 4,
        // 使用 cssnano 压缩
        // 比 postcss + cssnano 压缩效果好
        minimizerOptions: {
          preset: "advanced",
          // autoprefixer: false,
        },
      }),
    ],
    // 内部分割优化
    splitChunks: {
      minSize: 10000,
      cacheGroups: {
        react: {
          chunks: "all",
          test: /[\\/]node_modules[\\/].*react(.*)/,
          priority: 80,
          name: "react",
        },
        vendors: {
          chunks: "all",
          priority: 60,
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            return `${packageName.replace("@", "")}`;
          },
        },
        // components: {
        //   test: resolve("src/components"),
        //   chunks: "all",
        //   minChunks: 2,
        //   priority: 10,
        //   // filename: "js/vendor[contenthash].js",
        // },
      },
    },
  },
};
