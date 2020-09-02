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

默认会生成一个index.html，并会将打包以后的js放置到html的底部

```
npm install html-webpack-plugin -D
```

2、引入

```
const HtmlWebpackPlugin = require("html-webpack-plugin");
```

3、使用

```js
{
    plugins: [
        new HtmlWebpackPlugin({
            title: "自定义标题",//标题,还需要在模板html文件中通过<%= htmlWebpackPlugin.options.title %>进行输出
            filename: "home.html",//指定生成的文件名，默认为index.html
            template: "./public/index.html",//将指定的文件视为一个模板，生成的html即以该模板为参考对象
            hash: true,//hash选项的作用是 给生成的 js 文件一个独特的 hash 值，该 hash 值是该次 webpack 编译的 hash 值。默认值为 false 
            minify: { // 压缩HTML文件
                //是否对大小写敏感，默认false
                caseSensitive: true,
                //是否简写boolean格式的属性如：disabled="disabled" 简写为disabled  默认false
                collapseBooleanAttributes: true,
                //是否去除空格，默认false
                collapseWhitespace: true,
                //是否压缩html里的css（使用clean-css进行的压缩） 默认值false；
                minifyCSS: true,
                //是否压缩html里的js（使用uglify-js进行的压缩）
                minifyJS: true,
                //Prevents the escaping of the values of attributes
                preventAttributesEscaping: true,
                //是否移除属性的引号 默认false
                removeAttributeQuotes: true,
                //是否移除注释 默认false
                removeComments: true,
                //从脚本和样式删除的注释 默认false
                removeCommentsFromCDATA: true,
                //是否删除空属性，默认false
                removeEmptyAttributes: true,
                //  若开启此项，生成的html中没有 body 和 head，html也未闭合
                removeOptionalTags: false,
                //删除多余的属性
                removeRedundantAttributes: true,
                //删除script的类型属性，在h5下面script的type默认值：text/javascript 默认值false
                removeScriptTypeAttributes: true,
                //删除style的类型属性， type="text/css" 同上
                removeStyleLinkTypeAttributes: true,
                //使用短的文档类型，默认false
                useShortDoctype: true,
            },
            cache: true,//默认是true的，表示内容变化的时候生成一个新的文件。
            showErrors: true,//这个我们自运行项目的时候经常会用到，showErrors 的作用是，如果 webpack 编译出现错误，webpack会将错误信息包裹在一个 pre 标签内，属性的默认值为 true ，也就是显示错误信息。开启这个，方便定位错误
            // chunks: ["first"],//chunks主要用于多入口文件，当你有多个入口文件，那就回编译后生成多个打包后的文件，那么chunks 就能选择你要使用那些js文件，而如果没有指定 chunks 选项，默认会全部引用。
            // excludeChunks: ["second"],//排除掉一些js,second.js问价就不会在html文件中引用
            inject: true,//1、true：默认值，script标签位于html文件的 body 底部; 2、body：script标签位于html文件的 body 底部（同 true）; 3、head：script 标签位于 head 标签内; 4、false：不插入生成的 js 文件，只是单纯的生成一个 html 文件
            // favicon: "./dist",//给生成的 html 文件生成一个 favicon。属性值为 favicon 文件所在的路径名
            arr: [1,2,3,4,5],//自定义的属性，在html中使用
        }),
    ]
}
```

#### 模块

module.noParse值的类型： RegExp | [RegExp] | function
防止 webpack 解析那些任何与给定正则表达式相匹配的文件。忽略的文件中不应该含有 import, require, define 的调用，或任何其他导入机制。忽略大型的 library 可以提高构建性能。

```js
module.exports = {
  mode: 'devleopment',
  entry: './src/index.js',
  ...
  module: {
    noParse: /jquery|lodash/,
    // 从 webpack 3.0.0 开始,可以使用函数，如下所示
    // noParse: function(content) {
    //   return /jquery|lodash/.test(content);
    // }
  }
  ...
};
```

module.rules  创建模块时，匹配请求的规则数组。这些规则能够修改模块的创建方式。这些规则能够对模块(module)应用 loader，或者修改解析器(parser)

```js
module.exports = {
  ...
  module: {
    noParse: /jquery|lodash/,
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
  ...
};
```

