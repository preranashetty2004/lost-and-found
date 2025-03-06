import React, { useState, useEffect } from "react";
import "./LostItem.css";

const LostItem = () => {
  const [lostItems, setLostItems] = useState([]);

  useEffect(() => {
    const fetchLostItems = () => {
      const savedItems = JSON.parse(localStorage.getItem("lostItems")) || [];
      setLostItems(savedItems);
    };

    fetchLostItems();

    // Listen for storage changes
    window.addEventListener("storage", fetchLostItems);

    return () => {
      window.removeEventListener("storage", fetchLostItems);
    };
  }, []);

  return (
    <div className="cards-container">
      {lostItems.length === 0 ? (
        <p className="no-items">No lost items reported yet.</p>
      ) : (
        lostItems.map((item, index) => (
          <div key={index} className="item-card">
            {item.imagePreview && (
              <img src={item.imagePreview} alt="Lost Item" className="item-image" />
            )}
            <div className="item-details">
              <h3 className="item-name">{item.itemName}</h3>
              <p className="description">{item.description}</p>
              <p className="info"><strong>Last Seen:</strong> {item.location}, on {item.date}</p>
              <p className="contact"><strong>Contact:</strong> {item.contact}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default LostItem;
