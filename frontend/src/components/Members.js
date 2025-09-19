import React from "react";
import "./Members.css";

export default function Members() {
  return (
    <section className="members">
      <h2>Meet Our Members</h2>
      <div className="members-grid">
        <div className="member-card">
          <h3>Dr. Tarun Majumder</h3>
          <p>Chairman</p>
        </div>
        <div className="member-card">
          <h3>Argha Ghosh</h3>
          <p>Secretary</p>
        </div>
        <div className="member-card">
          <h3>Pintu Sarkar</h3>
          <p>Accountant</p>
        </div>
        <div className="member-card">
          <h3>Biswanath Halder</h3>
          <p>Founder Member</p>
        </div>
        <div className="member-card">
          <h3>Kalyan Majumder</h3>
          <p>Founder Member</p>
        </div>
        <div className="member-card">
          <h3>Alok Dutta</h3>
          <p>Founder Member</p>
        </div>
      </div>
    </section>
  );
}
