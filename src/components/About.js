import React from "react";
import aboutVideo from "../assets/hero-video.mp4"; 
import "./About.css";

export default function About() {
  return (
    <div>
      {/* Hero Banner with Video */}
      <section className="about-hero">
        <video
          className="about-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={aboutVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>Join us and start donating – together we can help poor people.</p>
          <button className="about-btn">View Projects</button>
        </div>
      </section>

      {/* Trust Details Section */}
      <section className="about-details">
        <h2>Make your Goals Always to Help Poor People</h2>
        <p>
          Bhartiya Welfare Trust (BWT) was established under the{" "}
          <strong>Indian Trust Act</strong> as a non-government trust in West
          Bengal. We work on issues like education, health, art & culture, and
          disaster management.
        </p>
        <ul>
          <li>✔ Quick Fundraising</li>
          <li>✔ Join Our Team</li>
        </ul>

        <h3>Trust Details</h3>
        <table className="about-table">
          <tbody>
            <tr>
              <td>NGO ID</td>
              <td>190100261/2024</td>
            </tr>
            <tr>
              <td>Registration No</td>
              <td>IV-190100261/2024</td>
            </tr>
            <tr>
              <td>Registration Date</td>
              <td>31-05-2024</td>
            </tr>
            <tr>
              <td>Act</td>
              <td>Indian Trust Act</td>
            </tr>
            <tr>
              <td>Register City</td>
              <td>Howrah</td>
            </tr>
            <tr>
              <td>Register State</td>
              <td>West Bengal</td>
            </tr>
            <tr>
              <td>Key Issues</td>
              <td>
                Art & Culture, Children, Disaster Mgmt, Health & Family Welfare
              </td>
            </tr>
            <tr>
              <td>Address</td>
              <td>
                14, Devi Mandir Lane, Bally (M), P.O. Liluah, P.S. Liluah,
                Howrah – 711204, West Bengal
              </td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>+91 7003694709</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>bsfwt2020@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
