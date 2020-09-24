```js
async function fn(){
    console.log("1111");
    await new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, 3000)
    }).then(function () {
        console.log("aaa");
    })
    console.log("2222");
}
fn();//1111   aaa    2222
```

