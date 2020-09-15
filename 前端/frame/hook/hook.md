#### useState

useState管理数据

```jsx
function Example() {//------------------hook
    const [name, setName] = useState("张三");
    const [age, setAge] = useState(23);
    const [sex, setSex] = useState("男");
    return (
        <div>
            <p>姓名：{name}</p>
            <p>年龄：{age}</p>
            <p>性别：{sex}</p>
            <button onClick={()=>{
                setName("李四");
                setAge(40);
                setSex("女")
            }}>按钮</button>
        </div>
    )
}
```

useState不能存在于if语句中

```jsx
function Example() {//------------------hook
    if(true){//---------报错
        const [num, setNum] = useState(0);
    }
    return (
        <div>
            <p>点赞数：{num}</p>
            <button onClick={()=>{setNum(num+1)}}>点赞</button>
        </div>
    )
}
```

#### useEffect(异步)

useEffect实现生命周期

useEffect接收两个参数useEffect(参数一, 参数2)

| 参数             | 描述       |
| ---------------- | ---------- |
| 参数一           | 为一个函数 |
| 参数二(可选参数) | 为一个数组 |

参数一：相当于react生命周期函数里的componentDidMount和componentDidUpdate

```jsx
function Example(){
    const [ num, setNum ] = useState(0);
    useEffect(()=>{
        console.log("相当于componentDidMount和componentDidUpdate");
    })
    return (
        <div>
            <p>点赞数：{num}</p>
            <button onClick={()=>{setNum(num+1)}}>点赞</button>
        </div>
    )
}
```

```jsx
class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        }
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    render() {
        return (
            <div>
                <p>点赞数：{this.state.num}</p>
                <button onClick={() => { this.setState({ num: this.state.num + 1 }) }}>点赞</button>
            </div>
        )
    }
}
```

参数一有return时相当于react里的componentWillUnMount()，例：

```jsx
import React, { useState, Component, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Example(){
    const [ num, setNum ] = useState(0);
    useEffect(()=>{
        console.log(num);
        return ()=>{
            console.log("相当于componentWillUnMount");
        }
    })
    return (
        <div>
            <p>点赞数：{num}</p>
            <button onClick={()=>{setNum(num+1)}}>点赞</button>
            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list">列表</Link></li>
                </ul>
                <Route path="/" exact component={Index}/>
                <Route path="/list" exact component={List}/>
            </Router>
        </div>
    )
}
function Index(){
    useEffect(()=>{
        console.log("首页，加载");
        return ()=>{
            console.log("首页，销毁");
        }
    },[])
    return (
        <div>首页</div>
    )
}
function List(){
    useEffect(()=>{
        console.log("列表页，加载");
        return ()=>{
            console.log("列表页，销毁");
        }
    })
    return (
        <div>列表</div>
    )
}
export default Example;
```

参数二(可选)：为一个数组，当数组为空时，useEffect()方法不执行。当数组有值时，只有数组里的状态发生变化，useEffect()方法才会执行，例：

```jsx
import React, { useState, Component, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Example(){
    const [ num, setNum ] = useState(0);
    const [ personNum, setPersonNum ] = useState(0);
    useEffect(()=>{
        console.log(num, personNum);
    },[num])
    return (
        <div>
            <p>点赞数：{num}</p>
            <p>人数：{personNum}</p>
            <button onClick={()=>{setNum(num+1)}}>点赞</button>
            <button onClick={()=>{setPersonNum(personNum+1)}}>关注</button>
            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list">列表</Link></li>
                </ul>
                <Route path="/" exact component={Index}/>
                <Route path="/list" exact component={List}/>
            </Router>
        </div>
    )
}
function Index(){
    useEffect(()=>{
        console.log("首页，加载");
        return ()=>{
            console.log("首页，销毁");
        }
    },[])
    return (
        <div>首页</div>
    )
}
function List(){
    useEffect(()=>{
        console.log("列表页，加载");
        return ()=>{
            console.log("列表页，销毁");
        }
    })
    return (
        <div>列表</div>
    )
}
export default Example;
```

#### useContext

useContext处理父子组件传值

```jsx
import React, { createContext } from 'react';
import Child from './child';

//父组件
const NumContext = createContext();
function Example(){
    const [num,setNum] = useState(0);
    return(
        <div>
            <p>点赞数：{num}</p>
            <button onClick={()=>{setNum(num+1)}}>点赞</button>
            <NumContext.Provider value={num}>
                <Child/>
            </NumContext.Provider>
        </div>
    )
}

export default Example;
export { NumContext };
```

```jsx
import React, { useContext } from 'react';
import {NumContext} from './Example';

//子组件
function Child() {
    const num = useContext(NumContext)
    return (
        <div>子组件{num}</div>
    )
}
export default Child;
```

#### useReducer

