import React from 'react';
import Header from "./components/Navbar"; // Import Header component
import Home from "./components/Home"; // Import About component
import About from "./components/About"; // Import About component
import Resume from "./components/Resume"; // Import About component
import Experience from "./components/Experience"; // Import About component import Education from "./components/Education"; // Import About component
import Contact from "./components/Contact"; // Import About component import Education from "./components/Education"; // Import About component
import MessageMe from "./components/MessageMe"; // Import About component import Education from "./components/Education"; // Import About component
import './App.css'; // Import global styles


function App() {
  return (
    <div className="App">
      {/* Render the Header and About components */}
      <Header />
      <Home />
      <About />
      <Resume /> 
      <Experience />
      <Contact />
      <MessageMe />
    </div>
  );
}

export default App;
