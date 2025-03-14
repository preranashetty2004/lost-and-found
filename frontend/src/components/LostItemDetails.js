import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./LostItemDetails.css";

const LostItemDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state?.item;

  if (!item) {
    return <p>No item details available.</p>;
  }

  return (
    <div className="item-details-page">
      <div className="details-card">
        {item.imagePreview && (
          <img src={item.imagePreview} alt={item.itemName} className="details-image" />
        )}
        <h2 className="details-title">{item.itemName}</h2>
        <p className="details-description"><strong>Description:</strong> {item.description}</p>
        <p className="details-info"><strong>Category:</strong> {item.category}</p>
        <p className="details-info"><strong>Date:</strong> {item.date}</p>
        <p className="details-info"><strong>Location:</strong> {item.location}</p>
        <p className="details-contact"><strong>Contact:</strong> {item.contact}</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default LostItemDetails;
