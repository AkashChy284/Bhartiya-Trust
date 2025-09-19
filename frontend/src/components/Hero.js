import React from "react";
import heroBg from "../assets/hero-bg.jpg";
import "./Hero.css";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroBg}) center/cover no-repeat`
      }}
    >
      <div className="hero-content">
        <h1>About Us</h1>
        <p>Join Us and Start Donating – Together we can help poor people.</p>
      </div>
    </section>
  );
}
