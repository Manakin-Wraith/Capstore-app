// Action creator to add an item to the shopping cart
export const addToCart = (item) => ({
  type: 'ADD_TO_CART',
  payload: item,
});

// Action creator to remove an item from the shopping cart
export const removeFromCart = (item) => ({
  type: 'REMOVE_FROM_CART',
  payload: item,
});

// Action creator to update the shipping method for the order
export const updateShipping = (shippingMethod) => ({
  type: 'UPDATE_SHIPPING',
  payload: shippingMethod,
});

// You can add more action creators here as needed
