import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await fetch("http://localhost:5000/api/report", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("Item reported successfully!");
        navigate("/lost-item");
      }
    } catch (error) {
      console.error("Error reporting item:", error);
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

    // Navigate to Lost Items page
    navigate("/lost-item");

    // Force page reload to reflect changes immediately
    window.location.reload();
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
          <option value="">CATEGORY</option>
          <option value="lost">LOST</option>
          <option value="found">FOUND</option>
        </select>

        <input type="date" name="date" value={formData.date} onChange={handleChange} required />

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
