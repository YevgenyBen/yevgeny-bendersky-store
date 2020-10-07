import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';

function CartIcon() {
    const productsInCart = useSelector((state) => state.cartReducer );
    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                startIcon={<ShoppingCartIcon />}
            >
                {productsInCart.length}
            </Button>
        </div>
    )
}

export default CartIcon
