import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ReportForm from "./components/ReportForm";
import LostItemsPage from "./components/LostItem";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report-form" element={<ReportForm />} />
        <Route path="/lost-item" element={<LostItemsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
