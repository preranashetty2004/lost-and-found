const express = require("express");
const router = express.Router();
const { createReport, getReports } = require("../controllers/reportController");
const upload = require("../middleware/multerMiddleware");

// Routes
router.post("/report", upload.single("image"), (req, res, next) => {
    console.log("✅ POST /api/report hit");  // Debugging log
    next();
  }, createReport);
  
  router.get("/reports", (req, res, next) => {
    console.log("✅ GET /api/reports hit");  // Debugging log
    next();
  }, getReports);
  

module.exports = router;
