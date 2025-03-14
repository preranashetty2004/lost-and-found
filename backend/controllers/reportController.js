const Report = require("../models/Report");

// Create a new report
const createReport = async (req, res) => {
  try {
    const { itemName, category, date, location, description, contact } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const newReport = new Report({
      itemName,
      category,
      date,
      location,
      description,
      imageUrl,
      contact,
    });

    await newReport.save();
    res.status(201).json({ message: "Report submitted successfully", report: newReport });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get all reports
const getReports = async (req, res) => {
  try {
    const reports = await Report.find().sort({ createdAt: -1 });
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { createReport, getReports };
