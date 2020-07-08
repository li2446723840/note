import React from 'react';
// import { connect } from 'dva';
// import ProductList from '../../components/product/ProductList';

class Product extends React.Component {
    // clickProduct = (event) => {
        
    // }
    render(){
        // const { productInfo, dispatch } = this.props
        return (
            <div>
                新页面
                {/* <ProductList title='水果' productInfo={ productInfo } dispatch={ dispatch }></ProductList> */}
                {/* <button onClick={ this.clickProduct }>删除</button> */}
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         //state.product中的product是命名空间
//         productInfo: state.product
//     }
// }

// export default connect(mapStateToProps)(Product);
export default Product;