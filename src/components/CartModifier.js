import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { Link } from "react-router-dom";

import cartActions from "../redux/actions/cartActions";

const useStyles = makeStyles((theme) => ({
    amountModifier: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        position: "absolute",
        borderRadius: "5px",
        width: 300,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 2, 2),
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
        display: "flex",
        outline: "none",
        justifyContent: "space-between",
        
    },
    button: {
        margin: "5px",
        padding: "5px",
        textAlign: "center",
    },
    addItem:{
        alignItems:"baseline"
    }
}));

function CartModifier({ product, inCart }) {
    const classes = useStyles();
    const [amount, setAmount] = useState(0);

    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleAddToCart = () => {
        if (amount !== 0) {
            dispatch(
                cartActions["ADD_CART_ITEM"]({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    amount: amount,
                })
            );
            setOpen(true);
        }
    };

    const handleRemoveFromCart = () => {
        dispatch(
            cartActions["REMOVE_CART_ITEM"]({
                id: product.id,
                name: product.name,
                price: product.price,
                amount: amount,
            })
        );
        setOpen(false);
    };

    const handleModifyAmount = () => {
        if (amount !== 0) {
            dispatch(
                cartActions["MODIFY_ITEM_AMOUNT"]({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    amount: amount,
                })
            );
        }
    };

    const modalBodyInShop = (
        <div className={classes.paper}>
            <div>{product.name} has been added to cart</div>
            <Button
                className={classes.button}
                variant="contained"
                color="primary"
                component={Link}
                to={"/cart"}>
                View Cart
      </Button>
            <Button
                className={classes.button}
                variant="outlined"
                color="primary"
                component={Link}
                to={"/"}>
                Continue Shoping
      </Button>
        </div>
    );

    const modalBodyInCart = (
        <div className={classes.paper}>
            <div className={classes.addItem}>Are you sure you want to remove {product.name} from cart?</div>
            <Button
                onClick={handleClose}
                className={classes.button}
                variant="contained"
                color="primary">
                Cancel
      </Button>
            <Button
                className={classes.button}
                variant="outlined"
                color="primary"
                onClick={handleRemoveFromCart}>
                Remove Item
      </Button>
        </div>
    );

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description">
                {inCart ? modalBodyInCart : modalBodyInShop}
            </Modal>
            <div className={classes.amountModifier}>
                <Button
                    className={classes.button}
                    disabled={amount === 0 ? true : false}
                    onClick={() => setAmount((state) => state - 1)}>
                    -
        </Button>
                <div>{amount} </div>
                <Button
                    className={classes.button}
                    onClick={() => setAmount((state) => state + 1)}>
                    +
        </Button>
            </div>
            <>
                <Button
                    className={classes.button}
                    onClick={inCart ? handleOpen : handleAddToCart}>
                    {inCart ? "Remove Item" : "Add to cart"}
                </Button>
                {inCart ? (
                    <Button
                        className={classes.button}
                        variant="outlined"
                        color="primary"
                        onClick={handleModifyAmount}>
                        {amount > 0 ? "Modify Amount of items to " + amount : "Modify Amount"}

                    </Button>
                ) : null}
            </>
        </div>
    );
}

export default CartModifier;
