import React from "react";
import "../Resources/about.css";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { name: "Java", percentage: 80 },
    { name: "SQL", percentage: 80 },
    { name: "React Js", percentage: 70 },
    { name: "Node Js", percentage: 70 },
    { name: "Javascript", percentage: 70 },
  ];

  // Animation variants for Framer Motion
  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div className="about-page" id="about">
      <div className="about-container">
        {/* Left Section with Framer Motion animation */}
        <motion.div
          className="about-left"
          variants={leftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }} // Ensure the animation triggers when part of the element is in view
        >
          <div className="profile-image">
            {/* Replace the src below with your image */}
            <img
              // src={Profile}
              alt="Prathamesh Saraf"
              style={{
                height: "150px", // Set height for the image
                width: "100%", // Ensure the image spans the full width of the container
                objectFit: "contain", // Ensures the image covers the div area without distortion
                borderRadius: "10px", // Optional: rounded corners for the image
              }}
            />
          </div>
          <div className="personal-info">
            <p>
              <strong>Name:</strong> Prathamesh Saraf
            </p>
            <p>
              <strong>Job Role:</strong> Software Developer
            </p>
            <p>
              <strong>Address:</strong> Rahatani, Pune
            </p>
          </div>
          <div className="skills-section">
            <h3>Skills</h3>
            {skills.map((skill, index) => (
              <div key={index} className="skill">
                <p>{skill.name}</p>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Section with Framer Motion animation */}
        <motion.div
          className="about-right"
          variants={rightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }} // Similar change for right section animation
        >
          <h2>About Me</h2>
          <p className="about-summary">
            I am a dedicated Software Developer with expertise in web
            development and backend technologies. Currently working as a
            full-stack developer, I specialize in building robust applications
            using Java, React, Node.js, and SQL. I am passionate about creating
            seamless user experiences and solving complex technical challenges.
            With my solid background in both frontend and backend development, I
            am eager to contribute to innovative projects that drive business
            success.
          </p>
          <div className="details">
            <div className="detail-item">
              <strong>Profile:</strong>
              <span>Full-Stack Developer & Software Engineer</span>
            </div>
            <div className="detail-item">
              <strong>Domain:</strong>
              <span>Web Development & Software Engineering</span>
            </div>
            <div className="detail-item">
              <strong>Education:</strong>
              <span>PG-Diploma in Advance Computing (C-DAC)</span>
            </div>
            <div className="detail-item">
              <strong>Language:</strong>
              <span>English, Hindi, Marathi</span>
            </div>
            <div className="detail-item">
              <strong>Other Skills:</strong>
              <span>
                Strong problem-solving skills, Agile development experience,
                Team collaboration, Excellent communication, and a deep
                understanding of algorithms and data structures.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
