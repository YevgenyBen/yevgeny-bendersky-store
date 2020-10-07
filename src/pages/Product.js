import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";

import ProductCard from '../components/ProductCard'
import './Product.css'

function Product() {
    const allProducts = useSelector((state) => state.inventoryReducer);
    const location = useLocation();
    { console.log(location.pathname.split('/')[2]) }
    const selectedProduct=allProducts.find((product) => product.id == location.pathname.split('/')[2])
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
