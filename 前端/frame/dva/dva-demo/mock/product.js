// const Mock = require("mockjs");
// module.exports = {
//     'GET /api/product': (req, res) => {
//         res.status(200).json({
//             users: Mock.mock({
//                 'data|10-20': [
//                     {
//                         id: '@id',
//                         name: '@name',
//                         nickName: '@last',
//                         phone: /^1[34578]\d{9}$/,
//                         'age|11-99': 1,
//                         address: '@county(true)',
//                         isMale: '@boolean',
//                         email: '@email',
//                         createTime: '@datetime',
//                     }
//                 ]
//             })
//         })
//     }
// }
module.exports = {
    "GET /api/product": (req, res) => {
        const params = req.query;
        console.log(params);
        res.send({ "name": "玉米"})
    }
}