const Report = require("../models/Report");
const fs = require("fs");

// Create a new report (Stores image as Base64)
const createReport = async (req, res) => {
  try {
    console.log("Received Request Body:", req.body);
    console.log("Uploaded File:", req.file);

    const { itemName, category, date, location, description, contact } = req.body;

    if (!itemName || !category || !date || !location || !description || !contact) {
      return res.status(400).json({ error: "All fields are required" });
    }

    let imageBase64 = null;
    if (req.file) {
      // Convert image to Base64
      imageBase64 = fs.readFileSync(req.file.path, { encoding: "base64" });

      // Optional: Delete file after conversion
      fs.unlinkSync(req.file.path);
    }

    const newReport = new Report({
      itemName,
      category,
      date: new Date(date),
      location,
      description,
      image: imageBase64, // Store Base64 image in MongoDB
      contact,
    });

    await newReport.save();
    res.status(201).json({ message: "Report submitted successfully", report: newReport });
  } catch (error) {
    console.error("Error saving report:", error);
    res.status(500).json({ error: error.message });
  }
};

// Get all reports (Returns Base64 images)
const getReports = async (req, res) => {
  try {
    const reports = await Report.find().sort({ createdAt: -1 });
    res.status(200).json(reports);
  } catch (error) {
    console.error("Error fetching reports:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createReport, getReports };
