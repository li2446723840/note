1、下载pubsub-js依赖

```js
npm i pubsub-js -S
```

2、使用

在要使用的组件引入：import PubSub from ‘pubsub-js’
**在父组件的componentWillMount钩子函数中订阅消息，要注意this**

```jsx
import React,{Component} from 'react'
import Bar from './components/Bar'
import PubSub from 'pubsub-js'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      msg:''
    }
  }
  componentWillMount(){
    // 订阅消息
    PubSub.subscribe('msg',(msg,data) => {
      this.setState({
        msg:data
      })
    })
  }
  render(){
    let {msg} = this.state
    return (
      <div>
        <Bar/>
        <p style={{color:'red'}}>我是订阅的结果：{msg}</p>
      </div>
    )
  }
}

```

**在子组件的自定义方法中发布消息：**

```jsx
import React,{Component} from 'react'
import PubSub from 'pubsub-js'

export default class Bar extends Component {
  constructor(){
    super()
  }
  sendMsg = () => {
    // 发布消息
    PubSub.publish('msg',`我是发布的随机数：${parseInt(Math.random()*1000)}`)
  }
  render(){
    return(
      <div>
        <button onClick={this.sendMsg}>发布消息</button>
      </div>
    )
  }
}

```

