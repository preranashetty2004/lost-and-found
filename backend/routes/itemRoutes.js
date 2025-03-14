const express = require("express");
const { reportItem, getItems } = require("../controllers/itemController"); // Ensure correct import
const router = express.Router();

router.post("/report", reportItem);
router.get("/items", getItems);

module.exports = router;
