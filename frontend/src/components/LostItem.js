import React from "react";
import { Link } from "react-router-dom";

const LostItem = ({ lostItems }) => {
  return (
    <div>
      <h2>Lost Items</h2>
      <Link to="/">Report Another Item</Link>
      <ul>
        {lostItems.length === 0 ? (
          <p>No lost items reported yet.</p>
        ) : (
          lostItems.map((item, index) => (
            <li key={index}>
              <strong>{item.itemName}</strong> - {item.description} <br />
              <small>Last seen at: {item.location}, on {item.date}</small><br />
              <strong>Contact:</strong> {item.contact}
              {item.imagePreview && <img src={item.imagePreview} alt="Lost Item" style={{ width: "100px", marginTop: "10px" }} />}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default LostItem;
