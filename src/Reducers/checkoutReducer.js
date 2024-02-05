// src/reducers/checkoutReducer.js
const initialState = {
    orderConfirmed: false,
    // Add more checkout-related state as needed
  };
  
  const checkoutReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CONFIRM_ORDER':
        return { ...state, orderConfirmed: true };
  
      // Add more cases as needed
  
      default:
        return state;
    }
  };
  
  export default checkoutReducer;
  