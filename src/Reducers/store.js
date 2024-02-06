// Import the combineReducers function from Redux
import { combineReducers } from 'redux';

// Import individual reducers
import cartReducer from './cartReducer';
import userReducer from './userReducer';
import checkoutReducer from './checkoutReducer';
import helpReducer from './helpReducer';
import homeReducer from './homeReducer';
import registerReducer from './registerReducer';
import productReducer from './productReducer';

// Combine individual reducers into a single rootReducer
const rootReducer = combineReducers({
  // Define keys for each piece of state managed by the corresponding reducer
  cart: cartReducer,         // Manages state related to the shopping cart
  user: userReducer,         // Manages state related to user authentication
  checkout: checkoutReducer, // Manages state related to the checkout process
  help: helpReducer,         // Manages state related to help or information
  home: homeReducer,         // Manages state related to the home page
  register: registerReducer, // Manages state related to user registration
  product: productReducer,   // Manages state related to products
  // Add more reducers as needed

  // Each key corresponds to a slice of the overall state managed by its respective reducer
});

// Export the combined rootReducer
export default rootReducer;
