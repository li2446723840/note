| flag | 说明                                                         |
| ---- | ------------------------------------------------------------ |
| r    | 读取文件。如果文件不存在时抛出异常                           |
| r+   | 读取并写入。如果文件不存在时抛出异常                         |
| rs   | 以同步方式读取文件并通知操作系统忽略本地文件系统缓存。如果文件不存在时抛出异常 |
| w    | 写入文件。如果文件不存在时则创建该文件。如果文件已存在则清空文件内容 |
| w+   | 读取并写入文件。如果文件不存在时则创建该文件。如果文件已存在则清空文件内容 |
| wx   | 作用与"w”类似。但是以排他方式打开文件                        |
| wx+  | 作用与"W+"类似。但是以排他方式打开文件                       |
| a    | 以追加方式写入文件。如果文件不存在时则创建该文件             |
| a+   | 读取并以追加方式写入文件。如果文件不存在时则创建该文件       |
| ax   | 作用与"a"类似。但是以排他方式打开文件                        |
| ax+  | 作用与"a+"类似。但是以排他方式打开文件                       |

<h4><b><font color="red">引入模块</font></b></h4>
```js
const fs = require('fs');//node.js自带的模块
```

<h4><b><font color="red">异步读写</font></b></h4>
```js
/*异步读取文件fs.readFile(path,config,callback);
path:(必选)文件路径
config:(可选)配置信息{"encoding":"utf-8","flag":"r"}
	当只有encoding时可以直接写"utf-8"
callback:(必选)回调函数，接受两个参数err和data
	err是错误信息，data是读取的数据
*/
fs.readFile('./demo.txt',{'encoding':'utf-8','flag':'r'},function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})
```

```js
/*异步写入数据fs.writeFile(path,data,callback);
path:(必选)写入路径
data:(必选)写入数据
callback:(必选)回调函数，接受一个参数err(错误信息)
*/
fs.writeFile('./demo.txt','写入数据',function(err){ 
    if(err){
        console.log(err);
    }
})
```

<h4><b><font color="red">同步读写</font></b></h4>
```js
/*同步读取fs.readFileSync(path,config);
path:(必选)读取路径
config:(可选)读取配置{"encoding":"utf-8","flag":"r"}
	当只有encoding时可以直接写"utf-8"
	忽略该项时读取的数据默认为buffer格式，需要使用toString()方法转换
*/
const data = fs.readFileSync('./demo.txt');
console.log(data);
//console.log(data.toString());
```

```js
/*同步写入fs.writeFileSync(path,data,config);
path:(必选)写入路径
data:(必选)写入数据
config:(可选)写入配置
*/
fs.writeFileSync('./demo.txt','同步写入',{'flag':'w'});
```

<h4><b><font color="red">追加数据</font></b></h4>
```js
/*追加数据fs.appendFile(path,data,config,callback);
path:(必选)路径
data:(必选)追加数据
config:(可选)配置信息
callback:(必选)回调函数，接受一个参数err(错误信息)
*/
fs.appendFile('./demo.txt','追加数据',{'encoding':'utf-8'},function(err){
    if(err){
        console.log(err);
    }
})
```

```
fs.appendFileSync('./demo.txt','同步追加','utf-8');//同步追加数据
```

