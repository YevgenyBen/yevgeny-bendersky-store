import React from "react";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

function CartCard({ products }) {
  // const productsInCart = useSelector((state) => state.cartReducer );
  const subTotal = products.reduce((total, item) => {
    return total + item.price * item.amount;
  }, 0);
  return (
    <Paper className="cart-card">
        <div className="total">  subtotal:{" "+subTotal.toLocaleString()+" "}&#36;</div>
        <Button className="buy-button" color="primary">Buy these items</Button>
    </Paper>
  );
}

export default CartCard;
