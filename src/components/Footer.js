import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Bhartiya Welfare Trust</p>
      <div className="footer-links">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#donation">Donation</a>
        <a href="#terms">Terms & Conditions</a>
        <a href="#privacy">Privacy Policy</a>
      </div>
      <div className="footer-contact">
        <p>📞 +91 7003694709</p>
        <p>📧 contact@bsfwt.in</p>
        <p>
          📍 14, Devi Mandir Lane, Bally (M), P.O. Liluah, P.S. Liluah, Howrah – 711204, West Bengal
        </p>
      </div>
    </footer>
  );
}
