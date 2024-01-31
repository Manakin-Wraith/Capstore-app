// ProductPage.js
import React, { useState, useEffect } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { useAuth } from './Pages/AuthContext';
import { useCart } from './Pages/CartContext';
import ProductInfoModal from './ProductInfoModal'; // Import the new component
import './ProductPage.css';

const ProductPage = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  // State for managing modal visibility
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Fetch products from the API
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="product-page-container">
      <h1>Welcome, {user ? user.username : 'Guest'}!</h1>
      <div className="product-list">
        {products.map((product) => (
          <Card key={product.id} className="product-item">
            <Card.Body>
              <div className="product-header">
                <Button
                  onClick={() => handleShowModal(product)}
                  className="info-button"
                >
                <p>Info</p>
                </Button>
              </div>
              <Card.Img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <Card.Text className="product-price">Price: R{product.price}</Card.Text>
              <Button
                onClick={() => handleAddToCart(product)}
                className="add-to-cart-button"
              >
                Add to Cart
              </Button>
              <Card.Title className="product-title">{product.title}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Modal for displaying product information */}
      <ProductInfoModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        product={selectedProduct}
      />
    </div>
  );
};

export default ProductPage;
