const express = require("express");
const upload = require("../middleware/upload");
const authMiddleware = require('../middleware/authMiddleware');
const { reportItem, getItems } = require("../controllers/itemController");
const router = express.Router();

router.post("/report", upload.single("image"), reportItem);
router.get("/items", getItems);


module.exports = router;