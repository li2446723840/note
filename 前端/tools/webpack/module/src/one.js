// //引入别的文件时，会将引入的文件打包
// import two from "./two";
// import "./assets/css/index.css";
// console.log("one");


// //url-loader(打包图片) file-loader(js文件中引入)模块处理图片
// import "./assets/css/index.css";
// import img from "./assets/image/11.jpg";
// const faviconImg = new Image();
// faviconImg.src = img;
// document.body.appendChild(faviconImg)
// console.log("one");


// //less less-loader模块(解析less)
// import "./assets/less/my.less";
// console.log("one");


// sass-loader node-sass模块(解析sass)
import "./assets/scss/my.scss";
console.log("one");
