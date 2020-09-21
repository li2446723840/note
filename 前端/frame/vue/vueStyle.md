在vue中样式的几种写法：

```vue
<body>
    <div id="myApp">
        <p style="background: red;color:green;">样式</p>
        <p :style="'background: red;color:green;'">样式</p>
        <p :style="ps">样式</p>
        <p :style="one">样式</p>
        <p :style="{background:'greenyellow',color:'orange'}">样式</p>
        <p :style="{...bg,...co}">样式</p>
        <p :style="[bg,co]">样式</p>
    </div>
</body>
<script type="text/javascript">
    new Vue({
        el: "#myApp",
        data: {
            ps: "background:red;color:green",
            one:{
                background: "gold",
                color:"blue"
            },
            bg:{
                background:"yellow"
            },
            co:{
                color:"blue"
            }
        },
    })
</script>
```

