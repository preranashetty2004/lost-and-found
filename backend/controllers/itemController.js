const Item = require("../models/Item");

// Report Item
exports.reportItem = async (req, res) => {
    try {
        const { itemName, category, date, location, description, image, contact } = req.body;

        if (!itemName || !category || !date || !location || !description || !image || !contact) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newItem = new Item({ itemName, category, date, location, description, image, contact });

        await newItem.save();
        res.status(201).json({ message: "Item reported successfully" });

    } catch (err) {
        console.error("Error reporting item:", err);
        res.status(500).json({ error: "Failed to report item" });
    }
};

// Get all items
exports.getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch items" });
    }
};
