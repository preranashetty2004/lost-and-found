import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-container">
        <h1 className="title">Lost and Found</h1>
      </div>
      <div className="image-container">
        <img src="https://freepngimg.com/thumb/wallet/8-wallet-png-image.png" alt="Lost Wallet" />
      </div>
    </div>
  );
};

export default Home;
