// src/actions/cartActions.js
export const addToCart = (item) => ({
    type: 'ADD_TO_CART',
    payload: item,
  });
  
  export const removeFromCart = (item) => ({
    type: 'REMOVE_FROM_CART',
    payload: item,
  });
  
  export const updateShipping = (shippingMethod) => ({
    type: 'UPDATE_SHIPPING',
    payload: shippingMethod,
  });
  
  // Add more action creators as needed
  