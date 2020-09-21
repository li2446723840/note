```js
/*
url:(必选)请求路径
config:(可选)请求配置，该配置为对象，如下所示
	{
	method:'GET',
	cache:'reload',//重新加载，不受缓存影响
	header:{//POST请求需携带请求头部信息
		'Content-Type':'application/x-www-form-urlencoded'
	},
	body:''//POST请求携带的参数，多个参数需用&拼接
	}
*/
fetch(url,config).then((res)=>{
    res.json(()=>{

    }).then((res)=>{
		console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
})
```

