
const inventoryReducer = (state = [], action) => {
	switch (action.type) {
        case 'ADD_INVENTORY':
			return [...action.payload]
		case 'ADD_INVENTORY_ITEM':
			return [...state, action.payload]
		case 'REMOVE_INVENTORY_ITEM':
			return [...state.filter(item=>item.id!==action.payload.id)]
		default:
			return state;
	}
};

export default inventoryReducer;