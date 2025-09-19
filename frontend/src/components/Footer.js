import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Bharatiya Seva Foundation Welfare Trust</p>
      <div className="footer-links">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#donation">Donation</a>
        <a href="#terms">Terms & Conditions</a>
        <a href="#privacy">Privacy Policy</a>
      </div>
      <div className="footer-contact">
        <p>📞 +91 89428 68679 | 03473-313006 | +91 9832842866</p>
        <p>📧 contact@bsfwt.in</p>
        <p>
          📍 South Chanduriya, Simurali, Nadia, WB, 741248
        </p>
      </div>
    </footer>
  );
}
