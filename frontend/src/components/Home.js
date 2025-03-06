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
            src="https://freepngimg.com/thumb/wallet/8-wallet-png-image.png"
            alt="Lost Wallet"
          />
        </div>
      </div>

      {/* Second Block */}
      <div className="info-container">
        <h2 className="info-title">How it Works</h2>
        <p className="info-text">
          Our platform helps you report and recover lost items easily. Simply
          post details of lost or found items, and let the community assist in
          reconnecting lost items with their owners.
        </p>
      </div>
    </div>
  );
};

export default Home;
