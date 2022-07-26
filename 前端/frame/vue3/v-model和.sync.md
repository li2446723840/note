1、自定义组件使用`v-model`如果想要改变事件名或者属性名应该怎么做？

```vue
// 子组件
<template>
	<input type="text" :value="animals" @input="ipt">
</template>
<script>
    export default {
        props: {
            animals: {
                type: String
            }
        },
        model: { // 自定义接收的属性名和注册的事件名 默认是value和input
            event: "abc", // 触发事件
            prop: "animals" // 绑定属性
        },
        data() {
        	return {}
    	},
        methods: {
            ipt(e){
                // this.$emit('input',e.target.value)
                this.$emit('abc',e.target.value)
            }
        }
    }
</script>
```



