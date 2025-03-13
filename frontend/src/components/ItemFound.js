import React from "react";
import { useLocation } from "react-router-dom";
import "./ItemFound.css";

const ItemFound = () => {
  const location = useLocation();
  const { item } = location.state || {};

  if (!item) {
    return <p className="error-message">No item details available.</p>;
  }

  return (
    <div className="item-found-container">
      <div className="item-image-container">
        {item.imagePreview && <img src={item.imagePreview} alt="Lost Item" className="item-image" />}
      </div>
      <div className="item-details-container">
        <h2>{item.itemName}</h2>
        <p><strong>Category:</strong> {item.category}</p>
        <p><strong>Date Lost:</strong> {item.date}</p>
        <p><strong>Last Seen At:</strong> {item.location}</p>
        <p><strong>Description:</strong> {item.description}</p>
        <p><strong>Contact:</strong> {item.contact}</p>
      </div>
    </div>
  );
};

export default ItemFound;
