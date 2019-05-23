const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "./src/main.js"),
  output: {
    path: path.join(__dirname, "./dist"),
    filename: 'bundle.js'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, "./src/index.html"),
      filename: "index.html"
    })
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
      { test: /\.(jpg|jpeg|png|gif|bmp)$/, use: "url-loader?limit=23941&name=[hash:8]-[name].[ext]" },
      { test: /\.(ttf|woff|woff2|svg|eot)$/, use: "url-loader" },
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
      { test: /\.vue$/, use: 'vue-loader' }
    ]
  },
  resolve: {
    alias: {  // 修改 vue 被导入时候的包的路径
      // "vue$": "vue/dist/vue.js"
    }
  }
}