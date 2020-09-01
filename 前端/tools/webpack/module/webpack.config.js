const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");//先清除文件夹内容，然后再将打包的内容放置进去
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",//指定模式，development(开发者模式),production(生产者模式)
    //统一打包
    // entry: "./src/one.js",//入口文件,单入口
    // // entry: ["./src/one.js","./src/two.js"],//入口文件，多入口
    // output: {//出口文件
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: 'abc.js'
    // },
    //分别打包
    entry: {
        first: "./src/one.js",
        "second": "./src/two.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].abc.js'
    },
    plugins: [//插件
        new CleanWebpackPlugin()
    ]
}