{ test: Condition }：匹配特定条件。一般是提供一个正则表达式或正则表达式的数组，但这不是强制的。

```js
  module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
  ...
};
```

`{ include: Condition }`:匹配特定条件。一般是提供一个字符串或者字符串数组，但这不是强制的。

`{ exclude: Condition }`:排除特定条件。一般是提供一个字符串或字符串数组，但这不是强制的。

`{ and: [Condition] }`:必须匹配数组中的所有条件

`{ or: [Condition] }`:匹配数组中任何一个条件

`{ not: [Condition] }`:必须排除这个条件

```js
module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, "app/styles"),
          path.resolve(__dirname, "vendor/styles")
        ],
        use: ['style-loader', 'css-loader']
      }
    ]
  }
  ...
};
```



##### 模块1

1、下载模块

```cmd
npm install webpack-dev-server -D
```

2、全局安装

```cmd
npm install webpack-dev-server -g
```

使用<font color="red">webpack-dev-server</font>启动服务

##### 模块2(用来处理css文件)

1、下载模块

```cmd
npm install style-loader css-loader -D
```

##### 模块3(处理图片)

1、下载模块

```cmd
npm install url-loader file-loader -D
```

url-loader模块用来打包图片

file-loader模块用来在js文件中导入图片，例：

```js
import "./assets/css/index.css";
import img from "./assets/image/11.jpg";

const faviconImg = new Image();

faviconImg.src = img;
document.body.appendChild(faviconImg)
console.log("one");
```

##### 模块4(编译sass)

1、下载模块

```cmd
npm install sass-loader node-sass -D
```

##### 模块5(编译less)

1、下载模块

```cmd
npm install less less-loader -D
```

##### 模块6(编译es、jsx代码)

1、下载模块

```cmd
npm install babel-loader babel-core babel-preset-react babel-preset-env -D
```

### 总结

