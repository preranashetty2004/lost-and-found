import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./LostItemDetails.css";

const LostItemDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state?.item;

  useEffect(() => {
    const fetchLostItems = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/reports");
        if (!response.ok) {
          throw new Error("Failed to fetch lost items");
        }
        const data = await response.json();
        console.log("Fetched lost items:", data);
        setLostItems(data); // ✅ Remove duplicate call
      } catch (error) {
        console.error("Error fetching lost items:", error.message);
      }
    };
  
    fetchLostItems();
  }, []); // ✅ Ensure dependency array is empty to run only once
  
  return (
    <div className="item-details-page">
      <div className="details-card">
        {/* ✅ Fix: Display only ONE Base64 Image */}
        {item.image ? (
          <img 
            src={`data:image/jpeg;base64,${item.image}`} 
            alt={item.itemName} 
            className="details-image" 
          />
        ) : (
          <p>No image available</p>
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
