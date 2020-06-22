prevent：阻止

default：默认

```js
function stopDefault(e){
    e.preventDefault();//阻止默认事件
}
```

propagation：传播；扩展；宣传；培养

bubble：冒泡；气泡

```js
function stopBubble(e){
	e.stopPropagation();//阻止事件冒泡
}
```

parse：解析

```js
JSON.parse();//将字符串转换为json对象
JSON.toStringify();//将json对象转换为字符串
```

instance：实例；例子；实例；举...为例

```js
let str = "字符串";
console.log(str instanceof String);//true
```

plugin：插件；外挂