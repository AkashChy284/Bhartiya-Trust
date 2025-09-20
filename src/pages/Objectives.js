import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Objectives() {
  return (
    <>
      <Header />

      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
          Our Objectives
        </h1>
        <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem" }}>
          Bharatiya Welfare Trust is committed to uplifting society through 
          education, healthcare, cultural development, and disaster relief. 
          Our key objectives include:
        </p>

        <ul style={{ listStyle: "none", padding: 0, marginTop: "30px", fontSize: "1.1rem" }}>
          <li>✔ Providing free and accessible education to underprivileged children</li>
          <li>✔ Supporting healthcare and family welfare initiatives</li>
          <li>✔ Promoting art, culture, and heritage preservation</li>
          <li>✔ Delivering aid and relief during natural disasters</li>
          <li>✔ Encouraging youth and community participation in welfare programs</li>
        </ul>
      </section>

      <Footer />
    </>
  );
}
