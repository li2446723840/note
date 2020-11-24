vue       渐进式的javascript框架

vue的特点 ：m v vm(m:数据 v:视图 vm:实例)

 	双向绑定  虚拟dom

1、多关注数据，少关注视图

2、javascript与vue不是完全互通的

3、vue是依靠数据进行驱动的

##### 挂载

| 属性 | 描述       |
| ---- | ---------- |
| el   | 挂载的元素 |
| data | 数据状态   |



```vue
<div id="myApp">
    {{num}}
</div>
<div class="myApp">
    {{num}}
</div>
<li>第一个li  {{num}}</li>
<li>第二个li  {{num}}</li>
<script>
	new Vue({
    	el: "#myApp",//指定要挂载的元素，不允许挂载body。    {el:"body"}是错误的
    	// el: ".myApp",//指定要挂载的元素
    	// el: document.querySelector(".myApp"),//指定要挂载的元素
    	// el: "li",//只会挂载到第一个符合条件的元素上面
    	data: {//数据状态
       		num: 1
    	}
	})
</script>
```

##### 指令

vue指令：对html元素属性的扩展，以v-开头

| 属性                          | 描述                                                         |
| ----------------------------- | ------------------------------------------------------------ |
| v-model                       | 表单元素绑定数据                                             |
| v-if                          | 值是一个布尔值。当为true时<font color="blue">渲染</font>，否则不渲染 |
| v-else-if                     | 值是一个布尔值。当为true时渲染，否则不渲染。要与v-if结合使用 |
| v-else                        | 当v-if、v-else-if不成立时使用                                |
| v-show                        | 值是一个布尔值，当为true时<font color="blue">显示</font>，否则不显示 |
| v-for                         | 可以遍历数组、对象、字符串、数字                             |
| v-bind                        | 将元素属性与数据状态进行绑定，简写为冒号(<font color="green">:</font>) |
| v-html                        | 设置元素中的内容，可以识别html标签                           |
| v-text                        | 设置元素中的内容，无法识别html标签                           |
| <font color="red">v-on</font> | 绑定事件，可以简写为@                                        |
| v-pre                         | 如果元素包含该指令，那么该元素内的数据不会进行编译处理       |
| v-once                        | 数据值是在第一次加载时渲染，后面不会做出相应                 |
| v-cloak                       |                                                              |

###### v-model修饰符：

​	number：将元素内容转换为number类型

​	trim：去除左右两侧空格

​	lazy：当失去交代呢是，才会对数据进行响应

```vue
<div id="myApp">
    <input type="text" v-model.lazy="str"/>
</div>
<script>
new Vue({
	el:"#myApp",
    data:{
        str: "sas"
    }
})
</script>
```

###### v-if、v-else-if、v-else、v-show

```vue
<div id="myApp">
    <div v-if="sex===1">男</div>
    <div v-else-if="sex===2">女</div>
    <div v-else>未知</div>
    <div v-show="sex===2">v-show</div>
</div>
<script>
new Vue({
	el:"#myApp",
    data:{
        sex: 1
    }
})
</script>
```

<font color=red>注意，`v-show` 不支持 `<template>` 元素，也不支持 `v-else`。</font>

###### v-for：

可以遍历数组、对象、字符串、数字。

```vue
<div id="myApp">
    <div v-for="item in arr">
        {{item}}
    </div>
    <div v-for="(item,index) in arr">
        {{item}}：{{index}}
    </div>
    <div v-for="(value,key) in obj">
		{{key}}：{{value}}
	</div>
</div>
<script>
new Vue({
	el:"#myApp",
    data:{
        arr: [1,2,3,4],
        obj:{
 			name: "张三",
 			sex: "男",
		},
    }
})
</script>
```

遍历数字：遍历数字时是从1开始的

```vue
<div id="myApp">
    <div v-for="n in num">
		{{n}}
	</div>
</div>
<script>
new Vue({
	el:"#myApp",
    data:{
        num: 5,
    }
})
</script>
```

###### v-bind：可以将元素属性与数据状态进行绑定。简写为冒号<font color="red">(:)</font>

```vue
<div id="myApp">
    <img v-bind:src="imgSrc">
    <img :src="imgSrc">
</div>
<script>
new Vue({
	el:"#myApp",
    data:{
        imgSrc:"../../../../image/image/flower.jpg"
    }
})
</script>
```

