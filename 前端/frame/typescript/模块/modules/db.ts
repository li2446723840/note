//第一种导出方式
// export let dbUrl = "xxxx";
// export function getData():any[]{
//     console.log("获取数据库的数据");
//     return [
//         {
//             title: "123"
//         },
//         {
//             title: "321"
//         },
//     ]
// }
// export function save(){
//     console.log("保存数据成功");
// }


//第二种导出方式
let dbUrl = "xxxx";
function getData():any[]{
    console.log("获取数据库的数据");
    return [
        {
            title: "123"
        },
        {
            title: "321"
        },
    ]
}
function save(){
    console.log("保存数据成功");
}
export { dbUrl, getData, save }

// export default  默认导出，每个模块只能由一个默认导出