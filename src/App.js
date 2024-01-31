// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './Pages/AuthContext';
import { CartProvider } from './Pages/CartContext';
import HomePage from './Pages/HomePage';
import Header from './Components/Header';
import RegisterPage from './Pages/RegisterPage';
import ProductPage from './ProductPage';
import CartPage from './Pages/CartPage';
import CheckoutPage from './Pages/CheckoutPage';

// Main component that sets up the application's structure using React Router for navigation.
const App = () => {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Header />
          <Switch>
            <Route path="/register" component={RegisterPage} />
            <Route path="/" exact component={HomePage} />
            <Route path="/products" component={ProductPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/checkout" component={CheckoutPage} />
          </Switch>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
