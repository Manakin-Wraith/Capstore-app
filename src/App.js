// Import necessary dependencies and components from React and React Router
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import context providers for authentication and cart
import { AuthProvider } from './Pages/AuthContext';
import { CartProvider } from './Pages/CartContext';

// Import various pages and components
import HomePage from './Pages/HomePage';
import Header from './Components/Header';
import RegisterPage from './Pages/RegisterPage';
import ProductPage from './ProductPage';
import CartPage from './Pages/CartPage';
import HelpPage from './Pages/HelpPage';
import CheckoutPage from './Pages/CheckoutPage';

// Main component that defines the application's structure and routes
const App = () => {
  return (
    <Router>
      {/* Wrap the application with the AuthProvider for authentication context */}
      <AuthProvider>
        {/* Wrap the application with the CartProvider for cart context */}
        <CartProvider>
          {/* Include the Header component at the top of the application */}
          <Header />

          {/* Set up the routes using Switch and Route components */}
          <Switch>
            {/* Route for the registration page */}
            <Route path="/register" component={RegisterPage} />

            {/* Route for the home page (exact path to match only the root) */}
            <Route path="/" exact component={HomePage} />

            {/* Route for the product page */}
            <Route path="/products" component={ProductPage} />

            {/* Route for the cart page */}
            <Route path="/cart" component={CartPage} />

            {/* Route for the checkout page */}
            <Route path="/checkout" component={CheckoutPage} />

            {/* Route for the help page */}
            <Route path="/help" component={HelpPage} />
          </Switch>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
};

// Export the App component as the default export
export default App;
