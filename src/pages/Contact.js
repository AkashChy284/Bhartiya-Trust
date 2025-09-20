import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Header />

      {/* Hero / Page Title */}
      <section
        style={{
          backgroundColor: "#f4f4f4",
          padding: "40px 0",
          textAlign: "center",
        }}
      >
        <h1>Contact Us</h1>
        <p style={{ fontSize: "1.1rem", color: "#555" }}>
          Feel free to reach out to Bharatiya Welfare Trust
        </p>
      </section>

      {/* Contact Info + Map */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          padding: "60px 20px",
          alignItems: "flex-start",
        }}
      >
        {/* Left - Contact Info */}
        <div>
          <h2 style={{ marginBottom: "20px" }}>Get in Touch</h2>
          <p style={{ marginBottom: "15px", fontSize: "1.1rem" }}>
            📞 +91 89428 68679
          </p>
          <p style={{ marginBottom: "15px", fontSize: "1.1rem" }}>
            📧 bharatiyawelfaretrust@gmail.com
          </p>
          <p style={{ fontSize: "1.1rem" }}>
            📍 Nawada, Bihar - 805103, India
          </p>
        </div>

        {/* Right - Google Map */}
        <div style={{ width: "100%", height: "300px" }}>
          <iframe
            title="Bharatiya Welfare Trust Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.092350376967!2d85.516!3d24.886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2b5a7f1e8a4ad%3A0x8d6a0a5a5d3c8b5b!2sNawada%2C%20Bihar%20805103!5e0!3m2!1sen!2sin!4v1695200000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <Footer />
    </>
  );
}
