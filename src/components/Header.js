import React from "react";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png"; // ✅ update with your actual logo path
import "./Header.css";

const Header = () => {
  return (
    <header className="main-header-bwt">
      <div
  style={{
    backgroundColor: "#c62d1f",
    color: "#fff",
    fontWeight: "500",
    padding: "6px 0",
    fontSize: "0.9rem",
    textAlign: "center",
  }}
>
  Make your Goals Always to Help Poor People | Bhartiya Welfare Trust (BWT)
  was established under the Indian Trust Act as a non-government trust in
  West Bengal. We work on education, health, art & culture and disaster
  management.
</div>


      {/* 🔹 Top Black Bar */}
      <div className="header-top-bwt">
        <div className="header-top-content-bwt">

          {/* Contact Info */}
          <div className="contact-info-bwt">
            <div className="contact-item-bwt">
              <i><FaEnvelope /></i> info@bhartiyawelfaretrust.org
            </div>
            <div className="contact-item-bwt">
              <i><FaPhoneAlt /></i> +91 7003694709
            </div>
          </div>

          {/* Social + Search */}
          <div className="utility-section-bwt">
            <div className="social-icons-bwt">
              <a href="/"><FaFacebookF /></a>
              <a href="/"><FaTwitter /></a>
              <a href="/"><FaInstagram /></a>
              <a href="/"><FaLinkedinIn /></a>
              <a href="/"><FaYoutube /></a>
            </div>
            <div className="search-box-bwt">
              <form>
                <input type="text" placeholder="Search" />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* 🟨 Main Navigation Bar */}
      <nav className="header-nav-bwt">

        {/* Logo Section */}
        <div className="header-logo-container-bwt">
          <a href="/">
            <img src={logo} alt="Bhartiya Welfare Trust" className="header-logo-bwt" />
            <span className="logo-text-bwt">BHARTIYA WELFARE TRUST</span>
          </a>
        </div>

        {/* Nav Menu */}
        <div className="nav-menu-bwt">
          <a href="/">Home</a>
          <a href="/About">About Us</a>
          <a href="/Objectives">Objectives</a>
          <a href="/Gallery">Gallery</a>
          <a href="/Contact">Contact</a>
          <a href="/Certificate">Certificates</a>
        </div>

        {/* Donate Button */}
        <div className="header-donate-bwt">
          <a href="/donate" className="donate-btn-bwt">
            <i className="fas fa-heart"></i> Donate Now
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
