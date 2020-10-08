const cartActions = {
  ADD_CART_ITEM: (val) => {
    return {
      type: "ADD_CART_ITEM",
      payload: val,
    };
  },
  REMOVE_CART_ITEM: (val) => {
    return {
      type: "REMOVE_CART_ITEM",
      payload: val,
    };
  },
  MODIFY_ITEM_AMOUNT: (val) => {
    return {
      type: "MODIFY_ITEM_AMOUNT",
      payload: val,
    };
  },
};

export default cartActions;
