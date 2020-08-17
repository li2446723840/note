面对对象编程的三大特点：封装、继承、多态

javascript没有多态这个概念

类的概念：封装、继承、多态、抽象

typescript中的抽象类：它是提供其他继承类的基类，不能直接被实例化

用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
abstract抽象方法只能放在抽象类里面

####  ts中类的定义

```ts
class Person{
    public name:string; //公有属性  前面省略了public关键字
    constructor(name:string){//构造函数  实例化类的时候触发的方法
        this.name = n;
    }
    run():void{
        alert(this.name);
    }
}
let p = new Person("张三");
p.run();
```

```ts
class Person{
    name:string; //属性  前面省略了public关键字
    constructor(name:string){//构造函数  实例化类的时候触发的方法
        this.name = name;
    }
    getName():string{
        return this.name;
    }
    setName(naem:string):void{
        this.name = name;
    }
}
let p = new Person("张三");
alert(p.getName());
alert(p.seName("李四"));
```
#### ts中实现继承  extends 、super
如果子类和父类有同名的方法，优先调用子类的方法
```ts
class Person{
    name:string; //属性  前面省略了public关键字
    constructor(name:string){//构造函数  实例化类的时候触发的方法
        this.name = name;
    }
    run():string{
    	return `${this.name}在运动`;
    }
}
//let p = new Person("张三");
//alert(p.run());
class Web extends Person{
    constructor(name:string){//构造函数  实例化类的时候触发的方法
        super(name);
    }
    run(){
    	return `${this.name}在运动-子类`;
    }
    work(){
    	alert(`${this.name}在工作`)
    }
}
let w = new Web("李四");
alert(w.run());
w.work();
```
#### 类里面的修饰符
typescript里面定义属性的时候给我们提供了三种修饰符(public、protected、private)

属性如果不加修饰符 默认就是公有属性(public)

| 属性 | 类型 | 特性 |
| ---- | ---- | ---- |
| public    | 公有     | 在类里面、子类、类外面都可以访问             |
| protected | 保护类型 | 在类里面、子类里面可以访问，在类外面没法访问 |
| private   | 私有     | 在类里面可以访问，子类、类外面都没法访问     |
##### public(公有)   在类里面、子类、类外面都可以访问
```ts
class Person{
    public name:string; //公有属性  前面省略了public关键字
    constructor(name:string){//构造函数  实例化类的时候触发的方法
        this.name = name;
    }
    run():string{
    	return `${this.name}在运动`;//类里面访问
    }
}
let p = new Person("张三");
alert(p.run());
class Web extends Person{
    constructor(name:string){//构造函数  实例化类的时候触发的方法
        super(name);
    }
    work(){
    	alert(`${this.name}在工作`);//在子类里面访问
    }
}
let w = new Web("李四");
w.work();
```

类外部访问公有属性

```ts
class Person{
    public name:string; //公有属性  前面省略了public关键字
    constructor(name:string){//构造函数  实例化类的时候触发的方法
        this.name = name;
    }
    run():string{
    	return `${this.name}在运动`;
    }
}
let p = new Person("张三");
alert(p.name);//类外部访问
```
##### protected(保护类型)    在类里面、子类里面可以访问，在类外面没法访问
```ts
class Person{
    protected name:string; //保护类型 
    constructor(name:string){//构造函数  实例化类的时候触发的方法
        this.name = name;
    }
    run():string{
    	return `${this.name}在运动`;//类里面访问
    }
}
//let p = new Person("张三");
//alert(p.run());
class Web extends Person{
    constructor(name:string){//构造函数  实例化类的时候触发的方法
        super(name);
    }
    run(){
    	return `${this.name}在运动-子类`;
    }
    work(){
    	alert(`${this.name}在工作`)//子类里面访问
    }
}
let w = new Web("李四");
w.work();
alert(w.run());
```

类外部没法访问保护类型的属性

```ts
class Person{
    protected name:string; //保护类型 
    constructor(name:string){//构造函数  实例化类的时候触发的方法
        this.name = name;
    }
    run():string{
    	return `${this.name}在运动`;
    }
}
let p = new Person("张三");
alert(p.name));//类外部没法访问保护类型的属性
```

##### private(私有)   在类里面可以访问，子类、类外面都没法访问

```tsx
class Person{
    private name:string; //私有
    constructor(name:string){//构造函数  实例化类的时候触发的方法
        this.name = name;
    }
    run():string{
    	return `${this.name}在运动`;//类里面可以访问
    }
}
let p = new Person("张三");
alert(p.name));//类外部没法访问私有
class Web extends Person{
    constructor(name:string){
        super(name);
    }
    work(){
        console.log(`${this.name}在工作`);//不能在子类中访问私有
    }
}
```

### 多态
概念：父类定义一个方法不去实现，让继承它的子类去实现，每个子类有不同的表现
多态属于继承，是继承的一种表现

```ts
class Animal{
	public name:string;
	constructor(name:string){
		this.name = name;
	}
	eat(){//具体吃什么不知道，继承它的子类去实现，每一个子类的表现不一样
		console.log("吃的方法");
	}
}
class Dog extends Animal{
	constructor(name:string){
		super(name)
	}
    eat(){
        return this.name + "吃肉"
    }
}
class Cat extends Animal{
	constructor(name:string){
		super(name)
	}
    eat(){
        return this.name + "吃老鼠"
    }
}
```
### 抽象方法
抽象类和抽象方法用来定义标准，标准：Animal这个类要求它的子类必须包含eat方法。抽象方法只能出现在抽象类里面。
```ts
abstract class Animal{//抽象类，它是提供其他继承类的基类，不能直接被实例化
	abstract eat():any;//抽象方法
}
//let a = new Animal();//会报错，抽象类，它是提供其他继承类的基类，不能直接被实例化
```
```ts
abstract class Animal{//抽象类，它是提供其他继承类的基类，不能直接被实例化
	public name:string;
	constructor(name:string){
		this.name = name;
	}
	abstract eat():any;//抽象方法
    run(){
        console.log("实例方法可以不实现")
    }
}
class Dog extends Animal{
    constructor(name:string){
        super(name);
    }
    eat(){//抽象类的子类必须实现抽象类里面的抽象方法
        console.log(this.name + "粮食")；
    }
}
let d = new Dog("小狗");
d.eat();
```