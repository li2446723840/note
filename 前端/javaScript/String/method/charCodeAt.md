charCodeAt()   ---  创建副本 返回字符串中指定位置字符的 Unicode 编码

```js
const str = "Don't contradict what others like"

const fn = (param) => {
    console.log(str.charCodeAt(param));
}

fn(-1);//NaN
fn(0);//68
fn(1);//111
fn("字符串");//68
fn(null);//68
fn(undefined);//68
fn(true);//111
fn(false);//68
fn([1,2,3]);//68
fn({age: 12});//68
fn(()=>{console.log(1111);});//68


```

总结：charCodeAt()方法传递的参数为自然数。当参数为true时默认转换成1，为false时默认转换为0。其他类型（Object、Array、Function、undefined、null、String）会默认转换为0。