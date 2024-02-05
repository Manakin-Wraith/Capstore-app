// Header.js
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUser } from '../Actions/userActions'; 
import './Header.css';

// Header component responsible for displaying the navigation bar and user information.
const Header = ({ user, cart }) => {
  

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

const mapStateToProps = (state) => ({
  user: state.user.user,
  cart: state.cart.cartItems,
});

const mapDispatchToProps = {
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);