// helpReducer.js
import { NAVIGATE_BACK_TO_CART } from '../Actions/helpActions';

const initialState = {
  // ... other state properties
};

const helpReducer = (state = initialState, action) => {
  switch (action.type) {
    // ... other cases

    case NAVIGATE_BACK_TO_CART:
      // You can handle any state updates related to navigation here if needed
      return state;

    default:
      return state;
  }
};

export default helpReducer;
