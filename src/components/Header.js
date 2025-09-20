import React from "react";
import { Link } from "react-router-dom";   // ✅ Import Link
import "./Header.css";
import logo from "../assets/logo.png"; // replace with your logo file

export default function Header() {
  return (
    <header className="header">
      {/* Top bar */}
      <div className="top-bar">
        <p>Welcome! Bhartiya Welfare Trust</p>
        <div className="social-icons">
          {/* ✅ Changed <a href="#"> → <button> */}
          <button className="icon-btn"><i className="fab fa-facebook-f"></i></button>
          <button className="icon-btn"><i className="fab fa-twitter"></i></button>
          <button className="icon-btn"><i className="fab fa-linkedin-in"></i></button>
          <button className="icon-btn"><i className="fab fa-youtube"></i></button>
        </div>
      </div>

      {/* Main navbar */}
      <div className="navbar">
        <div className="logo-section">
          <img src={logo} alt="BSFWT Logo" />
          <div className="trust-name">
            <h2>
              Bhartiya <br /> Welfare Trust
            </h2>
          </div>
        </div>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/objectives">Objectives</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="right-section">
          <div className="call-us">
            <span className="call-icon">📞</span>
            <div>
              <p>Call Us</p>
              <strong>+91 7003694709</strong>
            </div>
          </div>
          <Link to="/donate" className="donate-btn">Donate Now ♡</Link>
        </div>
      </div>
    </header>
  );
}
