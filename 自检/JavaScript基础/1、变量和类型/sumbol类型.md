# 介绍

- symbol是一种基本数据类型。
- Symbol()函数会返回symbol类型的值，此值是唯一的。
- 一个symbol值能作为对象属性的标识符（这是该数据类型仅有的目的）。
- 不支持语法 new Symbol();通过`Symbol([description])`创建symbol值。**围绕原始数据类型创建一个显式包装器对象从 ECMAScript 6 开始不再被支持。**（现有的包装器对象如new Boolean,new String,new Number因为历史遗留原因仍可被创建）

```js
var sym1 = Symbol('foo');
var sym2 = Symbol('foo');
sym1 == sym2 //false
sym2.toString();//"Symbol('foo')"
```

## Symbols 与 for...in

Symbols在for...in迭代中不可枚举。Object.getOwnPropertyNames()不会返回symbol对象的属性，但是可以通过Object.getOwnPropertySymbols()得到他们。

```js
 var obj = {
        a:'a',
        'b':'b',
   };
   obj[Symbol('c')] = 'c'
   for (var key in obj){
        console.log(key);//a b
    }
console.log(Object.getOwnPropertySymbols(obj));//[Symbol(c)]
```

## Symbols 与JSON.stringify()

当使用 JSON.strIngify() 时以 symbol 值作为键的属性会被完全忽略：

```js
JSON.stringify({[Symbol("foo")]: "foo"});                 
// '{}'
```

