import React from 'react';
import { motion } from 'framer-motion';
import "../Resources/resume.css";

const Resume = () => {
  // Animation variants for Framer Motion
  const resumeVariants = {
    hidden: { opacity: 0, y: 100 }, // Start with opacity 0 and position off-screen (centered)
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // Fade in and come to center position
  };

  return (
    <motion.div
      className="resume-container"
      id="resume"
      variants={resumeVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }} // Trigger animation only once when it comes into view
    >
      <h1 className="main-title">Resume</h1>
      <h1 className="overlay-title">Resume</h1>
      <p className="description">
        Experienced Software Developer with a strong background in full-stack web development, currently at Novius Technologies.
        Proficient in <strong>Java</strong>, <strong>SQL</strong>, and <strong>JavaScript</strong>, with expertise in <strong>React JS</strong> and <strong>Node JS</strong>.
        Skilled in crafting visually appealing and highly functional webpages using <strong>HTML</strong>, <strong>CSS</strong>, <strong>Tailwind</strong>, <strong>Bootstrap</strong>, and <strong>Material UI</strong>.
        Passionate about solving complex problems and developing high-quality web applications. I am always excited to contribute to innovative and impactful projects.
      </p>
    </motion.div>
  );
};

export default Resume;
