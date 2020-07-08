import * as api from '../services/example.js';

export default {

    namespace: 'product',
  
    state: {
        productInfo: [
            { name: "西瓜" },
            { name: "苹果" }
        ],
    },
    //同步代码,更新state
    reducers: {
        updateList(state,action){
            let currentProductList = deepClone(state);
            currentProductList.productInfo.push(action.payload);
            return currentProductList;
        }
    },

    //异步代码
    effects: {
        *updateListAsync({ payload },{ call, put }) {
            yield put({
                //将异步变同步
                type: 'updateList',
                payload,
            });
        },
        //网络请求
        *updateListHttp({ payload },{ call, put }) {
            const result = yield call(api.getProduct,payload);
            const data = result.data;
            if(data){//如果请求到了数据
                yield put({
                    type: 'updateList',//执行同步代码
                    payload: data
                })
            }
        },
        *getUserInfo({ payload },{ call, put }) {
            const result = yield call(api.cloud,payload);
            const data = result.data;
            if(data){
                console.log('请求成功')
            }
        }
    },
    subscriptions: {
        setup({ dispatch, history }) {
            const currentProduct = {
                name: "玉米"
            }
            window.onresize = () => {
                dispatch({
                    type: "updateList",
                    payload: currentProduct
                })
            }
        },
        setupHistory({ dispatch, history }) {
            history.listen((location) => {
                console.log(location);
            })
        }
    }
  };
function deepClone(obj){
    let _obj = JSON.parse(JSON.stringify(obj));
    return _obj;
}
  
