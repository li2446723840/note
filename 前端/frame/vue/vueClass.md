vue中类名的几种写法：

```vue
<style>
    .bg{
        background: red;
    }
    .co{
        color: yellow;
    }
</style>

<body>
    <div id="myApp">
        <p class="bg">类名</p>
        <p class="bg co">类名</p>
        <p :class="'bg co'">类名</p>
        <p :class="one">类名</p>
        <p :class="['bg','co']">类名</p>
        <p :class="{'bg co':true}">类名</p>
        <p :class="{'bg co':false}">类名</p>
    </div>
</body>
<script type="text/javascript">
    new Vue({
        el: "#myApp",
        data: {
           one:"bg co", 
        },
    })
</script>
```

