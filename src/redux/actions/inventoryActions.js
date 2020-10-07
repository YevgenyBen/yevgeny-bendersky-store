const inventoryActions = {
    ADD_INVENTORY: val => {
        return {
            type: "ADD_INVENTORY",
            payload: val
        };
    },
    ADD_INVENTORY_ITEM: val => {
        return {
            type: "ADD_INVENTORY_ITEM",
            payload: val
        };
    },
    REMOVE_INVENTORY_ITEM: val => {
        return {
            type: "REMOVE_INVENTORY_ITEM",
            payload: val
        };
    },
};

export default inventoryActions