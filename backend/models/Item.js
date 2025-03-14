const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    itemName: { type: String, required: true },
    category: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }, // Ensure image is stored as a Base64 string
    contact: { type: String, required: true },
});

module.exports = mongoose.model('Item', ItemSchema);
