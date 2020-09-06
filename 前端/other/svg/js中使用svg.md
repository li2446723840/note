```js
window.onload = function(){
	var svgNS = "http://www.w3.org/2000/svg";//命名空间
	var oSvg = doucument.createElementNS(svgNS, "svg");//使用document.cretaeElementNS创建标签，该方法接收两个参数，参数一：命名空间。参数二：标签名
	var oParent = document.getElementById("div");//获取父元素
	oSvg.setAttribute("xmlns",svgNS);//给标签添加属性
	oSvg.setAttribute("width","100%");//给标签添加属性
	oSvg.setAttribute("height","100%");//给标签添加属性
	oParent.appendChild(oSvg);//给父元素添加svg标签
}
```

#### 封装创建标签的方法

```js
function createTag(tag, objAttr) {
    var oTag = document.createElementNS(svgNS, tag);
    for(var attr in objAttr){
        oTag.setAttribute(attr, objAttr[attr]);
    }
    return oTag;
}
```

应用：

```js
window.onload = function () {
    var svgNS = "http://www.w3.org/2000/svg";
    var oParent = document.getElementById("div");
    function createTag(tag, objAttr) {
        var oTag = document.createElementNS(svgNS, tag);
        for(var attr in objAttr){
            oTag.setAttribute(attr, objAttr[attr]);
        }
        return oTag;
    }
    var oSvg = createTag("svg", {xmlns:svgNS,width:"100%",height:"100%"});
    var oG = createTag("g", {style:"cursor:pointer"});
    var oLine = createTag("line", {x1:50,y1:50,x2:100,y2:100,stroke:"#ccc","stroke-width":5})
}
```

