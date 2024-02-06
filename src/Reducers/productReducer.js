// productReducer.js
const initialState = {
    products: [],
    // ... other state properties
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PRODUCTS':
        return {
          ...state,
          products: action.payload,
        };
      // ... other cases
      default:
        return state;
    }
  };
  
  export default productReducer;
  