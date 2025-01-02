import React, { useState } from "react";
import "../Resources/messageme.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import emailjs from "emailjs-com"; // Import EmailJS

const MessageMe = () => {
  // State to handle form input
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Status message (success or error)

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      setStatus("Please fill out all required fields.");
      return;
    }
  
    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_h0jw3tt", // Your EmailJS service ID
        "template_u2ie52j", // Your EmailJS template ID
        e.target, // Reference the form (e.target)
        "9942E6qm4u5Vw8kqH" // Your EmailJS public key (user ID)
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!"); // Success message
        },
        (error) => {
          console.log(error);  // Log the complete error object
          setStatus(`Something went wrong. Please try again. Error: ${error.text}`);
        }
      );
  
    // Clear the form after submission (optional)
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };
  

  return (
    <div className="message-container" id="message">
      <h1>Have a Question?</h1>
      <form className="message-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name <span>*</span></label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-row">
          <div className="form-group">
            <label htmlFor="email">Email <span>*</span></label>
            <div className="input-with-icon">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <div className="input-with-icon">
              <FaPhoneAlt className="input-icon" />
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject <span>*</span></label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter the subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message <span>*</span></label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>

      {/* Display status message */}
      {status && <div className="status-message">{status}</div>}
    </div>
  );
};

export default MessageMe;
