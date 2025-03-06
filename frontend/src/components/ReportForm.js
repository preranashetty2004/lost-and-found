import React, { useState } from "react";
import Navbar from "./Navbar";
import "./ReportForm.css";

const ReportForm = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    date: "",
    location: "",
    description: "",
    image: null,
    imagePreview: null,
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: file, imagePreview: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    // Example: Send formData to backend
    const formDataToSend = new FormData();
    formDataToSend.append("itemName", formData.itemName);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("date", formData.date);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("image", formData.image);
    formDataToSend.append("contact", formData.contact);

    // Send formDataToSend to the backend API
  };

  return (
    <div className="form-container">
      <form className="report-form" onSubmit={handleSubmit}>
        <h2>Report Lost/Found Item</h2>

        <input
          type="text"
          name="itemName"
          placeholder="ITEM NAME"
          value={formData.itemName}
          onChange={handleChange}
          required
        />

        <select name="category" value={formData.category} onChange={handleChange} required>
          <option value="">CATEGORY (DROPDOWN)</option>
          <option value="lost">LOST</option>
          <option value="found">FOUND</option>
          {/* <option value="documents">Documents</option>
          <option value="other">Other</option> */}
        </select>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="LOCATION"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="DESCRIPTION"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <input type="file" accept="image/*" onChange={handleFileChange} required />

        {formData.imagePreview && (
          <div className="image-preview">
            <img src={formData.imagePreview} alt="Preview" />
          </div>
        )}

        <input
          type="text"
          name="contact"
          placeholder="CONTACT"
          value={formData.contact}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReportForm;
