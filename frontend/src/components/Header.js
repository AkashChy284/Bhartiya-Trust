import React from "react";
import "./Header.css";
import logo from "../assets/logo.png"; // replace with your logo file

export default function Header() {
  return (
    <header className="header">
      {/* Top bar */}
      <div className="top-bar">
        <p>Welcome! Bharatiya Seva Foundation Welfare Trust</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>

      {/* Main navbar */}
      <div className="navbar">
        <div className="logo-section">
          <img src={logo} alt="BSFWT Logo" />
          <div className="trust-name">
            <h2>Bharatiya seva <br /> Foundation Welfare Trust</h2>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#objectives">Objectives</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="right-section">
          <div className="call-us">
            <span className="call-icon">📞</span>
            <div>
              <p>Call Us</p>
              <strong>+91 89428 68679</strong>
            </div>
          </div>
          <a href="#donate" className="donate-btn">Donate Now ♡</a>
        </div>
      </div>
    </header>
  );
}
