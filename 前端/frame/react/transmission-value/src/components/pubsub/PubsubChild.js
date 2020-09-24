import React,{Component} from 'react'
import PubSub from 'pubsub-js'

export default class PubsubChild extends Component {
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
