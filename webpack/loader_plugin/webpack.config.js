const path = require("path");
const DemoWebpackPlugin = require("./demo_plugin");
module.exports = {
  // 指定构建模式，可选值有 'development'、'production' 和 'none'
  mode: "development",

  // 入口文件配置
  entry: {
    main: "./index.js", // 这里需要确保你有一个位于 src/index.js 的入口文件
  },

  // 输出文件配置
  output: {
    path: path.resolve(__dirname), // 输出文件夹，通常为 'dist'
    filename: "[name].bundle.js", // 输出文件名，[name] 会被替换为入口的名称（如 'main'）
  },

  module: {
    rules: [
      {
        test: /\.js$/, // 仅对 .js 文件应用此 loader
        use: [
          {
            loader: path.resolve(__dirname, "./replace_loader.js"),
          },
        ],
      },
    ],
  },
  plugins: [new DemoWebpackPlugin()],
};
