import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ReportForm from "./components/ReportForm";
import LostItemsPage from "./components/LostItem";
import FoundItemsPage from "./components/FoundItem";

function App() {
  const [lostItems, setLostItems] = useState([]); 
  const [foundItems, setFoundItems] = useState([]);

  return (
    <Router>
      <Navbar /> {/* Ensure the Navbar is visible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/report-form" element={<ReportForm setLostItems={setLostItems} setFoundItems={setFoundItems} />} />
        <Route path="/lost-items" element={<LostItemsPage lostItems={lostItems} />} />
        <Route path="/found-items" element={<FoundItemsPage foundItems={foundItems} />} />
      </Routes>
    </Router>
  );
}

export default App;



