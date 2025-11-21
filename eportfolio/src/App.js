import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        {/* HEADER */}
        <header className="App-header">
          <h1>PORTFOLIO</h1>
        </header>

        {/* NAVBAR */}
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* FOOTER */}
        <footer>
          <p>Created 2025</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
