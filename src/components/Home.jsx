import React, { useState, useEffect, useRef } from "react";
import "../Resources/home.css"; // Link to your CSS file
// import Profile from "../Assets/profile-removebg.png";

const Home = () => {
  const strings = ["Software Developer", "Frontend Developer", "Web Developer","Java Developer","Full Stack Developer"]; // Strings to cycle through
  const [displayText, setDisplayText] = useState(""); // Text being typed
  const [currentStringIndex, setCurrentStringIndex] = useState(0); // Index of current string
  const [isTyping, setIsTyping] = useState(true); // Track if typing is ongoing

  // Add a ref to track and cleanup timeouts
  const timeoutRef = useRef(null);

  // Typing animation function
  const typeText = (textArray, textIndex = 0, charIndex = 0) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (charIndex < textArray[textIndex].length) {
      setDisplayText(textArray[textIndex].substring(0, charIndex + 1));
      timeoutRef.current = setTimeout(
        () => typeText(textArray, textIndex, charIndex + 1),
        100
      );
    } else {
      timeoutRef.current = setTimeout(() => {
        setDisplayText("");
        setIsTyping(false);
      }, 1000);
    }
  };

  // Add cleanup effect
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Cycle through the strings
  useEffect(() => {
    if (!isTyping) {
      const nextIndex = (currentStringIndex + 1) % strings.length;
      setCurrentStringIndex(nextIndex); // Move to the next string
      setIsTyping(true); // Start typing again
    }
  }, [isTyping]);

  useEffect(() => {
    if (isTyping) {
      typeText(strings, currentStringIndex, 0); // Trigger typing animation
    }
  }, [isTyping, currentStringIndex]); // Re-trigger typing when string or isTyping changes

  return (
    <div className="home-container" id="home">
      <div className="about-content">
        <h2>Hello!</h2>
        <h1>
          I'm <span className="highlight">Prathamesh Saraf</span>
        </h1>
        <h2>{displayText}</h2> {/* Display typed text */}
        {/* Buttons for Instagram and LinkedIn */}
        <div className="buttons">
          <a
            href="https://www.instagram.com/prathamesh_saraf_?igsh=MWRiOGU1NnRnZHZmbw=="
            className="button instagram"
          >
            My Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/prathamesh-saraf-46681b177/"
            className="button linkedin"
          >
            My LinkedIn
          </a>
        </div>
      </div>
      <div className="about-image">
        <img
          // src={Profile}
          alt="Prathamesh Saraf"
          style={{
            height: "450px", // Set height for the image
            width: "100%", // Ensure the image spans the full width of the container
            objectFit: "contain", // Ensures the image covers the div area without distortion
            borderRadius: "8px", // Optional: rounded corners for the image
          }}
        />
      </div>
    </div>
  );
};

export default Home;