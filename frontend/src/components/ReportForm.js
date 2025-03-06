import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ReportForm.css";

const ReportForm = ({ setLostItems }) => {
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

  const navigate = useNavigate();

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

    if (formData.category === "lost") {
      setLostItems((prevItems) => [...prevItems, formData]); // ✅ Update state
    }

    // Reset form
    setFormData({
      itemName: "",
      category: "",
      date: "",
      location: "",
      description: "",
      image: null,
      imagePreview: null,
      contact: "",
    });

    navigate("/lost-items"); // ✅ Redirect to Lost Items Page
  };

  return (
    <div className="form-container">
      <form className="report-form" onSubmit={handleSubmit}>
        <h2>Report Lost/Found Item</h2>

        <input type="text" name="itemName" placeholder="ITEM NAME" value={formData.itemName} onChange={handleChange} required />

        <select name="category" value={formData.category} onChange={handleChange} required>
          <option value="">CATEGORY</option>
          <option value="lost">LOST</option>
          <option value="found">FOUND</option>
        </select>

        <input type="date" name="date" value={formData.date} onChange={handleChange} required />

        <input type="text" name="location" placeholder="LOCATION" value={formData.location} onChange={handleChange} required />

        <textarea name="description" placeholder="DESCRIPTION" value={formData.description} onChange={handleChange} required />

        <input type="file" accept="image/*" onChange={handleFileChange} required />

        {formData.imagePreview && (
          <div className="image-preview">
            <img src={formData.imagePreview} alt="Preview" />
          </div>
        )}

        <input type="text" name="contact" placeholder="CONTACT" value={formData.contact} onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReportForm;

