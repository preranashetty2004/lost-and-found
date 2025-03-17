const express = require("express");
const router = express.Router();
const { createReport, getReports } = require("../controllers/reportController");
const upload = require("../middleware/multerMiddleware");

// Routes
router.post("/report", upload.single("image"), createReport);
router.get("/reports", getReports);

module.exports = router;
