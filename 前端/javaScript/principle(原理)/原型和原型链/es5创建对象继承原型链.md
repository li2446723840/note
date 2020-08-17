#### 1、最简单的类

```js
function Person(){
	this.name = "张三";
	this.age = 20;
}
let p = new Person();
alert(p.name);
```
#### 2、构造函数和原型链里面的方法
```js
function Person(){
	this.name = "张三";
	this.age = 20;
	this.run = function(){
		alert(this.name + "在运动");
	}
}
//原型链上面的属性会被多个实例共享，但是构造函数不会
Person.prototype.sex = "男";
Person.prototype.work = function(){
	alert(this.name + "在工作");
}
let p = new Person();
p.run();
p.work();
```
#### 3、类里面的静态方法
对象冒充可以继承构造函数里面的属性和方法，但是没法继承原型链上的属性和方法。
```js
function Person(){
	this.name = "张三";
	this.age = 20;
	this.run = function(){//实例方法
		alert(this.name + "在运动");
	}
}
Person.getInfo = function(){//静态方法
	alert("我是静态方法");
}
//调用静态方法
Person.getInfo();
```
#### 4、 es5里面的继承（对象冒充实现继承）
```js
function Person(){
	this.name = "张三";
	this.age = 20;
	this.run = function(){//实例方法
		alert(this.name + "在运动");
	}
}
//原型链上面的属性会被多个实例共享，但是构造函数不会
Person.prototype.sex = "男";
Person.prototype.work = function(){
	alert(this.name + "在工作");
}
//web类继承Person类（使用原型链 + 对象冒充的组合继承模式）
function Web(){
	Person.call(this);//对象冒充实现继承
}
let w = new Web();
w.run();//对象冒充可以继承构造函数里面的属性和方法
w.work();//对象冒充可以继承构造函数里面的属性和方法，但是没法继承原型链上的属性和方法。
```
#### 5、es5里面的继承 （原型链实现继承）
优点：原型链实现继承：可以继承构造函数里面的属性和方法，也可以继承原型链上面的属性和方法。
```js
function Person(){
	this.name = "张三";
	this.age = 20;
	this.run = function(){//实例方法
		alert(this.name + "在运动");
	}
}
//原型链上面的属性会被多个实例共享，但是构造函数不会
Person.prototype.sex = "男";
Person.prototype.work = function(){
	alert(this.name + "在工作");
}
//web类继承Person类（使用原型链 + 对象冒充的组合继承模式）
function Web(){
	
}
Web.prototype = new Person();//原型链实现继承
let w = new Web();
w.run();
w.work();
```
#### 6、原型链实现继承的缺点
实例化子例的时候没法给父类传参
```js
function Person(name, age){
	this.name = name;
	this.age = age;
	this.run = function(){//实例方法
		alert(this.name + "在运动");
	}
}
//原型链上面的属性会被多个实例共享，但是构造函数不会
Person.prototype.sex = "男";
Person.prototype.work = function(){
	alert(this.name + "在工作");
}
let p = new Person("张三",20);
p.run();
//web类继承Person类（使用原型链 + 对象冒充的组合继承模式）
function Web(name, age){
	
}
Web.prototype = new Person();//原型链实现继承
let w = new Web("李四",22);//实例化子例的时候没法给父类传参
w.run();

```
#### 7、原型链 + 对象冒充的组合继承模式
```js
function Person(name, age){
	this.name = name;
	this.age = age;
	this.run = function(){//实例方法
		alert(this.name + "在运动");
	}
}
//原型链上面的属性会被多个实例共享，但是构造函数不会
Person.prototype.sex = "男";
Person.prototype.work = function(){
	alert(this.name + "在工作");
}
let p = new Person("张三",20);
p.run();
//web类继承Person类（使用原型链 + 对象冒充的组合继承模式）
function Web(name, age){
	Person.call(this, name, age);//对象冒充继承，实例化子类可以给父类传参
}
Web.prototype = new Person();//原型链实现继承
let w = new Web("李四",22);//实例化子例的时候没法给父类传参
w.run();
w.work();
```
#### 8、 原型链 + 对象冒充的组合继承模式的另一种写法
```js
function Person(name, age){
	this.name = name;
	this.age = age;
	this.run = function(){//实例方法
		alert(this.name + "在运动");
	}
}
//原型链上面的属性会被多个实例共享，但是构造函数不会
Person.prototype.sex = "男";
Person.prototype.work = function(){
	alert(this.name + "在工作");
}
let p = new Person("张三",20);
p.run();
//web类继承Person类（使用原型链 + 对象冒充的组合继承模式）
function Web(name, age){
	Person.call(this, name, age);//对象冒充继承，可以继承构造函数里面的属性和方法，实例化子类可以给父类传参
}
Web.prototype = Person.prototype;//原型链 + 对象冒充的组合继承模式的另一种写法
let w = new Web("李四",22);//实例化子例的时候没法给父类传参
w.run();
w.work();
```