// Importing necessary dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Container, Button } from 'react-bootstrap'; // Importing Bootstrap components
import { navigateBackToCart } from '../Actions/helpActions'; // Importing help-related actions
import { useHistory } from 'react-router-dom';
import './HelpPage.css'; // Importing the styles for the HelpPage

// HelpPage component responsible for displaying shipping information and providing a Back to Cart option
const HelpPage = ({ navigateBackToCart }) => {
  const history = useHistory();

  // Function to handle the Back to Cart button click
  const handleBackToCart = () => {
    // Dispatch the action to update the help state
    navigateBackToCart();

    // Handle the navigation logic in the component
    history.push('/cart');
  };

  // Rendering the HelpPage component
  return (
    <Container className="help-page-container">
      <h2>Shipping Information</h2>

      {/* Shipping option for Standard Shipping */}
      <div className="shipping-option">
        <h3>Standard Shipping</h3>
        <p>
          Our standard shipping option is a reliable and cost-effective method. Your order will
          typically be delivered within 5-7 business days. The shipping cost for standard shipping
          is R80.
        </p>
      </div>

      {/* Shipping option for Express Shipping */}
      <div className="shipping-option">
        <h3>Express Shipping</h3>
        <p>
          Choose express shipping for a faster delivery option. Your order will be prioritized, and
          you can expect delivery within 2-3 business days. The shipping cost for express shipping
          is R200.
        </p>
      </div>

      {/* Back to Cart button */}
      <Button onClick={handleBackToCart} variant="primary">
        Back to Cart
      </Button>
    </Container>
  );
};

// Mapping actions to props
const mapDispatchToProps = {
  navigateBackToCart,
};

// Connecting the component to the Redux store and exporting it
export default connect(null, mapDispatchToProps)(HelpPage);
