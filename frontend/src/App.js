import React from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ReportForm from "./components/ReportForm";
import LostItemsPage from "./components/LostItem";
import FoundItemsPage from "./components/FoundItem";
import ItemFound from "./components/ItemFound";
import { useState } from 'react';
import Profile from "./components/Profile";

function App() {
  const [user, setUser] = useState(null);
  const [lostItems, setLostItems] = useState([]); 
  const [foundItems, setFoundItems] = useState([]);

  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/signup" element={<SignUp setUser={setUser} />} /> 
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn user={user} setUser={setUser} />} />
        <Route path="/report-form" element={<ReportForm setLostItems={setLostItems} setFoundItems={setFoundItems} />} />
        <Route path="/lost-items" element={<LostItemsPage lostItems={lostItems} />} />
        <Route path="/found-items" element={<FoundItemsPage foundItems={foundItems} />}/>
        <Route path="/report-form" element={<ReportForm />} />
        <Route path="/lost-item" element={<LostItemsPage />} />
        <Route path="/item-found" element={<ItemFound />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
