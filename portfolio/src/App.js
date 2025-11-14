import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* HEADER */}
      <header className="App-header">
        <h1>PORTFOLIO</h1>
      </header>

      {/* NAVBAR */}
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* MAIN CONTENT */}
      <main className="main-content">
        <h2>Keisly's Portfolio</h2>
        <p>This is my personal portfolio.</p>
        <button className="btn">Click Here!</button>
      </main>

      {/* FOOTER */}
      <footer>
        <p>Created 2025</p>
      </footer>
    </div>
  );
}

export default App;
