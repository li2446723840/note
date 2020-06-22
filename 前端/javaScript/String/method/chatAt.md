charAt()  --- 创建副本 返回字符串中指定位置的字符

```js
let str = "Don't contradict what others like";
const fn = (param) => {
    console.log(str.charAt(param))
}
fn(0);//D
fn(1);//o
fn(1000);//空
fn("字符串");//D
fn(null);//D
fn(undefined);//D
fn(-1);//空
fn(-100);//空
fn({age: 14});//D
fn([1,2,3,4]);//D
fn(true);//o
fn(false);//D
```

自然数的概念：自然数是指表示物体个数的数，即由0开始，0，1，2，[3](https://baike.baidu.com/item/3/5833)，4，……一个接一个，组成一个无穷的集体，即指非负整数。

总结：charAt()方法传递的参数为自然数。当参数为true时默认转换成1，为false时默认转换为0。其他类型（Object、Array、Function、undefined、null、String）会默认转换为0。