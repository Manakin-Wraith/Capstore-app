import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, setProducts } from './Actions/productActions';
import ProductInfoModal from './ProductInfoModal';
import { useAuth } from './Pages/AuthContext'; // Make sure to import useAuth
import './ProductPage.css';

const ProductPage = () => {
  const { user } = useAuth();
  const products = useSelector((state) => state.product.products); // Adjust the path
  const dispatch = useDispatch();

  // State for managing modal visibility
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Fetch products from the API and dispatch the setProducts action
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => dispatch(setProducts(json))); // Use the setProducts function here
  }, [dispatch]);

  const handleAddToCart = (product) => {
    // Dispatch the addToCart action
    dispatch(addToCart(product));
  };

  const handleShowModal = (product) => {
    // Set the selected product and show the modal
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    // Hide the modal when the close button is clicked
    setShowModal(false);
  };

  return (
    <div className="product-page-container">
      {/* Display a welcome message based on user authentication */}
      <h1>Welcome, {user ? user.username : 'Guest'}!</h1>
      <div className="product-list">
        {/* Map through products and display them as cards */}
        {products && products.map((product) => (
          <Card key={product.id} className="product-item">
            <Card.Body>
              <div className="product-header">
                {/* Button to show additional product information */}
                <Button
                  onClick={() => handleShowModal(product)}
                  className="info-button"
                >
                  <p className="info-text">Info</p>
                </Button>
              </div>
              {/* Display product image, price, and add to cart button */}
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
