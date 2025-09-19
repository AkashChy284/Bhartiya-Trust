import React from "react";
import "./Mission.css";
import missionImg from "../assets/mission.jpg"; // replace with your actual image

export default function Mission() {
  return (
    <section className="mission" id="mission">
      <div className="mission-container">
        
        {/* Left Image */}
        <div className="mission-image">
          <img src={missionImg} alt="Our Mission" />
          <div className="volunteer-badge">
            <h3>12K+</h3>
            <p>Volunteers</p>
          </div>
        </div>

        {/* Right Content */}
        <div className="mission-content">
          <a href="#donate" className="tagline">Join Us and Start Donating</a>
          <h2>
            Make your Goals Always to Helps <span>Poor People</span>
          </h2>
          <p>
            Phosfluorescently cultivate enabled relationships without sticky practices 
            distinctively empower next-generation e-commerce network.
          </p>

          <div className="mission-points">
            <div className="point">
              <span className="icon">💰</span>
              <div>
                <h4>Quick Fundraising</h4>
                <p>Distinctively empower next-generation BSFWT and idea-sharing and extensible.</p>
              </div>
            </div>

            <div className="point">
              <span className="icon">💚</span>
              <div>
                <h4>Join Our Team</h4>
                <p>Distinctively empower next-generation BSFWT and idea-sharing and extensible.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
