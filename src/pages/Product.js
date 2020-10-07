import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";

import ProductCard from '../components/ProductCard'
import './Product.css'

function Product(props) {
    const allProducts = useSelector((state) => state.inventoryReducer);
    const location = useLocation();
    // { console.log(location.query.id) }
    const selectedProduct = allProducts.find((product) => product.id == location.query.id)
    return (
        <div>
            {
                selectedProduct
                    ?
                    <ProductCard product={selectedProduct} />
                    :
                    <Redirect to="/" />
            }
        </div>

    )
}

export default Product
