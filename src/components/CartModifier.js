import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { Link } from "react-router-dom";

import cartActions from '../redux/actions/cartActions'

const useStyles = makeStyles((theme) => ({
    amountModifier: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        position: 'absolute',
        borderRadius:'5px',
        width: 250,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 2, 2),
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
        display: 'flex',
        outline: 'none'
    },
    button: {
        margin: '5px',
        padding:'5px',
        textAlign:'center'
    }
}))

function CartModifier({ product }) {
    const classes = useStyles();
    const [amount, setAmount] = useState(0)
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddToCart = () => {
        if (amount != 0) {
            dispatch(cartActions['ADD_CART_ITEM']({
                id: product.id,
                name: product.name,
                price: product.price,
                amount: amount
            }))
            setOpen(true);
        }

    }
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={classes.paper}>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        component={Link}
                        to={"/cart"}
                    >
                        View Shoping Cart
                </Button>
                    <Button onClick={handleClose} className={classes.button} variant="outlined" color="primary">
                        Continue Shoping
                </Button>
                </div>
            </Modal>
            <div className={classes.amountModifier}>
                <Button disabled={amount == 0 ? true : false} onClick={() => setAmount(state => state - 1)}>
                    -
                </Button>
                <div>{amount} </div>
                <Button onClick={() => setAmount(state => state + 1)}>
                    +
                </Button>
            </div>
            <Button onClick={handleAddToCart}>Add to cart</Button>
        </div>
    )
}

export default CartModifier
