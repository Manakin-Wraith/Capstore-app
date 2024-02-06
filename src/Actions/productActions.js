// Action creator to set the products in the application state
export const setProducts = (products) => ({
  type: 'SET_PRODUCTS',
  payload: products,
});

// Action creator to add a product to the shopping cart
export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: product,
});
