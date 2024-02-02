// CheckoutPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './CheckoutPage.css';

const CheckoutPage = ({ location }) => {
  const { totalAmount, vat, shippingCosts} = location.state;

  const handleConfirmation = () => {
    // Implement your confirmation logic here
    alert('Order confirmed!');
  };

  const handleBackToCart = () => {
    // Implement your back to cart logic here, such as redirecting to the cart page
    alert('Redirecting back to cart...');
  };

  return (
    <div className="checkout-page-container">
      <h2>Checkout</h2>
      {/* Display relevant information, total amount, VAT, shipping costs */}
      <div className="checkout-details">
        <p>Total Amount: R{totalAmount}</p>
        <p>VAT (15%): R{vat}</p>
        <p>Shipping Costs: R{shippingCosts}</p>
        <p className="grand-total">Grand Total: R{(parseFloat(totalAmount) + parseFloat(vat) + parseFloat(shippingCosts)).toFixed(2)}</p>
      </div>
      {/* Confirmation and Back to Cart buttons */}
      <div className="checkout-buttons">
        <button onClick={handleConfirmation}>Confirm Order</button>
        <Link to="/cart">
          <button>Back to Cart</button>
        </Link>
      </div>
    </div>
  );
  
};

export default CheckoutPage;
