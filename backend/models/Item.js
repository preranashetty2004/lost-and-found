const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    itemName: String,
    category: String,
    date: Date,
    location: String,
    description: String,
    image: String,
    contact: String,

 });

module.exports = mongoose.model('Item', ItemSchema);
