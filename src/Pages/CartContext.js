// Importing necessary dependencies
import React, { createContext, useContext, useState } from 'react';

// Creating the cart context
const CartContext = createContext();

// CartProvider component to manage the shopping cart state
export const CartProvider = ({ children }) => {
  // State to manage the shopping cart
  const [cart, setCart] = useState([]);

  // Function to add a product to the shopping cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Function to remove a product from the shopping cart
  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  // Providing the cart context to the children components
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access the cart context
export const useCart = () => {
  return useContext(CartContext);
};
