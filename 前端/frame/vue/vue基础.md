```vue
<body>
    <div id="myApp">
        
    </div>
</body>
<script type="text/javascript">
    new Vue({
        el: "#myApp",//挂载
        data: {},//数据状态
        methods:{},//方法
        filters:{},//过滤器
        computed:{},//计算属性
        watch:{},//侦听
        template: "",//模板，将el指定的元素覆盖
        components:{},//组件(豆腐块)
        directives:{},//指令，用来自定义指令
    })
</script>
```

###### 计算属性和侦听的区别：
​	侦听：当你侦听的数据发生变化时，执行相对应的操作
​	计算属性：偏向于结果。可以是一个，多个数据计算出来的一个结果。
​    它是一个函数。使用时把该函数作为属性来使用。

##### 计算属性(computed)：

只有当影响结果的数据发生变化时才会执行。

```vue
<body>
    <div id="myApp">
        <input type="text" v-model="str"/>
        <!--使用methods-->
        <p>{{reverseStrMethod()}}</p>
        <p>{{reverseStrMethod()}}</p>
        <p>{{reverseStrMethod()}}</p>
        <!--使用computed-->
        <p>{{reverseStrComputed}}</p>
        <p>{{reverseStrComputed}}</p>
        <p>{{reverseStrComputed}}</p>
    </div>
</body>
<script src="../lib/vue.js"></script>
<script type="text/javascript">
    new Vue({
        el: "#myApp",
        data: {
            str:"一二三四五"
        },
        methods:{
           reverseStrMethod(){
               console.log(11111111);//改变输入框中的内容时，只会执行多遍
               return v.split("").reverse().join("");
           } 
        },
		computed:{
            reverseStrCom(){
                console.log(2222222);//改变输入框中的内容时，只会执行一遍，性能更优
                return this.str.split("").reverse().join("");
            }
        }        
    })
</script>
```



##### 侦听(watch)、深度侦听：

用于监视你指定的数据是否发生变化，当数据发生变化时会执行相对应的操作。

```vue
<body>
    <div id="myApp">
        <input type="text" v-model="num"/>
        <p>{{num2=num+1}}</p>
        <p>{{num2}}</p>
    </div>
</body>
<script src="../lib/vue.js"></script>
<script type="text/javascript">
    new Vue({
        el: "#myApp",
        data: {
            num:1,
            num2:2,
            obj:{
                name:"张三"
            }
        },
        methods:{},
		computed:{},
        watch:{
            //当数据num发生变化时，会执行该函数
            num(newValue,oldValue){//newValue：修改后的值。oldValue：修改前的值
              	console.log(newValue,oldValue);
                this.num2 = newValue + 1;
            },
            obj:{
                //必须叫handler
                handler(newValue,oldValue){//句柄(接下来你要干什么事)
                  	console.log(newValue===oldValue);//true，说明引用地址是一样的  
                },
                deep:true,//启动深度侦听
            }
        }
    })
</script>
```

##### 外部的侦听：

```vue
<body>
	<div id="myApp">
    	<input type="text" v-model="num">
    	<input type="text" v-model="user.age">
	</div>
</body>
<script>
    const vm = new Vue({
        el:"#myApp",
        data:{
            num:1,
            user:{
                age:3
            }
        }
    })
    // 第一个参数是你要侦听的数据名字，
    // 第二个参数是一个函数（当数据发生变化时会执行）。
    // 第三个参数是一个对象，用于决定是否深度侦听
    vm.$watch("num",function (newValue,oldValue){
        console.log(newValue,oldValue);
    })
    vm.$watch("user",function (newValue,oldValue) {
        console.log(newValue.age,oldValue.age);
    },{
        deep:true
    })
</script>
```

##### 模板(template)：

1、直接定义
        // 将el所指定的元素进行了覆盖。
        // 元素，有且只能有一个根元素。
        // 直接定义模板建议使用反引号

```vue
 new Vue({
    template:`
    	<div></div>
    `
})
```

2、通过script标签。

