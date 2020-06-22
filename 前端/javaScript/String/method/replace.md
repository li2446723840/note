replace() --- 在字符串中用 某种字符去替换指定的字符 或者 用正则表达式去替换某些字符 

```js
// 语法
stringObject.replace(regexp/substr,replacement)

// regexp/substr 要在字符串中匹配的字符（必须参数）
// replacement 字符串要替换的值（必须参数）

let str = 'dengZiYao dengZiYao';

console.log(str.replace(/Yao/g, 'yao'))  // dengZiyao dengZiyao
```

