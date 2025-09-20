import React from "react";
import qrImage from "../assets/upi-qr.png"; // place your QR code image inside assets
import "./Donate.css";

export default function Donate() {
  return (
    <div className="donate-container">
      {/* Left Side - Donation Form */}
      <div className="donate-form">
        <h2>For Donation</h2>
        <form>
          <div className="form-row">
            <input type="text" placeholder="Enter Name" required />
            <input type="email" placeholder="Enter Email" required />
          </div>
          <div className="form-row">
            <input type="tel" placeholder="Enter Phone Number" required />
            <input type="text" placeholder="Enter Location" required />
          </div>
          <input
            type="number"
            placeholder="Enter Donation Amount"
            required
            className="full-width"
          />
          <textarea
            placeholder="Your message"
            rows="4"
            required
            className="full-width"
          ></textarea>
          <button type="submit" className="donate-btn">
            Donate Now
          </button>
        </form>
      </div>

      {/* Right Side - QR Code */}
      <div className="donate-qr">
        <h3>Bhartiya Welfare Trust</h3>
        <img src={qrImage} alt="UPI QR Code" />
        
      </div>

      
      
    </div>
  );
}
