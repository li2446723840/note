lastIndexOf() ----  返回字符串中某个字符 **最后出现** 的位置  该方法从字符串后面开始检索起 也就是从后面开始检索字符首次出现的位置  和 indexOf 相反

```js
// 语法 stringObject.lastIndexOf(searchvalue,fromindex)
// searchvalue 为要检索的字符（必须参数）
// fromindex 定义从字符串哪个位置开始检索字符（被必须参数）

//若检测一个不存在的字符  则返回 -1

let str = 'dengZiYao dengZiYao';
console.log(str.lastIndexOf(g))   // 5
console.log(str.lastIndexOf(b))   // -1

// lastIndexOf()  在 字符串 和 数组 中都是适用的
```

