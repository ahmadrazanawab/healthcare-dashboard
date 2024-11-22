import React, { useState } from "react";
import "./Dashboard.css";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", age: "", file: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted successfully!");
    setFormData({ name: "", age: "", file: "" });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter your age"
          required
        />

        <label htmlFor="file">Upload File:</label>
        <input
          type="file"
          id="file"
          name="file"
          onChange={handleChange}
          accept=".pdf, .docx, .png, .jpg"
          required
        />

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
