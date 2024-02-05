// HelpPage.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'; // Import the useHistory hook
import './HelpPage.css';

const HelpPage = () => {
  const history = useHistory(); // Initialize the useHistory hook

  const handleBackToCart = () => {
    // Navigate back to the CartPage when the "Back to Cart" button is clicked
    history.push('/cart');
  };

  return (
    <Container className="help-page-container">
      <h2>Shipping Information</h2>

      <div className="shipping-option">
        <h3>Standard Shipping</h3>
        <p>
          Our standard shipping option is a reliable and cost-effective method. Your order will
          typically be delivered within 5-7 business days. The shipping cost for standard shipping
          is R80.
        </p>
      </div>

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

export default HelpPage;