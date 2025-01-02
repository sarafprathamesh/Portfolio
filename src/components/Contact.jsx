import React from "react";
import "../Resources/contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h1>Contact Me</h1>
      <p>Below are the details to reach out to me!</p>
      <div className="contact-grid">
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>ADDRESS</h3>
          <p>Rahatani, Pune</p>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <h3>CONTACT NUMBER</h3>
          <a href="tel:+917020251488">
            <p>+91 7020251488</p>
          </a>
        </div>

        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <h3>EMAIL ADDRESS</h3>
          <a href="mailto:saraf.prathamesh22@gmail.com">
            <p>saraf.prathamesh22@gmail.com</p>
          </a>
        </div>

        <div className="contact-item">
          <FaFileDownload className="contact-icon" />
          <h3>DOWNLOAD RESUME</h3>
          <p>
            <a 
              href="https://drive.google.com/uc?export=download&id=1W56GzmAvuvewjA1g9A9UNnHp9BxdzBru" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
