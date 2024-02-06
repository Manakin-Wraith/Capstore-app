// Importing necessary dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUser } from '../Actions/userAction'; // Importing setUser action
import './Header.css'; // Importing the styles for the header

// Header component responsible for displaying the navigation bar and user information.
const Header = ({ user, cart }) => {
  // Rendering the header component
  return (
    <div className="header-container">
      {/* Your Store logo */}
      <h2 className="logo">Your Store</h2>
      
      {/* Navigation links */}
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
      
      {/* User information section */}
      <div className="user-info">
        <p className="welcome-text">Welcome, {user ? user.username : 'Guest'}!</p>
      </div>
    </div>
  );
};

// Connecting the component to the Redux store
const mapStateToProps = (state) => ({
  user: state.user.user,
  cart: state.cart.cartItems,
});

// Mapping setUser action to props
const mapDispatchToProps = {
  setUser,
};

// Connecting the component to the Redux store and exporting it
export default connect(mapStateToProps, mapDispatchToProps)(Header);
