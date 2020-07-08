import React from 'react';
import { connect } from 'dva';
import ProductList from '../../components/product/ProductList';

class Product extends React.Component {
    clickProduct = (event) => {
        console.log(1111);
    }
    childClick = () => {
        console.log(222);
    }
    render() {
        const { productInfo, dispatch } = this.props
        return (
            <div>

                <ProductList
                    title='水果'
                    productInfo={productInfo}
                    dispatch={dispatch}
                    childClick={this.childClick.bind(this)}
                >
                </ProductList>
                <button onClick={this.clickProduct}>删除</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        //state.product中的product是命名空间
        productInfo: state.product
    }
}

export default connect(mapStateToProps)(Product);