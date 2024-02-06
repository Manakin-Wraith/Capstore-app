// Initial state of the cart
const initialState = {
  cartItems: [],          // Array to store items in the cart
  selectedShipping: 'standard',  // Default selected shipping method
};

// Reducer function for managing the cart state
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // Case for adding an item to the cart
    case 'ADD_TO_CART':
      return { ...state, cartItems: [...state.cartItems, action.payload] };

    // Case for removing an item from the cart
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
      };

    // Case for updating the selected shipping method
    case 'UPDATE_SHIPPING':
      return { ...state, selectedShipping: action.payload };

    // Add more cases as needed for other actions

    // Default case to return the current state if the action is not recognized
    default:
      return state;
  }
};

// Export the cartReducer function
export default cartReducer;
