import React from 'react';
import { Modal, Button } from 'react-bootstrap'; // Importing necessary components from React Bootstrap
import './ProductInfoModal.css'; // Importing styles

// Functional component ProductInfoModal with destructured props
const ProductInfoModal = ({ showModal, handleCloseModal, product }) => {
  return (
    // Modal component with specified props
    <Modal show={showModal} onHide={handleCloseModal} centered className="product-info-modal" backdrop="static">
      {/* Modal header with a close button */}
      <Modal.Header closeButton>
        <Modal.Title className="product-info-modal-title">Product Information</Modal.Title>
      </Modal.Header>

      {/* Modal body containing product information */}
      <Modal.Body className="product-info-content">
        {product && (
          <>
            <p>ID: {product.id}</p>
            <p>Description: {product.description}</p>
          </>
        )}
      </Modal.Body>

      {/* Modal footer with a close button */}
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal} className="product-info-close">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

// Exporting the ProductInfoModal component
export default ProductInfoModal;
