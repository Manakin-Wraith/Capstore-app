// Initial state for product-related state
const initialState = {
  products: [],
  // ... other state properties
};

// Reducer function for managing the product-related state
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    // Case for handling the action type 'SET_PRODUCTS'
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload, // Set the 'products' array to the payload received in the action
      };

    // Add more cases as needed for other actions related to products

    // Default case to return the current state if the action is not recognized
    default:
      return state;
  }
};

// Export the productReducer function
export default productReducer;
