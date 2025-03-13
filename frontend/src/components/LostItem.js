import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LostItem.css";

const LostItem = () => {
  const [lostItems, setLostItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLostItems = () => {
      const savedItems = JSON.parse(localStorage.getItem("lostItems")) || [];
      setLostItems(savedItems);
    };

    fetchLostItems();
    window.addEventListener("storage", fetchLostItems);

    return () => {
      window.removeEventListener("storage", fetchLostItems);
    };
  }, []);

  const handleCardClick = (item) => {
    navigate("/item-found", { state: { item } });
  };

  return (
    <div className="cards-container">
      {lostItems.length === 0 ? (
        <p className="no-items">No lost items reported yet.</p>
      ) : (
        lostItems.map((item, index) => (
          <div key={index} className="item-card" onClick={() => handleCardClick(item)}>
            {item.imagePreview && <img src={item.imagePreview} alt="Lost Item" className="item-image" />}
            <div className="item-details">
              <h3 className="item-name">{item.itemName}</h3>
              <p className="info">
                <strong>Last Seen:</strong> {item.location}, on {item.date}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default LostItem;
