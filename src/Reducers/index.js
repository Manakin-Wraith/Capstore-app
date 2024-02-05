// src/reducers/index.js
import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import userReducer from './userReducer';
import checkoutReducer from './checkoutReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  checkout:checkoutReducer,
  // Add more reducers as needed
});

export default rootReducer;
