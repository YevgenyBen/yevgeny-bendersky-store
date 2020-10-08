import React from "react";

import Paper from "@material-ui/core/Paper";

function CartCard({ products }) {
  // const productsInCart = useSelector((state) => state.cartReducer );
  const subTotal = products.reduce((total, item) => {
    return total + item.price * item.amount;
  }, 0);
  return (
    <div>
      <Paper>subtotal:{subTotal}</Paper>
    </div>
  );
}

export default CartCard;
