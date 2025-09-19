import React from "react";
import "./Support.css";

export default function Support() {
  return (
    <section className="support">
      <h2>Support Us For Help</h2>
      <div className="support-stats">
        <div className="stat">
          <h3>12M</h3>
          <p>Total Donations</p>
        </div>
        <div className="stat">
          <h3>10K+</h3>
          <p>Projects Founded</p>
        </div>
        <div className="stat">
          <h3>860</h3>
          <p>Total Volunteers</p>
        </div>
      </div>
      <button>Donate Now</button>
    </section>
  );
}
