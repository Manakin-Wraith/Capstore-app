// src/reducers/cartReducer.js
const initialState = {
    cartItems: [],
    selectedShipping: 'standard',
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return { ...state, cartItems: [...state.cartItems, action.payload] };
  
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
        };
  
      case 'UPDATE_SHIPPING':
        return { ...state, selectedShipping: action.payload };
  
      // Add more cases as needed
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  