import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

function CartCard() {
    const productsInCart = useSelector((state) => state.cartReducer );
    return (
        <div>
            <Container>
                <Paper>
                    
                </Paper>
            </Container>
        </div>
    )
}

export default CartCard
