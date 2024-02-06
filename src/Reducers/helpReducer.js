// Import the action type for navigating back to cart
import { NAVIGATE_BACK_TO_CART } from '../Actions/helpActions';

// Initial state for the help-related state
const initialState = {
  // ... other state properties
};

// Reducer function for managing the help-related state
const helpReducer = (state = initialState, action) => {
  switch (action.type) {
    // ... other cases for different actions

    // Case for navigating back to the cart
    case NAVIGATE_BACK_TO_CART:
      // You can handle any state updates related to navigation here if needed
      // In this case, it returns the current state without modifications
      return state;

    // Default case to return the current state if the action is not recognized
    default:
      return state;
  }
};

// Export the helpReducer function
export default helpReducer;