###### v-html、v-text

```vue
<body>
    <div id="myApp">
        <input type="text" v-model="src"/>
        <div v-html="str"></div>
        <div v-text="str"></div>
    </div>
</body>
<script type="text/javascript">
    new Vue({
        el: "#myApp",
        data: {
            str:""
        }
    })
</script>
```

###### v-pre

```vue
<body>
    <div id="myApp">
        <div v-pre>{{str}}</div>
    </div>

</body>
<script type="text/javascript">
    new Vue({
        el: "#myApp",
        data: {
            src:"张三"
        }
    })
</script>
```

###### v-once

```vue
<body>
    <div id="myApp">
        <input type="text" v-model="src"/>
        <div v-once>{{str}}</div>
    </div>

</body>
<script type="text/javascript">
    new Vue({
        el: "#myApp",
        data: {
            str:"张三"
        }
    })
</script>
```

###### <font color="red">v-on</font>：绑定事件

| 修饰符                 |                                                    |
| ---------------------- | -------------------------------------------------- |
| .stop                  | 调用 event.stopPropagation()。阻止事件冒泡         |
| .prevent               | 调用 event.preventDefault()。阻止默认事件          |
| .capture               | 添加事件侦听器时使用 capture 模式。                |
| .self                  | 只当事件是从侦听器绑定的元素本身触发时才触发回调。 |
| .{keyCode \| keyAlias} | 只当事件是从特定键触发时才触发回调。               |
| .native                | 监听组件根元素的原生事件。                         |
| .once                  | 只触发一次回调。                                   |
| .left                  | (2.2.0) 只当点击鼠标左键时触发。                   |
| .right                 | (2.2.0) 只当点击鼠标右键时触发。                   |
| .middle                | (2.2.0) 只当点击鼠标中键时触发。                   |
| .passive               | (2.3.0) 以 { passive: true } 模式添加侦听器        |



v-on中可以直接写js代码，但不是所有的js代码都可以，比如alert()会被当做一个方法来解析。方法后面可以加括号也可以不加括号。可以简写为@

```vue
<body>
    <div id="myApp">
        <h3>{{num}}</h3>
        <input type="button" :value="num" v-on:click="num++"/><!-- 直接写js代码-->
        <input type="button" value="加二" v-on:click="addTwo"/><!-- 可以不加括号-->
        <input type="button" value="加二" v-on:click="addTwo()"/><!-- 可以加括号-->
        <input type="button" value="简写" @click="addTwo()"/><!--简写为@-->
        <input type="button" value="弹出" v-on:click="alert('无法弹出')"/><!-- 报错，不是支持所有的js代码-->
    </div>

</body>
<script type="text/javascript">
    new Vue({
        el: "#myApp",
        data: {
            num:1
        },
        methods:{
            addTwo(){
                this.num+=2
            }
        }
    })
</script>
```

使用修饰符阻止事件冒泡、阻止默认事件

```vue
<body>
    <div id="myApp">
        <div @contextmenu="outer" style="background: red;width: 300px;height: 300px;">
            <div @contextmenu.prevent.stop="middle" style="background: green;width: 150px;height: 150px;">
                <button @contextmenu="inner">按钮</button>
            </div>
        </div>
    </div>
</body>
<script type="text/javascript">
    new Vue({
        el: "#myApp",
        data: {
            
        },
        methods:{
            outer(){
                console.log("outer");
            },
            middle(){
                console.log("middle");
            },
            inner(){
                console.log("inner");
            }
        }
    })
    
</script>
```

使用$event事件对象阻止默认事件、阻止冒泡：方法中使用事件对象，当需要传递参数的时候，需要使用$event

```vue
<body>
    <div id="myApp">
        <div @click="outer" style="background: red;width: 300px;height: 300px;">
            <div @click="middle" style="background: green;width: 150px;height: 150px;">
                <button @click="inner($event,12)">按钮</button>
            </div>
        </div>
    </div>
<!--  -->
</body>
<script type="text/javascript">
    new Vue({
        el: "#myApp",
        data: {},
        methods:{
            outer(e){
                e.cancelBubble = true
                console.log("outer");
            },
            middle(e){
                e.cancelBubble = true
                console.log("middle");
            },
            inner(e){
                console.log(e);
                e.cancelBubble = true
                console.log("inner");
            }
        }
    })
</script>
```

