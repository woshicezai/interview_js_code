const path = require("path");

module.exports = {
  // 指定构建模式，可选值有 'development'、'production' 和 'none'
  mode: "development",

  // 入口文件配置
  entry: {
    main: "./src/index.js", // 这里需要确保你有一个位于 src/index.js 的入口文件
  },

  // 输出文件配置
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    static: [
      {
        directory: path.join(__dirname, "dist"),
      },
    ],
    compress: true,
    port: 9000,
  },
};
