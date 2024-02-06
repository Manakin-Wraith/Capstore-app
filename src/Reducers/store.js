import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import userReducer from './userReducer';
import checkoutReducer from './checkoutReducer';
import helpReducer from './helpReducer';
import homeReducer from './homeReducer';
import registerReducer from './registerReducer';
import productReducer from './productReducer';


const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  checkout:checkoutReducer,
  help: helpReducer,
  home: homeReducer,
  register: registerReducer,
  product: productReducer,
  // Add more reducers as needed
});

export default rootReducer;