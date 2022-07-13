### [标签](https://www.runoob.com/tags/ref-byfunc.html)
常用标签：

```html
<html></html>
<body></body>
<style></style>
<link></link>
<script></script>
<div></div>
<p></p>
<span></span>
<img/>
<i></i>
<ul></ul>
<li></li>
<canvas></canvas>
<a></a>
<h1></h1>
<h2></h2>
<h3></h3>
<h4></h4>
<h5></h5>
<h6></h6>
// 表格相关元素
<table></table>
<thead></thead>
<tbody></tbody>
<th></th>
<tr></tr>
<td></td>
// 表单相关元素
<form></form>
<select></select>
<option></option>
<label></label>
<input/>
<textarea></textarea>
<button></button>
```

#### 标签分类

1、单标签：
例：`<img/>`
2、双标签：
例：`<div></div>`

注：单标签可以兼容双标签的写法，例：`<img></img>`。

#### 行内元素

1、自左向右横向排列、宽度由内容自动撑开。

2、行内元素不可以嵌套块元素。

3、设置宽高无效、设置margin左右无效、设置padding左右无效。

例：a、span、i、s 等。

#### 块元素

1、自上向下竖向排列，独占一行宽度默认100%。

2、元素嵌套没有限制。

例：div、p、h1-h6、ul、li、table 等。

#### 行内块元素

1、自左向右横向排列、宽度由内容自动撑开。

2、元素嵌套没有限制。

例：input、textarea、img 等。

<font color="blue">注：使用display属性可以转换为其他元素类型</font>

### [属性](https://www.runoob.com/tags/ref-standardattributes.html)

例：`<div 属性="属性值" class="classname" style="stylevalue" id="idname"></div>`

class、style、id是常用通用属性。有些标签有专有属性(例：a标签的href、img标签的src属性)

### [事件](https://www.runoob.com/tags/ref-eventattributes.html)

例：`<button onclic"事件触发执行的方法">复制文本</button>`

常用事件有onclick、onchange、oninput、onfocus、onblur、onscroll