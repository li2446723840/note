局部过滤器：

```vue
<body>
    <div id="myApp">
        {{num | filterNum(2)}}<!--num使用filterNum过滤器-->
    </div>
</body>
<script type="text/javascript">
    new Vue({
        el: "#myApp",//挂载
        data: {//数据状态
            num:100
        },
        methods:{},//方法
        filters: {//过滤器
            filterNum(x,y){//x为过滤的参数，y为传递的参数
                return "$" + (x+1).toFixed(y);
            }
        }
    })
</script>
```

全局过滤器：

```vue
<body>
    <div id="myApp">
        {{num | filterNum}}<!--num使用filterNum过滤器-->
        {{str | filterStr}}
    </div>
</body>
<script type="text/javascript">
    Vue.filter("filterNum",function(x,y){
        return "$" + (x+1).toFixed(y);
    })
    Vue.filter("filterStr",function(x,y){
        return "李四";
    })
    new Vue({
        el: "#myApp",//挂载
        data: {//数据状态
            num:100,
            str:"张三"
        },
        methods:{},//方法
        filters: {//过滤器
            
        }
    })
</script>
```

外部引入过滤器：

```vue
<body>
    <div id="myApp">
        {{num | filterNum}}<!--num使用filterNum过滤器-->
    </div>
</body>
<script type="text/javascript">
    const filters = {
        filterNum(x,y){//x为过滤的参数，y为传递的参数
			return "$" + (x+1).toFixed(y);
		}
    }
    new Vue({
        el: "#myApp",//挂载
        data: {//数据状态
            num:100,
            str:"张三"
        },
        methods:{},//方法
        filters
    })
</script>
```

引入外部过滤器：

```vue
<body>
    <div id="myApp">
        {{num | filterNum}}<!--num使用filterNum过滤器-->
    </div>
</body>
<script type="text/javascript">
    const filterNum = function(x,y){//x为过滤的参数，y为传递的参数
		return "$" + (x+1).toFixed(y);
	}
    const filters = {
        filterNum,
    }
    new Vue({
        el: "#myApp",//挂载
        data: {//数据状态
            num:100,
            str:"张三"
        },
        methods:{},//方法
        filters
    })
</script>
```

