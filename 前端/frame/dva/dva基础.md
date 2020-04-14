### **创建流程**

1. 全局安装 `dva-cli` 的脚手架
    `npm install dva-cli -g`
1. 利用 `dva-cli`的脚手架新建一个dva项目
    `dva new <项目文件名>`
    以上步骤就创建了一个dva项目，可以运行`npm run start` 启动项目

#### dva依赖包

```js
npm install mockjs -D //模拟数据
npm i antd babel-plugin-import -S //UI框架
npm install  history -S        //去除url中的#
npm install  redux-actions -S //集中管理action
```

简化：

```js
npm install mockjs -D
npm install antd babel-plugin-import history redux-actions -S
```

#### 项目中一般src里的目录标配：

<font color="red">assets</font>   :放置静态资源 比如图片;

<font color="red">components</font>   :放置木偶组件，只负责从./routes的智能组件来读取props填充展示，一般来讲是纯函数的react书写方式;

<font color="red">models</font>   :是一个处理数据的地方，比如在model里面调用./service输出的方法来获取数据填充到store;其实我觉得就是store的整体的集合，以 namespace作为唯一标识进行区分；

<font color="red">routes</font>   :放置若干智能组件的地方，智能组件里一般通过dva的connect（({yourModle})=>({yourModle})）（yourComponent）方法来和你的组件来实现数据互通的，生成带数据的活组件；（一般来讲智能组件的样式也在这级目录，因为组件就近维护原则吧）;

<font color="red">services</font>   :负责向后台请求数据，在services里调用后台提供的api获取数据;

<font color="red">utils</font>   :放置工具类：比如常见的后台接口请求工具类；这里是默认封装了fetch数据交互的方法，直接入参调用即可;

<font color="red">index.css</font>   :index.html的样式，你懂的;

<font color="red">index.js</font>   :主页的入口位置，也是初始化dva的位置；什么 app.use( )/app.model( )/app.router( )/app.start( )都是在这里的完成的;

<font color="red">index.html</font>   :入口挂载dom的html模板;

<font color="red">router.js</font>   :配置路由的地方，会从./routes文件夹下引入写好的智能组件来组装页面，export default 出一个方法来生成router结构。