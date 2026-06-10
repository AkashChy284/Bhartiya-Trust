import React from "react";
import "./Mission.css";
import visionImg from "../assets/child1.jpg";   // top child image (boy)
import missionImg from "../assets/child2.jpg";  // bottom child image (girl)

export default function Mission() {
  return (
    <>
      {/* --- Mission Cards Section --- */}
      <section className="mission-cards">
        <div className="mission-card green">
          <div className="icon">🎂</div>
          <p>No child dies before their 5th birthday due to any preventable cause</p>
        </div>

        <div className="mission-card blue">
          <div className="icon">📘</div>
          <p>Every child receives basic quality education</p>
        </div>

        <div className="mission-card purple">
          <div className="icon">😊</div>
          <p>Abuse, in any form, towards a child is not tolerated</p>
        </div>
      </section>

      <p className="mission-subtext">
        While we work to fulfill our vision, our mission statement endlessly inspires us.
      </p>

      {/* --- Vision & Mission Split Section --- */}
      <section className="vision-mission">
        <div
          className="vision"
          style={{ backgroundImage: `url(${visionImg})` }}
        >
          <div className="overlay purple-overlay" />
          <div className="content">
            <h2>Our Vision</h2>
            <p>
              Build a world in which every child has the right to survival,
              protection, development, and participation
            </p>
          </div>
        </div>

        <div
          className="mission"
          style={{ backgroundImage: `url(${missionImg})` }}
        >
          <div className="overlay pink-overlay" />
          <div className="content">
            <h2>Our Mission</h2>
            <p>
              To inspire breakthroughs in the way the world treats children, and
              to achieve immediate, and lasting change in their lives
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
