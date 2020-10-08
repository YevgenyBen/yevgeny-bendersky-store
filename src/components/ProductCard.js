import React from 'react'

import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import CartModifier from './CartModifier'
import night from '../images/night.jpg'
import clock from '../images/clock.jpg'


function ProductCard({ product }) {
    return (
        <div>
            <Container>
                <Paper className="product-card" elevation={5}>
                    <div className={"product-name"} > {product.name + " "} </div>
                    <div className={"product-price"} > {product.price} &#36; </div>
                    <div className={"product-decription"} >
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua.
                    </div>
                    <CartModifier className={"product-amount"} product={product} />
                    <img className={"product-image"} alt={"product"} src={night} ></img>
                </Paper>
            </Container>

        </div>
    )
}

export default ProductCard
