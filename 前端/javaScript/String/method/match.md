match() ---  在字符串内检索指定的值，找到一个或多个正则表达式的匹配的字符。匹配不到返回Null

```js
// 语法
stringObject.replace(regexp/substr,replacement)

// regexp/substr 要在字符串中匹配的字符（必须参数）
// replacement 字符串要替换的值（必须参数）

let str = 'dengZiYao dengZiYao';

console.log(str.replace(/Yao/g, 'yao'))  // dengZiyao dengZiyao
```

