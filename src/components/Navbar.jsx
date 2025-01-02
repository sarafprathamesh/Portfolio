import React, { useState } from "react";
import { Link } from "react-scroll"; // Import the Link component from react-scroll
import "../Resources/navbar.css"; // Import Header-specific styles

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Prathamesh Saraf</h1>
        <nav className="navbar">
          <ul className={`nav-links ${isNavOpen ? "active" : ""}`}>
            {/* Use the react-scroll Link component for smooth scrolling */}
            <li>
              <Link
                to="home" // The section's ID you want to scroll to
                smooth={true} // Enable smooth scrolling
                duration={500} // Scroll duration (in ms)
                offset={-70} // Adjust offset (to prevent content being hidden behind a sticky header)
                spy={true} // This makes the navbar link active when in the section
                exact="true" // Scroll to exact position
                className="nav-link"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                exact="true"
                className="nav-link"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="resume"
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                exact="true"
                className="nav-link"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                exact="true"
                className="nav-link"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="message"
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                exact="true"
                className="nav-link"
              >
                Message Me
              </Link>
            </li>
          </ul>
          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            onClick={toggleNav}
          >
            <span className="hamburger"></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
