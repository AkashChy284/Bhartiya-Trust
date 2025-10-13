import React from "react";
import "./Members.css";

// Import member images
import tarun from "../assets/members/tarun.jpg";
import argha from "../assets/members/argha.jpg";
import pintu from "../assets/members/pintu.jpg";
import kalyan from "../assets/members/kalyan.jpg";

const members = [
  {
    name: "Mr. Dasrath Sharma",
    role: "President/Author",
    image: argha,
  },
  {
    name: "Mr. Arun Sharma",
    role: "Treasurer",
    image: kalyan,
  },
  {
    name: "Mrs. Kanchan Kumari",
    role: "Secretary",
    image: tarun,
  },
  {
    name: "Mr. Pappu Sharma",
    role: "Member",
    image: pintu,
  },
  
];

export default function Members() {
  return (
    <section className="members-section">
      <h2 className="section-title">Meet the Members</h2>
      <div className="members-grid">
        {members.map((member, index) => (
          <div className="member-card" key={index}>
            <div className="image-wrapper">
              <img
                src={member.image}
                alt={member.name}
                className="member-photo"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
