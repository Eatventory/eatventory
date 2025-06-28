import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

interface IngrediModalProps {
  show: boolean;
  onHide: () => void;
  itemName: string;
  expiryDate: string;
  imageUrl: string;
}

const IngrediModal: React.FC<IngrediModalProps> = ({
  show,
  onHide,
  itemName,
  expiryDate,
  imageUrl,
}) => {
  const [quantity, setQuantity] = useState<number>(1);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Body className="text-center">
        <button
          className="btn-close position-absolute top-0 end-0 m-3"
          onClick={onHide}
          aria-label="Close"
        ></button>

        {/* <img
          src={imageUrl}
          alt={itemName}
          className="rounded-circle my-3"
          style={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
          }}
        /> */}
        <span style={{ fontSize: "100px" }}>{imageUrl}</span>

        <h4 className="fw-bold">{itemName}</h4>
        <p className="text-muted">유통기한 : {expiryDate}</p>

        <div
          className="d-flex justify-content-center align-items-center my-3"
          style={{ fontSize: "1.5rem" }}
        >
          <button
            className="btn px-3 fs-3"
            onClick={decrease}
          >
            <i className="ri-subtract-line"></i>
          </button>
          <span className="mx-3">{quantity}</span>
          <button
            className="btn px-3 fs-3"
            onClick={increase}
          >
            +
          </button>
        </div>

        <Button variant="dark" className="rounded-pill px-4 mt-2">
          수정하기
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default IngrediModal;
