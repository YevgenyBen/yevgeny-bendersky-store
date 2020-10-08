import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";

function CartIcon() {
  const productsInCart = useSelector((state) => state.cartReducer);
  return (
    <div>
      <Button
        variant="contained"
        startIcon={<ShoppingCartIcon />}
        component={Link}
        to={"/cart"}>
        {productsInCart.length}
      </Button>
    </div>
  );
}

export default CartIcon;
