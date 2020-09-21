```html
<script type="text/javascript">
    
</script>
<script type="module">
    import xx from "../xx"
</script>
```

```vue
<body>
    <div id="myApp">
        
    </div>
</body>
</body>
<script type="x/template" id="one">
    <div>
    	我是通过script标签定义的模板
    </div>
</script>
<script>
	new Vue({
        el:"#myApp",
        data:{
        },
        template:"#one"
    })
</script>

```

type属性值：

| type属性值      | 描述        |
| --------------- | ----------- |
| text/javascript | js代码      |
| module          | 使用es6导入 |
| x/template      | vue模板     |

