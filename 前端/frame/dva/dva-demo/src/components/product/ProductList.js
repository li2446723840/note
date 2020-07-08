import React from 'react';
import { withRouter, Link, routerRedux } from 'dva/router';
// import * as api from '../../services/example';

class ProductList extends React.Component {

    componentDidMount(){
        // api.getProduct().then(res  => {
        //     console.log(res)
        // })
    }

    clickAddProductList = (event) => {
        const currentProductList = { name: "橘子" }
        this.props.dispatch({
            type: "product/updateList",
            payload: currentProductList
        })
    }

    clickAddProductListAsync = (event) => {
        const currentProductList = { name: "豆子" }
        this.props.dispatch({
            type: "product/updateListAsync",
            payload: currentProductList
        })
    }

    clickAddProductListHttp = (event) => {
        this.props.dispatch({
            type: "product/updateListHttp",
            payload: {
                id: 1000
            }
        })
    }

    clickWithRouter = (event) => {
        this.props.history.push('/');
    }

    clickRouterRedux = (event) => {
        this.props.dispatch(routerRedux.push('/'));
    }

    clickCloudMusic = (event) => {
        this.props.dispatch({
            type: "product/getUserInfo",
            payload: {
                uid: 429583581
            }
        })
    }

    render(){

        const { productInfo } = this.props.productInfo;

        return (
            <div>
                <div>{ this.props.title}</div>
                {
                    productInfo.map((item, index) => {
                        return <div key={ index }>{ item.name }</div>
                    })
                }
                <button onClick = { this.clickAddProductList }>同步添加</button>
                <button onClick = { this.clickAddProductListAsync }>异步添加</button>
                <button onClick = { this.clickAddProductListHttp }>网络添加</button>
                <button onClick = { this.clickWithRouter }>withRouter跳转</button>
                <button onClick = { this.clickRouterRedux }>routerRedux跳转</button>
                <button onClick = { this.clickCloudMusic }>网易云</button>
                <button onClick = { this.props.childClick }>子组件传值</button>
                <Link to="/">Link跳转</Link>
            </div>
        )
    }
}

export default withRouter(ProductList);