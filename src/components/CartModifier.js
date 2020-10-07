import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import cartActions from '../redux/actions/cartActions'

const useStyles = makeStyles(() => ({
    amountModifier: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
}))

function CartModifier({product}) {
    const classes = useStyles();
    const [amount, setAmount] = useState(0)
    const dispatch = useDispatch();

    const handleAddToCart = ()=>{
        dispatch(cartActions['ADD_CART_ITEM']({
            id:product.id,
            name:product.name,
            price:product.price,
            amount:amount
        }))
    }
    return (
        <div>
            <div className={classes.amountModifier}>
                <Button disabled={amount==0?true:false} onClick={()=>setAmount(state=>state-1)}>
                    -
                </Button>
                <div>{amount} </div>
                <Button onClick={()=>setAmount(state=>state+1)}>
                    +
                </Button>
            </div>
            <Button onClick={handleAddToCart}>Add to cart</Button>
        </div>
    )
}

export default CartModifier
