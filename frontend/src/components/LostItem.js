import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LostItem.css";

const LostItem = () => {
  const [lostItems, setLostItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLostItems = async () => {
      try{
      const response = await fetch("http://localhost:5000/api/reports");
      if(!response.ok){
        throw new Error("Failed to fetch lost items");
      }
      const data =await response.json();
      setLostItems(data);
    }catch(error){
      console.error("Error fetching lost items:", error);
    }
    };

    fetchLostItems();
  },[]);

    

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
  {item.image && <img src={`http://localhost:5000/uploads/${item.image}`} alt="Lost Item" className="item-image" />}
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