```vue
<body>
    <div id="myApp">
        
    </div>
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

3、通过Vue当中的内置组件template来定义模板。

```vue
<body>
    <div id="myApp">
        
    </div>
</body>
<template id="one">
	<div>
        我是通过tempalte定义的模板
    </div>
</template>
<script>
    new Vue({
        el:"#myApp",
        data:{
        },
        template:"#one"
    })
</script>
```

##### components(组件)：

1、组件数据流是单向数据流：父子组件之间的数据不能够直接共享。
 2、组件当中的data是一个函数，该函数要有返回值，返回值是一个对象。

```vue
<body>
    <div id="myApp">
        <one></one><!--使用one组件-->
    </div>
</body>
<script>
    new Vue({
        el:"#myApp",
        data:{
        },
        components:{
            // 属性名就是你组件的名字
            // 组件是不可以使用父级的data数据的。
            //每一个组件都是一个vue实例，故有data、methods、filters等，但是写法有些许区别
            one: {
                // data:必须是一个函数，必须要有返回值，返回值的类别必须要是一个对象。返回的对象就是该组件的数据状态。
                data(){
                    return {
                        str:"我是在ONE->STR"
                    }
                },
                template:`
					<div>这个组件叫one</div>
				`
            }
        }
    })
</script>
```

###### 组件的命名：命名时可以有大写，但是使用时不能出现大写，大写字母用-连接改成小写

```vue
<body>
    <div id="myApp">
        <ban-zhang></ban-zhang>
    	<z-h-u-o-z-i></z-h-u-o-z-i>
    </div>
</body>
<script>
    new Vue({
        el:"#myApp",
        data:{
        },
        components:{
            banZhang:{
                template:`
                <div>我的老班长，你现在过的怎么样？孩子多大了</div>
                `
            },
            ZHUOZI:{
                template:`<div>我是一个桌子</div>`
            }
        }
    })
</script>
```

###### 组件的嵌套：

```vue
<body>
<div id="myApp">
    <one></one>
</div>
</body>
<script>
    new Vue({
        el:"#myApp",
        data:{
        },
        components:{
            one:{
                components:{
                    two:{
                        template:`<div>two</div>`
                    }
                },
                //one组件里面嵌套two组件
                template:`
                <div>one<two></two></div>
                `
            }
        }
    })
</script>
```

###### 组件向下传值：

```vue
<body>
<div id="myApp">
    <input type="button" value="加1" @click="num++">
    <one username="laoli" :abc="num" :change-num = "changeNum"></one>
</div>
</body>
<script>
    new Vue({
        el:"#myApp",
        data:{
            num:1
        },
        methods:{
            changeNum(n=1){
                // console.log(1111111111)
                this.num+=n;
            }
        },
        components:{
            one:{
                data(){
                    return {
                        // username:"xixi"
                    }
                },
                // 接收属性名字为username
                // 子组件无法直接修改父组件传过来的值。子组件定义的数据状态的名字也不允许与接收的属性值相同。
                props:["username","abc","changeNum"],
                template:`
                <div>one{{username}}{{abc}}
                    <input type="button" value="子加2" @click="changeNum(2)">
                </div>
                `
            }
        }
    })
</script>
```

###### 动态组件：

```vue
<div id="myApp">
    <input type="button"  value="换肤" @click="index++;if(index>2){index=0;}">
    <!--is属性指定组件的名字，来决定着其采用的是哪一个组件。-->
    <components is="one"></components>
    <components :is="comName"></components>
    <components :is="comArr[index]"></components>
</div>
</body>
<script>
    new Vue({
        el:"#myApp",
        data:{
            comName:"two",
            comArr:["one","two","three"],
            index:2
        },
        components:{
            one:{
                template:`
                <div :style="'background:yellow'">one</div>
               `
            },
            two:{
                template:`
                <div style="background:red">two</div>
               `
            },
            three:{
                template:`
                <div :style="{background:'blue'}">three</div>
               `
            }
        }
    })
</script>
```

