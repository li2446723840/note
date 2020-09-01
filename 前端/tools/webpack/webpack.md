#### webpack：是一个打包机。依赖node

###### 1、转换：sass  less  ts  es6  jsx

###### 2、打包：js丑化 图片压缩 html

###### 3、项目优化：热更新，创建服务代理

#### 安装:

```cmd
npm install webpack -g
npm install webpack-cli -g
webpack -v//查看版本号
```

#### webpack（零配置）

使用webpack命令之后默认将src文件当中的index.js文件打包到dist文件夹中的main.js文件中。

#### webpack（自定义配置）

###### 1、打包一个one.js

```cmd
webpack src/one.js //将src下的one.js打包到dist文件夹下的main.js
```

###### 2、打包到指定目录

```cmd
webpack src/one.js --output abc.js//将src下的one.js打包到abc.js文件
webpack src/one.js --output ../abc.js//将src下的one.js打包到上一级目录下的abc.js文件
webpack src/one.js --output my/abc.js//将src下的one.js打包到my文件夹下的abc.js文件
```

###### 3、打包多个文件

第一种：

​		one.js文件使用import引入two.js文件。自动打包依赖。

第二种：

```cmd
webpack src/one.js src/two.js
```

###### 4、 环境：mode

1、production 生产环境

2、development 开发环境

webpack打包之后默认的是生产环境

```cmd
webpack src/one.js --mode development//打包到开发环境
```

#### 使用：

第一种

```cmd
webpack src/one.js src/two.js --output my/abc.js --mode development
```

第二种：

使用npm init创建package.json文件

```json
{
	"name": "module",
  	"version": "1.0.0",
  	"scripts": {
    	"test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack src/one.js src/two.js --output my/abc.js --mode development"
 	 },
}
```

然后在scripts中添加bulid命令，然后执行npm run bulid即可打包

#### 配置文件

创建webpack.config.js文件 ，若创建的文件名为feng.config.js需要使用以下代码来指定webpack的配置文件为feng.config.js文件

```cmd
webpack --config feng.config.js
```

1、统一打包

```js
const path = require('path');

module.exports = {
    mode: "production",//指定模式，development(开发者模式),production(生产者模式)
     entry: "./src/one.js",//入口文件,单入口
     // entry: ["./src/one.js","./src/two.js"],//入口文件，多入口
     output: {//出口文件
         path: path.resolve(__dirname, 'dist'),
         filename: 'abc.js'
     },
    
}
```

2、分别打包

```js
const path = require('path');

module.exports = {
    mode: "production",//指定模式，development(开发者模式),production(生产者模式)
    entry: {//多入口
        first: "./src/one.js",
        "second": "./src/two.js"
    },
    output: {//多出口
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].abc.js'
    },
}
```

#### plugins(插件)

首先安装以下两个插件，很多插件依赖这两个插件。

```cmd
npm install webpack webpack-cli -D
```

##### 插件1

1、下载插件 clean-webpack-plugin ：先清除文件夹内容，然后再将打包的内容放置进去

```cmd
npm install clean-webpack-plugin -D
```

2、引入

```js
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
```

3、

```json
{
    plugins: [
        new CleanWebpackPlugin()
    ]
}
```

##### 插件2

1、下载插件html-webpack-plugin：

(1)为html文件中引入的外部资源如script、link动态添加每次compile后的hash，防止引用缓存的外部文件问题

(2)可以生成创建html入口文件，比如单页面可以生成一个html文件入口，配置N个html-webpack-plugin可以生成N个页面入口

```
npm install html-webpack-plugin -D
```

2、引入

```
const HtmlWebpackPlugin = require("html-webpack-plugin");
```

