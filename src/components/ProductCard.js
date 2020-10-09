import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import CartModifier from "./CartModifier";

function ProductCard({ product, inCart }) {

    return (
        <div>
            <Container>
                <Paper className="product-card" elevation={5}>
                    <div className={"product-name"}> {product.name + " "} </div>
                    <div className={"product-price"}> {inCart ? product.amount + " items in cart, " + product.price.toLocaleString() + " each" : product.price.toLocaleString()} &#36; </div>
                    <div className={"product-decription"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
                    <CartModifier
                        className={"product-amount"}
                        product={product}
                        inCart={inCart}
                    />
                    <img
                        className={"product-card-image"}
                        alt={"product"}
                        src={window.location.origin + `/images/${product.id}.jpg`} />

                </Paper>
            </Container>
        </div>
    );
}

export default ProductCard;
