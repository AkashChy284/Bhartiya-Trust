import React, { useEffect, useState } from "react";
import "./Donate.css";

export default function Donate() {
  const [donation, setDonation] = useState({
    upiId: "",
    upiName: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    qrImageUrl: "",
  });

  useEffect(() => {
    fetch("https://bhartiya-trust-6.onrender.com/api/donation-info")
      .then((res) => res.json())
      .then((data) => setDonation(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="donate-container">
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

      <div className="donate-qr">
        <h3>{donation.upiName || "Bhartiya Welfare Trust"}</h3>

        {donation.qrImageUrl && (
          <img
            src={`${donation.qrImageUrl}?t=${Date.now()}`}
            alt="UPI QR Code"
          />
        )}

        <p><strong>UPI ID:</strong> {donation.upiId}</p>
        <p><strong>Bank:</strong> {donation.bankName}</p>
        <p><strong>Account:</strong> {donation.accountNumber}</p>
        <p><strong>IFSC:</strong> {donation.ifscCode}</p>
      </div>
    </div>
  );
}
