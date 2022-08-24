首先呢 `NaN` 是 ‘`not a number`’ 的缩写，表示 “不是一个数字”

通常会在一个数字和其他类型运算过程中产生：

虽然它 “不是一个数字”，但是 NaN 的 typeof 结果却是 `number`

console.log(typeof (4 * ‘a’)); // number

**NaN 和任何变量都不相等，包括 NaN 自己**

```js
console.log(NaN === NaN); // false
```

判断一个变量是不是 NaN 可以用 `isNaN()`函数

但是这并不是一个完美的函数，有些时候用`value !== value`似乎更准确，ES6中呢已经有`Number.isNaN()`方法，将比 `isNaN()`准确的多。