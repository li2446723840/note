1、let str = "[{'2019-02-03':1},{'2019-01-01':34},{'2019-01-01':10},{'2019-02-03':2}]";
现在需要对于日期相同的项做合并，例如日期都是2019-01-01,则把后面的数字34和10累加。最后按照日期排序，生成新的字符串。即最终得到的是如下结果
var s_new="[{2019-01-01': 44}, {2019-02-03':3}"

答：

```js
let str = "[{'2019-02-03':1},{'2019-01-01':34},{'2019-01-01':10},{'2019-02-03':2}]";
let arr = [];
let obj = {};
let newObj = {};
let brr = [];
let newArr = [];
for (let i in str) {
    str = str.replace("'", "\"");
}
// console.log(str);
arr = JSON.parse(str);
// console.log(arr);
arr.forEach((item, index) => {
    if (Object.keys(obj).includes(Object.keys(item)[0])) {
        obj[Object.keys(item)[0]] = obj[Object.keys(item)[0]] + Object.values(item)[0];
    } else {
        obj[Object.keys(item)[0]] = Object.values(item)[0];
    }
})
// console.log(obj);
brr = Object.keys(obj)
//选择排序
for (var i = 0; i < brr.length - 1; i++) {
    for (var j = i + 1; j < brr.length; j++) {
        if (parseInt(brr[i].replace("-", "").replace("-", "")) > parseInt(brr[j].replace("-", "").replace("-", ""))) {
            tmp = brr[i];
            brr[i] = brr[j];
            brr[j] = tmp;
        }
    }
}
// console.log(brr);
brr.forEach(ele=>{
    newObj[ele] = obj[ele];
})
// console.log(newObj);
for (let attr in newObj) {
    let c = {};
    c[attr] = obj[attr];
    newArr.push(c)
}
console.log(newArr);
let s_new = JSON.stringify(newArr);
console.log(s_new);
```

2、有一个对象dog，dog具有属性eat，该eat属性继承于某个原型对象。现想要找到此原型对象，为此类需求写出一个通用的方法

```
function findProto (some_object, prop_name){
// 代码
}
```


