split() --- 把字符串从某个字符位置分割成字符串数组

```js
split(separator,limt) // 接收两个参数
// separator 字符串或正则表达式，从该参数指定的地方分割 string Object （非必需参数）
// limt  定义返回的数组的最大长度（非必需参数）


let str = 'deng-Zi-Yao';

console.log(str.split('-'))  // ['dneg','zi','yao']
console.log(str.split())  // ['dnegziyao']
console.log(str.split('-',2))  // ['dneg','zi']
```

