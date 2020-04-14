```js
layer.full ;//最大化
//方法一：
layer.open({
 type: 1,
 maxmin: true,
 success: function(layero,index){
  //在回调方法中的第2个参数“index”表示的是当前弹窗的索引。
  //通过layer.full方法将窗口放大。
  layer.full(index);
 }
}); 
//方法二：
var win = layer.open({
 type: 1,
 maxmin: true
});  
layer.full(win);
```

