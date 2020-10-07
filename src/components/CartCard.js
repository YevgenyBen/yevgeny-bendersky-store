import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

function CartCard() {
    const productsInCart = useSelector((state) => state.cartReducer );
    const subTotal=productsInCart.reduce((total,item)=>{
        return total+item.price*item.amount
    },0)
    console.log(subTotal)
    return (
        <div>
            <Container>
                <Paper>
                    subtotal:{subTotal}
                </Paper>
            </Container>
        </div>
    )
}

export default CartCard
