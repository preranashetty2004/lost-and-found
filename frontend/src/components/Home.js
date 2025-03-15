import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      {/* First Block */}
      <div className="home-container">
        <div className="text-container">
          <h1 className="title">Welcome to Lost and Found Portal</h1>
        </div>
        <div className="image-container">
          <img
            src="https://i.pinimg.com/736x/40/41/ef/4041ef4e4bddd64152868a1295682bc9.jpg"
            alt="Lost Wallet"
          />
        </div>
      </div>

      {/* Second Block - How It Works */}
      <div className="info-container">
        <h2 className="info-title">How It Works</h2>
        <div className="info-blocks">
          <div className="info-card">
            <h3>Report Lost Item</h3>
            <p>Submit details and images of lost items, including location and description.</p>
          </div>
          <div className="info-card">
            <h3>Search Found Items</h3>
            <p>Browse lost items reported by others and check if someone found yours.</p>
          </div>
          <div className="info-card">
            <h3>Claim & Connect</h3>
            <p>Contact the person who found your item and arrange a safe return.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
