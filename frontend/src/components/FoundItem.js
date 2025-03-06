import React from "react";
import "./FoundItem.css"; // Create a CSS file for styling

const FoundItemsPage = ({ foundItems }) => {
  return (
    <div className="items-container">
      <h2>Found Items</h2>
      {foundItems.length === 0 ? (
        <p>No items found yet.</p>
      ) : (
        <ul className="items-list">
          {foundItems.map((item, index) => (
            <li key={index} className="item-card">
              {item.imagePreview && <img src={item.imagePreview} alt={item.itemName} />}
              <h3>{item.itemName}</h3>
              <p><strong>Date:</strong> {item.date}</p>
              <p><strong>Location:</strong> {item.location}</p>
              <p><strong>Description:</strong> {item.description}</p>
              <p><strong>Contact:</strong> {item.contact}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FoundItemsPage;
