// ProductInfoModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ProductInfoModal.css';

const ProductInfoModal = ({ showModal, handleCloseModal, product }) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal} centered className="product-info-modal" backdrop="static">
      <Modal.Header closeButton>
      <Modal.Title className="product-info-modal-title">Product Information</Modal.Title>
      </Modal.Header>
      <Modal.Body className="product-info-content">
        {product && (
          <>
            <p>ID: {product.id}</p>
            <p>Description: {product.description}</p>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal} className="product-info-close">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductInfoModal;

