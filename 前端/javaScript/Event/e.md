获取当前鼠标在父元素中的位置坐标：

```js
function(e){
    var parent = document.getElementById("div");//父元素
    var x = e.clientX - parent.offsetLeft;
    var y = e.clientY - parent.offsetTop;
}
```

