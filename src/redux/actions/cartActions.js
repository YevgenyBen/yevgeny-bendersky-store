const cartActions = {
    ADD_CART_ITEM: val => {
        return {
            type: "ADD_CART_ITEM",
            payload: val
        };
    },
    REMOVE_CART_ITEM: val => {
        return {
            type: "REMOVE_CART_ITEM",
            payload: val
        };
    },
};

export default cartActions