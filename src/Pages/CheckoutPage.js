// Importing necessary dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { confirmOrder } from '../Actions/checkoutActions'; // Importing checkout-related actions
import './CheckoutPage.css'; // Importing the styles for the CheckoutPage

// CheckoutPage component responsible for displaying checkout information and handling order confirmation
const CheckoutPage = ({ location, confirmOrder, orderConfirmed }) => {
  // Extracting relevant information from the location state
  const { totalAmount, vat, shippingCosts } = location.state;

  // Function to handle order confirmation
  const handleConfirmation = () => {
    // Dispatch the confirmOrder action
    confirmOrder();
    // Implement any additional confirmation logic here
    alert('Order confirmed!');
  };


  // Rendering the CheckoutPage component
  return (
    <div className="checkout-page-container">
      <h2>Checkout</h2>
      {/* Display relevant information: total amount, VAT, shipping costs */}
      <div className="checkout-details">
        <p>Total Amount: R{totalAmount}</p>
        <p>VAT (15%): R{vat}</p>
        <p>Shipping Costs: R{shippingCosts}</p>
        <p className="grand-total">Grand Total: R{(parseFloat(totalAmount) + parseFloat(vat) + parseFloat(shippingCosts)).toFixed(2)}</p>
      </div>
      {/* Confirmation and Back to Cart buttons */}
      <div className="checkout-buttons">
        {/* Confirm Order button */}
        <button onClick={handleConfirmation}>Confirm Order</button>
        {/* Back to Cart button with Link */}
        <Link to="/cart">
          <button>Back to Cart</button>
        </Link>
      </div>
    </div>
  );
};

// Mapping state to props
const mapStateToProps = (state) => ({
  orderConfirmed: state.checkout.orderConfirmed,
});

// Mapping actions to props
const mapDispatchToProps = {
  confirmOrder,
};

// Connecting the component to the Redux store and exporting it
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
