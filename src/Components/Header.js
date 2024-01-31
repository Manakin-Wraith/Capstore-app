// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Pages/CartContext';
import { useAuth } from '../Pages/AuthContext';
import './Header.css'; 

// Header component responsible for displaying the navigation bar and user information.
const Header = () => {
  // Access user and cart information using custom hooks from AuthContext and CartContext.
  const { user } = useAuth();
  const { cart } = useCart();

  return (
    <div className="header-container">
      <h2 className="logo">Your Store</h2>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link">Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              Cart <span className="cart-count">({cart.length} items)</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="user-info">
        <p className="welcome-text">Welcome, {user ? user.username : 'Guest'}!</p>
      </div>
    </div>
  );
};

export default Header;