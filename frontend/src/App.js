import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ReportForm from "./components/ReportForm";

function App() {
  return (
    <Router>
      <Navbar /> {/* Ensure the Navbar is visible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Fixed the missing closing tag */}
        <Route path="/report-form" element={<ReportForm />} />
      </Routes>
    </Router>
  );
}

export default App;
