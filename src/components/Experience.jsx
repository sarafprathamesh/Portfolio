import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "../Resources/experience.css";
import moonImage from "../Assets/night-bg.png";

const Experience = () => {
  // Bouncing animation definition
  const bounceAnimation = {
    hidden: {
      opacity: 0,
      y: 150, // Start slightly below
    },
    visible: {
      opacity: 1,
      y: 0, // End at the original position
      transition: {
        duration: 5, // Duration of the animation
        type: "spring", // Spring for bounce effect
        stiffness: 100, // Controls the bounce strength
      },
    },
  };

  return (
    <div className="portfolio-container" id="resume">
      {/* Experience Section with animation */}
      <motion.div
        className="experience-container"
        initial="hidden"
        whileInView="visible"
        variants={bounceAnimation}
        viewport={{ once: false }} // Ensures it triggers when in view, even repeatedly
      >
        <h1 className="section-title">Experience</h1>
        <h1 className="overlay-title-experience">Experience</h1>
        <div className="cards">
          <div className="card">
            <h3>Aug 2024–Present</h3>
            <h4>Senior Developer</h4>
            <p className="subheading">Novius Technologies Pvt. Ltd.</p>
            <p>
              Working as Senior Developer focusing on full-stack web development
              and building modern web applications.
            </p>
            <ul>
              <li>
                Developing applications using React.js, Node.js, and modern JavaScript
              </li>
              <li>
                Working with databases including MySQL and MSSQL
              </li>
              <li>
                Building responsive UI using HTML, CSS and Tailwind
              </li>
            </ul>
          </div>
          <div className="card">
            <h3>April 2023–July 2024</h3>
            <h4>Java Backend Developer</h4>
            <p className="subheading">Orangebits Software Technologies Pvt. Ltd.</p>
            <p>
              Worked as Java Backend Developer specializing in enterprise application
              development using Spring ecosystem.
            </p>
            <ul>
              <li>
                Developed backend services using Java and Spring Boot
              </li>
              <li>
                Implemented data persistence using Hibernate and Spring Data JPA
              </li>
              <li>
                Worked with MySQL databases for data storage and retrieval
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Education Section with animation */}
      <motion.div
        className="education-container"
        initial="hidden"
        whileInView="visible"
        variants={bounceAnimation}
        viewport={{ once: false }} // Ensures it triggers when in view, even repeatedly
      >
        <h1 className="section-title">Education</h1>
        <h1 className="overlay-title-education">Education</h1>
        <div className="cards">
          <div className="card">
            <h3>2022–2024</h3>
            <h4>PG-DAC (C-DAC)</h4>
            <p className="subheading">C-DAC</p>
            <p>Grade: First class distinction.</p>
          </div>
          <div className="card">
            <h3>2019–2022</h3>
            <h4>Bachelor of Engineering</h4>
            <p className="subheading">SPPU University</p>
            <p>Grade: First class distinction.</p>
          </div>
        </div>
        <div className="download-section">
          <a 
            href="https://drive.google.com/uc?export=download&id=1W56GzmAvuvewjA1g9A9UNnHp9BxdzBru" 
            target="_blank" 
            rel="noopener noreferrer"
            className="download-button"
            style={{ textDecoration: 'none' }}
          >
            Download CV
          </a>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div
        className="stats-container"
        style={{
          background: `url(${moonImage}) no-repeat center center/cover`,
          height: "400px",
        }}
      >
        <div className="stats-cards">
          <div className="stats-card">
            <h3>20</h3>
            <p>Achievements</p>
          </div>
          <div className="stats-card">
            <h3>50</h3>
            <p>Artworks</p>
          </div>
        </div>
        <div className="cta-container">
          <h2>Here's my</h2>
          <button className="github-button">GitHub</button>
          <p>I love to code & create awesome artworks.</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
