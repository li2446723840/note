import React,{Component} from 'react'
import PubsubChild from '../components/pubsub/PubsubChild'
import PubSub from 'pubsub-js'

export default class Pubsub extends Component {
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
        <PubsubChild/>
        <p style={{color:'red'}}>我是订阅的结果：{msg}</p>
      </div>
    )
  }
}
