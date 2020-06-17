**为什么使用console.log()会打印出undefined呢？**
 这得因为JavaScript在最初是被设计为**动态语言**，对于函数来说，函数的返回值类型不会被预定义（不像C、C++可以自己设置返回值类型），当函数没有返回值或者返回的状态为空时，JavaScript自动返回**undefined**，所以函数都会有一个返回值，至少是**undefined**， 因此在使用console.log时经常看到打印出**undefined**，如果希望改变console.log()的返回值，估计只能查看chrome的源代码修改了

```js
const fn = (a) => {
  const b = console.log(a);
  return b;
}
console.log(fn(1));
//1
//undefined
```

