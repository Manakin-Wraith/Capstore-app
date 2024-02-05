// src/reducers/index.js
import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import userReducer from './userReducer';
import checkoutReducer from './checkoutReducer';
import helpReducer from './helpReducer';
import homeReducer from './homeReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  checkout:checkoutReducer,
  help: helpReducer,
  home: homeReducer,
  // Add more reducers as needed
});

export default rootReducer;
