indexOf --- 返回字符串中某个字符 **首次出现** 的位置

```js
// 语法 stringObject.indexOf(searchvalue,fromindex)
// searchvalue 为要检索的字符（必须参数）
// fromindex 定义从字符串哪个位置开始检索字符（非必须参数）

//若检测一个不存在的字符  则返回 -1

let str = 'dengZiYao dengZiYao';
console.log(str.indexOf(g))   // 3
console.log(str.indexOf(b))   // -1

// indexOf()  在 字符串 和 数组 中都是适用的
```

