1、有一个对象dog，dog具有属性eat，该eat属性继承于某个原型对象。现想要找到此原型对象，为此类需求写出一个通用的方法

```
function findProto (some_object, prop_name){
// 代码
}
```

答：

```js
// // 有一个对象dog，dog具有属性eat，该eat属性继承于某个原型对象。现想要找到此原型对象，为此类需求写出一个通用的方法
function Dog() {

}
Object.prototype.eat = "能吃";
// Dog.prototype.eat = "不能吃";
let a = new Dog();


//只有hasOwnProperty可以给出正确和期望的结果，尤其在遍历一个对象时
//除了hasOwnProperty外，没有其他方法可以排除原型链上的属性（不是定义在对象自身上的属性）
const recursion = (obj, attr) => {
	let b = obj.__proto__;
	if(!obj){
		console.log("未查到有该属性");
	}else if (b.hasOwnProperty(attr)) {
		console.dir(obj.__proto__.constructor);
	} else {
		recursion(obj.__proto__, attr);
	}
}
recursion(a, "eat");
```

![](../../../../image/原型链.png)