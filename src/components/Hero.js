import React from "react";
import aboutImg from "../assets/about.jpg";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-split">
      {/* Left Side - Image */}
      <div className="hero-left">
        <img src={aboutImg} alt="Trust Volunteers" />
      </div>

      {/* Right Side - Content */}
      <div className="hero-right">
        <h1>Bhartiya Welfare Trust</h1>
        <p>
          Bhartiya Welfare Trust was established on{" "}
          <strong>29th September 2024</strong> with the aim to support
          development in education, health, art & culture, and disaster
          management for the benefit of the community.
        </p>

        <h3>Our main projects are:</h3>
        <ul>
          <li>✔ Quick Fundraising for Education</li>
          <li>✔ Mid Day Meal Program in Rural Schools</li>
          <li>✔ Cultural & Health Awareness Programs</li>
        </ul>

        <button className="hero-btn">Know More</button>
      </div>
    </section>
  );
}
