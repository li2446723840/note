import React, { Component, useState, useEffect, createContext, useContext, useReducer, useMemo, useRef, useCallback } from 'react';
// import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Child from './child'
import ShowArea from './useReducerUseContext/ShowArea';
import Buttons from './useReducerUseContext/Buttons';
import { Color } from './useReducerUseContext/Color';


//-------------------------//useState
// function Example() {//------------------hook
//     //--------一
//     // const [num, setNum] = useState(0)//数组解构
//     // return (
//     //     <div>
//     //         <p>点赞人数：{num}</p>
//     //         <button onClick={()=>{setNum(num+1)}}>点赞</button>
//     //     </div>
//     // )
//     //-------二
//     const [name, setName] = useState("张三");
//     const [age, setAge] = useState(23);
//     const [sex, setSex] = useState("男");
//     return (
//         <div>
//             <p>姓名：{name}</p>
//             <p>年龄：{age}</p>
//             <p>性别：{sex}</p>
//             <button onClick={()=>{
//                 setName("李四");
//                 setAge(40);
//                 setSex("女")
//             }}>按钮</button>
//         </div>
//     )
// }

// class Example extends React.Component {//-------------------原生react
//     constructor(props) {
//         super(props);
//         this.state = {
//             num: 0,
//         }
//     }
//     add = () => {
//         this.setState({
//             num: this.state.num + 1
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <p>点赞人数：{this.state.num}</p>
//                 <button onClick={this.add.bind(this)}>点赞</button>
//             </div>
//         )
//     }
// }


//---------useEffect
// function Example(){
//     const [ num, setNum ] = useState(0);
//     const [ personNum, setPersonNum ] = useState(0);
//     useEffect(()=>{
//         console.log(num, personNum);
//         return ()=>{
//             console.log("++++++++++++++++++++++++");
//         }
//     },[num])
//     return (
//         <div>
//             <p>点赞数：{num}</p>
//             <p>人数：{personNum}</p>
//             <button onClick={()=>{setNum(num+1)}}>点赞</button>
//             <button onClick={()=>{setPersonNum(personNum+1)}}>关注</button>
//             <Router>
//                 <ul>
//                     <li><Link to="/">首页</Link></li>
//                     <li><Link to="/list">列表</Link></li>
//                 </ul>
//                 <Route path="/" exact component={Index}/>
//                 <Route path="/list" exact component={List}/>
//             </Router>
//         </div>
//     )
// }
// // class Example extends Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             num: 0
// //         }
// //     }
// //     componentDidMount(){
// //         console.log("componentDidMount");
// //     }
// //     componentDidUpdate(){
// //         console.log("componentDidUpdate");
// //     }
// //     render() {
// //         return (
// //             <div>
// //                 <p>点赞数：{this.state.num}</p>
// //                 <button onClick={() => { this.setState({ num: this.state.num + 1 }) }}>点赞</button>
// //             </div>
// //         )
// //     }
// // }
// function Index(){
//     useEffect(()=>{
//         console.log("首页，加载");
//         return ()=>{
//             console.log("首页，销毁");
//         }
//     },[])
//     return (
//         <div>首页</div>
//     )
// }
// function List(){
//     useEffect(()=>{
//         console.log("列表页，加载");
//         return ()=>{
//             console.log("列表页，销毁");
//         }
//     })
//     return (
//         <div>列表</div>
//     )
// }

//------------------useContext
//父组件
// const NumContext = createContext();
// function Example(){
//     const [num,setNum] = useState(0);
//     return(
//         <div>
//             <p>点赞数：{num}</p>
//             <button onClick={()=>{setNum(num+1)}}>点赞</button>
//             <NumContext.Provider value={num}>
//                 <Child/>
//             </NumContext.Provider>
//         </div>
//     )
// }
// //子组件
// // function Counter(){
// //     let num = useContext(NumContext)
// //     return(
// //     <h3>{num}</h3>
// //     )
// // }

//------------useReducer
// function Example() {
//     const [num, dispatch] = useReducer((state, action) => {
//         switch (action) {
//             case 'add':
//                 return state + 1
//             case 'sub':
//                 return state - 1
//             default:
//                 return state
//         }
//     }, 0)
//     return (
//         <div>
//             <p>现在的数量：{num}</p>
//             <button onClick={()=>{dispatch('add')}}>加</button>
//             <button onClick={()=>{dispatch('sub')}}>减</button>
//         </div>
//     )
// }

//------------useReducer加useContext实现redux
// function Example() {
//     return (
//         <div>
//             <Color>
//                 <ShowArea />
//                 <Buttons />
//             </Color>
//         </div>
//     )
// }

//-----------useMemo
// function Example(){
//     const [xiaoming,setXiaoming] = useState("小明");
//     const [xiaohong,setXiaohong] = useState("小红");
//     return (
//         <div>
//             <button onClick={()=>{setXiaoming("张三")}}>小明</button>
//             <button onClick={()=>{setXiaohong("李四")}}>小红</button>
//             <ChildComponent name={xiaoming}>{xiaohong}</ChildComponent>
//         </div>
//     )
// }

// function ChildComponent({name,children}){
//     function change(param){
//         console.log(`${param}子组件资源浪费`);
//         return param;
//     }
//     const changeXiaoming = useMemo(()=>change(name),[name]) 
//     const changeXiaohong = useMemo(()=>change(children),[children]) 
//     // const changeXiaoming = change(name) 
//     // const changeXiaohong = change(children)
//     return(
//         <div>
//             <div>{changeXiaoming}</div>
//             <div>{changeXiaohong}</div>
//         </div>
//     )
// }

//---------useRef
// function Example() {
//     const [text,setText] = useState("初始值");
//     const textRef = useRef();
//     useEffect(()=>{
//         textRef.current = text;
//         console.log(textRef.current,"textRef.current");
//     })
//     return(
//         <div>
//             <input value={text} onChange={(e)=>{setText(e.target.value)}}/>
//         </div>
//     )
// }

//-----------自定义方法
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

export default Example;
// export {NumContext};