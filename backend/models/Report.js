const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  category: { type: String, enum: ["lost", "found"], required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
  contact: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
