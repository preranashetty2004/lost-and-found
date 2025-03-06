import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ReportForm from "./components/ReportForm";

function App() {
  return (
    <Router>
      <Navbar />  {/* Ensure the Navbar is visible on all pages */}
      <Routes>
      <Route path="/report-form" element={<ReportForm />} />
      </Routes>
    </Router>
  );
}

export default App;

<<<<<<< HEAD
=======

>>>>>>> 9849dfe044e13a4e247e182462b002659226e8ac
