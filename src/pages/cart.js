import React from "react";
import { useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import CartCard from "../components/CartCard";
import ProductCard from "../components/ProductCard";
import "./Cart.css";

function Cart() {
  const productsInCart = useSelector((state) => state.cartReducer);
  return (
    <div>
      <Container>
        <h2 className="cart-title">Cart</h2>
        <CartCard className={"cart-card"} products={productsInCart} />
        {productsInCart &&
          productsInCart.map((product, index) => (
            <ProductCard product={product} key={index} inCart={true} />
          ))}
      </Container>
    </div>
  );
}

export default Cart;
