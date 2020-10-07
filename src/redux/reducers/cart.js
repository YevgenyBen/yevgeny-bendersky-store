const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CART_ITEM':
            return (state.find(item => item.id === action.payload.id))
                ?
                [...state.map(item => item.id === action.payload.id ? { ...item, amount: item.amount + action.payload.amount } : item)]
                :
                [...state, action.payload]

        case 'REMOVE_CART_ITEM':
            return [...state.filter(item => item.id !== action.payload.id)]
        default:
            return state;
    }
};

export default cartReducer;