import React from "react";
import './styles.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/School/Projects";
import Resume from "./Pages/School/Resume";
import About from "./Pages/About";
import Posts from "./Pages/Posts";


function App() {
  return (
    <Router basename="/website">
      <div>
        <nav>
          <div className="flex">
            <Link to="/" className="flex  items-center transform scale-110 hover:scale-125 transition duration-300">
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="h-12 w-auto" />
            </Link>

              <h1 className="nav-heading">My Portfolio</h1>
          </div>
          <div className="horizontal-spacing">
            <Link to="/projects" className="font-normal text-white hover:font-bold hover:text-purple-500 transition duration-300">Projects</Link>
            <Link to="/resume" className="font-normal text-white hover:font-bold hover:text-purple-600 transition duration-300">Resume</Link>
            <Link to="/about" className="font-normal text-white hover:font-bold hover:text-purple-600 transition duration-300">About</Link>
          </div>
        </nav>

        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </div>
        <footer className="footer-section">
        <div>
            <p className="footer-credit">Made by Evan Wells</p>
            <p className="footer-note">Computer Science Student, Nipissing University,  North Bay</p>
            <p className="footer-note">© 2025 All Rights Reserved</p>
          </div>

          {/* Social Media Links */}
          <div className="social-links">
          <a href="mailto:edwells522@my.nipissingu.ca?subject=Message from webpage" target="_blank" rel="noopener noreferrer">
              <img src="/mail-logo.png" alt="Mail" />
            </a>
            <a href="https://www.linkedin.com/in/evan-wells12/" target="_blank" rel="noopener noreferrer">
              <img src="/linked-logo.png" alt="LinkedIn" /> 
            </a>
            <a href="https://github.com/ppurple12" target="_blank" rel="noopener noreferrer">
              <img src="/git-logo.png" alt="GitHub" />
            </a>
          </div>
      </footer>
      </div>
    </Router>
  );
}

export default App;