```jsx
import {useReducer} from 'react';

function Example() {
    const [num, dispatch] = useReducer((state, action) => {
        switch (action) {
            case 'add':
                return state + 1
            case 'sub':
                return state - 1
            default:
                return state
        }
    }, 0)
    return (
        <div>
            <p>现在的数量：{num}</p>
            <button onClick={()=>{dispatch('add')}}>加</button>
            <button onClick={()=>{dispatch('sub')}}>减</button>
        </div>
    )
}
export default Example;
```

#### useReducer + useContext实现redux

example：

```jsx
import React from 'react';

function Example() {
    return (
        <div>
            <Color>
                <ShowArea />
                <Buttons />
            </Color>
        </div>
    )
}

export default Example;
```

color：

```jsx
import React, {createContext, useReducer} from 'react';

export const ColorContext = createContext({});
export const UPDATE_COLOR = "UPDATE_COLOR";

const reducer = (state,action)=>{
    switch(action.type){
        case UPDATE_COLOR:
            return action.color
        default:
            return state
    }
}

export const Color = props => {
    const [color,dispatch] = useReducer(reducer,"blue")
    return (
        <ColorContext.Provider value={{color,dispatch}}>
            {props.children}
        </ColorContext.Provider>
    )
}
```

ShowArea：

```jsx
import React,{useContext} from 'react';
import {ColorContext} from './color';

function ShowArea(){
    const {color} = useContext(ColorContext)
    return (
        <div style={{color:color}}>
            字体颜色
        </div>
    )
}

export default ShowArea;
```

Buttons：

```jsx
import React,{useContext} from 'react';
import { ColorContext,UPDATE_COLOR } from './color'

function Buttons(){
    const {dispatch} = useContext(ColorContext)
    return(
        <div>
            <button onClick={()=>{dispatch({type:UPDATE_COLOR,color:'red'})}}>红色</button>
            <button onClick={()=>{dispatch({type:UPDATE_COLOR,color:'green'})}}>黄色</button>
        </div>
    )
}

export default Buttons;
```

#### useMemo(解决资源重复利用)

useMemo用来缓存状态和属性，相当于react里面的shouldComponentUpdate生命周期

useEffect接收两个参数useEffect(参数一, 参数2)

| 参数   | 描述                                                   |
| ------ | ------------------------------------------------------ |
| 参数一 | 为一个函数                                             |
| 参数二 | 为一个数组，数组里的元素发生改变时才会执行参数一的函数 |

```jsx
import React,{useState,useMemo} from 'react';

function Example(){
    const [xiaoming,setXiaoming] = useState("小明");
    const [xiaohong,setXiaohong] = useState("小红");
    return (
        <div>
            <button onClick={()=>{setXiaoming("张三")}}>小明</button>
            <button onClick={()=>{setXiaohong("李四")}}>小红</button>
            <ChildComponent name={xiaoming}>{xiaohong}</ChildComponent>
        </div>
    )
}

function ChildComponent({name,children}){
    function change(param){
        console.log(`${param}子组件资源浪费`);
        return param;
    }
    const changeXiaoming = useMemo(()=>change(name),[name]) ;
    const changeXiaohong = useMemo(()=>change(children),[children]) ;
    // const changeXiaoming = change(name) 
    // const changeXiaohong = change(children)
    return(
        <div>
            <div>{changeXiaoming}</div>
            <div>{changeXiaohong}</div>
        </div>
    )
}

export default Example;
```

####  useRef(获取元素，保存变量)

获取元素：

```jsx
import React,{useRef} from 'react';
function Example() {
    const inputEl = useRef(null);
    const onButtonClick = ()=>{
        console.log(inputEl,"inputEl");
        inputEl.current.value = "改变了input的值";
    }

    return(
        <div>
            <input ref={inputEl} type="text"/>
            <button onClick={onButtonClick}>在input上显示文字</button>
        </div>
    )
}

export default Example;
```

保存变量：需要配合useEffect

```jsx
import React,{useRef,useEffect} from 'react';
function Example() {
    const [text,setText] = useState("初始值");
    const textRef = useRef();
    useEffect(()=>{
        textRef.current = text;
        console.log(textRef.current,"textRef.current");
    })
    return(
        <div>
            <input value={text} onChange={(e)=>{setText(e.target.value)}}/>
        </div>
    )
}

export default Example;
```

#### useCallback

useCallback用来缓存方法

```jsx

```

#### 自定义方法

```jsx
import React,{useState,useCallback,useEffect} from 'react';

function useSize() {
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })
    const onResize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    }, [])
    useEffect(()=>{
        window.addEventListener("resize",onResize)
        return ()=>{//销毁时触发
            window.removeEventListener("resize",onResize)
        }
    },[])
    return size;
}
function Example(){
    const size = useSize()
    return(
        <div>
            页面的size：{size.width}x{size.height}
        </div>
    )
}
```

