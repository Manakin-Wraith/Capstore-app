// CartPage.js
import React, { useState } from 'react';
import { useCart } from './CartContext';
import { Container, ListGroup, Image, Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './CartPage.css';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const [selectedShipping, setSelectedShipping] = useState('standard');
  const history = useHistory();

  const handleShipmentChange = (e) => {
    setSelectedShipping(e.target.value);
  };

  const handleCheckout = () => {
    // Extracting relevant information from the cart
    const productDetails = cart.map(item => ({
      id: item.id,
      title: item.title,
      price: item.price,
    }));
  
    // Calculate the total cost
    const totalAmount = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  
    // Calculate VAT (15%)
    const vat = (totalAmount * 0.15).toFixed(2);
  
    // Set initial shipping cost to '0'
  let shippingCosts = 0;

  // Update shipping cost based on the selected shipping method
  if (selectedShipping === 'express') {
    shippingCosts = 200;
  } else if (selectedShipping === 'standard') {
    shippingCosts = 80;
  }
    // Navigate to CheckoutPage with relevant information
    history.push({
      pathname: '/checkout',
      state: {
        products: productDetails,
        totalAmount,
        vat,
        shippingCosts: shippingCosts, // Assuming standard shipping by default
      },
    });
  };

  const handleHelp = () => {
    // Implement your help logic here, such as displaying a modal or redirecting to a help page.
    alert('Redirecting to help page...');
  };

  // Define totalCost here, or fetch it from your data source
  const totalCost = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <Container className="cart-page-container">
      {/* Display the total cost */}
      <div className="total-section">
        <p className="total-label">Total:</p>
        <p className="total-amount">R{totalCost}</p>
      </div>

      <h2>Your Cart</h2>
      <ListGroup className="cart-list">
        {cart.map((item) => (
          <ListGroup.Item key={item.id} className="cart-item">
            <div className="item-details">
              <h3 className="item-title">{item.title}</h3>
              <p className="item-price">R{item.price}</p>
            </div>
            <Image src={item.image} alt={item.title} className="item-image" thumbnail />
            <Button
              variant="danger"
              onClick={() => removeFromCart(item)}
              className="remove-button"
            >
              Remove
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>

      {/* Shipment selection */}
      <div className="shipment-section">
        <Form.Group controlId="shipment">
          <Form.Label>Select Shipment Method:</Form.Label>
          <Form.Control
            as="select"
            value={selectedShipping}
            onChange={handleShipmentChange}
          >
            <option value="standard">Standard Shipping</option>
            <option value="express">Express Shipping</option>
            {/* Add more shipping options as needed */}
          </Form.Control>
        </Form.Group>
      </div>

      {/* Checkout and Help buttons */}
      <div className="buttons-section">
        <Button onClick={handleHelp} variant="info" className="help-button">
          Need Help?
        </Button>
        <Button onClick={handleCheckout} variant="primary" className="checkout-button">
          Checkout
        </Button>
      </div>
    </Container>
  );
};

export default CartPage;
