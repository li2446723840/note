```vue
<body>
<div id="myApp">
    <One :num="num" :a="a" :b="b"></One>
</div>
</body>
<script>
    new Vue({
        el:"#myApp",
        data:{
            num:1,
            a:"a;sldkfja;lsdkfj",
            b:"haha"
        },
        components:{
            One:{
                // props:["num"],
                // 指定默认值，指定数据的类型
                props:{
                    num:{
                        type:Number,//指定数据类型
                    },
                    a:{},
                    b:{
                        default:"xixi",//指定默认值
                    }
                },
                template:`
                <div>{{num}}{{a}}{{b}}</div>
                `
            }
        }
    })
</script>
```

