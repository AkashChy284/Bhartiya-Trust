import React, { useEffect, useState } from "react";
import "./Members.css";

export default function Members() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("https://bhartiya-trust-6.onrender.com/api/members")
      .then((res) => res.json())
      .then((data) => setMembers(data))
      .catch((err) => console.log("Error loading members:", err));
  }, []);

  return (
    <section className="members-section">
      <h2 className="section-title">Meet the Members</h2>

      <div className="members-grid">
        {members.map((member) => (
          <div className="member-card" key={member.id}>
            <div className="image-wrapper">
              <img
                src={member.imageUrl}
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