```js
/*
npm install webpack -g
npm install webpack-cli -g
npm install webpack-dev-server -g
webpack -v//查看版本号
npm install webpack webpack-cli -D//webpack依赖
npm install clean-webpack-plugin -D//先清除文件夹内容，然后再将打包的内容放置进去
npm install html-webpack-plugin -D//压缩html文件
npm install webpack-dev-server -D//启动服务
npm install style-loader css-loader -D//处理css文件
npm install url-loader file-loader -D//处理图片
npm install sass-loader node-sass -D//编译sass
npm install less less-loader -D//编译less
npm install babel-loader babel-core @babel/core babel-preset-react babel-preset-env -D//编译es、jsx代码

npm install webpack webpack-cli clean-webpack-plugin html-webpack-plugin webpack-dev-server style-loader css-loader url-loader file-loader sass-loader node-sass less less-loader babel-loader babel-core @babel/core babel-preset-react babel-preset-env -D
 */

const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");//先清除文件夹内容，然后再将打包的内容放置进去
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",//指定模式，development(开发者模式),production(生产者模式)
    //统一打包
    entry: "./src/one.js",//入口文件,单入口
    // entry: ["./src/one.js","./src/two.js"],//入口文件，多入口
    output: {//出口文件
        path: path.resolve(__dirname, 'dist'),
        filename: 'abc.js'
    },
    // //分别打包
    // entry: {
    //     first: "./src/one.js",
    //     second: "./src/two.js"
    // },
    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: '[name].abc.js'
    // },
    devServer: {
        open: true,//自动打开
        port: 8000,//端口号
        host: "127.0.0.1",//域名
        // openPage: 'index',//配置项用于打开指定 URL 的网页。
        hot: true,//热更新
        proxy: {//服务器代理
            '/proxy': {//规则，以/proxy开头的地址会使用该规则，例如：http://127.0.0.1:8000/proxy/login
                target: 'http://127.0.0.1:80',//设置你要访问的服务器，例如http://127.0.0.1/proxy/login
                changeOrigin: true,//是否开启代理
                pathRewrite: {
                    '^/proxy': '',//将以 /proxy 开头的这一部分用空字符串替换掉，最后访问的地址为 http://127.0.0.1/login
                }
            }
        },
        allowedHosts: [//配置一个白名单列表，只有HTTP请求的HOST在列表里才正常返回
            // 'www.baidu.com',
        ],
        compress: false,//配置是否启用 gzip 压缩。boolean 为类型，默认为 false。
    },
    module: {
        rules: [//规则
            {
                test: /.\.css$/,
                loader: ["style-loader", "css-loader"]
            },
            {
                test: /.\.(png|gif|jpg|jpeg|svg)$/,
                //第一种写法
                loader: "url-loader",
                query: {
                    limit: 1024,//limit(限制)的值小于图片的大小，不转换，否则转换
                    outputPath: "img",//指定图片存放的地址
                }
                //第二种写法
                // use: [
                //     {
                //         loader: "url-loader",
                //         query: {
                //             limit: 10240,//limit(限制)的值小于图片的大小，不转换，否则转换
                //             outputPath: "img",//指定图片存放的地址
                //         }
                //     }
                // ]
            },
            {
                test: /.\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    },
                ]
            },
            {
                test: /.\.less$/,
                loader: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /.\.js$/,
                exclude: /node_modules/,//排除node_modules目录
                loader: "babel-loader",
                query: {
                    presets: [
                        "babel-preset-react",
                        "babel-preset-env"
                    ]
                }
            }
        ]
    },
    plugins: [//插件
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "自定义标题",//标题,还需要在模板html文件中通过<%= htmlWebpackPlugin.options.title %>进行输出
            filename: "index.html",//指定生成的文件名，默认为index.html
            template: "./public/index.html",//将指定的文件视为一个模板，生成的html即以该模板为参考对象
            hash: true,//hash选项的作用是 给生成的 js 文件一个独特的 hash 值，该 hash 值是该次 webpack 编译的 hash 值。默认值为 false 
            favicon: "./src/assets/image/站标.jpg",//给生成的 html 文件生成一个 站标。属性值为 站标 文件所在的路径名
            minify: { // 压缩HTML文件
                caseSensitive: true,//是否对大小写敏感，默认false
                collapseBooleanAttributes: true,//是否简写boolean格式的属性如：disabled="disabled" 简写为disabled  默认false
                collapseWhitespace: true,//是否去除空格，默认false
                minifyCSS: true,//是否压缩html里的css（使用clean-css进行的压缩） 默认值false；
                minifyJS: true,//是否压缩html里的js（使用uglify-js进行的压缩）
                preventAttributesEscaping: true,//Prevents the escaping of the values of attributes(防止转义属性值)
                removeAttributeQuotes: true,//是否移除属性的引号 默认false
                removeComments: true,//是否移除注释 默认false
                removeCommentsFromCDATA: true,//从脚本和样式删除的注释 默认false
                removeEmptyAttributes: true,//是否删除空属性，默认false
                removeOptionalTags: false,//  若开启此项，生成的html中没有 body 和 head，html也未闭合
                removeRedundantAttributes: true,//删除多余的属性
                removeScriptTypeAttributes: true,//删除script的类型属性，在h5下面script的type默认值：text/javascript 默认值false
                removeStyleLinkTypeAttributes: true,//删除style的类型属性， type="text/css" 同上
                useShortDoctype: true,//使用短的文档类型，默认false
            },
            cache: true,//默认是true的，表示内容变化的时候生成一个新的文件。
            showErrors: true,//这个我们自运行项目的时候经常会用到，showErrors 的作用是，如果 webpack 编译出现错误，webpack会将错误信息包裹在一个 pre 标签内，属性的默认值为 true ，也就是显示错误信息。开启这个，方便定位错误
            // chunks: ["first"],//chunks主要用于多入口文件，当你有多个入口文件，那就回编译后生成多个打包后的文件，那么chunks 就能选择你要使用那些js文件，而如果没有指定 chunks 选项，默认会全部引用。
            // excludeChunks: ["second"],//排除掉一些js,second.js问价就不会在html文件中引用
            inject: true,//1、true：默认值，script标签位于html文件的 body 底部; 2、body：script标签位于html文件的 body 底部（同 true）; 3、head：script 标签位于 head 标签内; 4、false：不插入生成的 js 文件，只是单纯的生成一个 html 文件

            arr: [1, 2, 3, 4, 5],//自定义的属性，在html中使用htmlWebpackPlugin.options.arr
        }),

    ]
}


```

