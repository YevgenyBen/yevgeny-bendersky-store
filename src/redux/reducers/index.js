import { combineReducers } from 'redux';
import inventoryReducer from './inventory' 
import cartReducer from './cart'

const rootReducer = combineReducers({
	inventoryReducer,
	cartReducer
});

export default rootReducer;