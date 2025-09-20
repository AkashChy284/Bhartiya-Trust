import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import aboutImg1 from "../assets/about.jpg"; // replace/add more images if needed

export default function About() {
  return (
    <>
      <Header />

      {/* Hero / Page Title */}
      <section
        style={{
          backgroundColor: "#666",
          color: "white",
          padding: "40px 0",
          textAlign: "center",
        }}
      >
        <h1>About Us</h1>
      </section>

      {/* Main About Section */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          padding: "60px 20px",
          alignItems: "center",
        }}
      >
        {/* Left side images */}
        <div style={{ display: "grid", gap: "10px" }}>
          <img
            src={aboutImg1}
            alt="Bharatiya Welfare Trust"
            style={{ width: "100%", borderRadius: "10px" }}
          />
          {/* You can add more <img> tags here if you want collage like the screenshot */}
        </div>

        {/* Right side text */}
        <div>
          <h2 style={{ color: "#c9a227", marginBottom: "10px" }}>About Us</h2>
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Bharatiya Welfare Trust of India
          </h1>
          <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
            Bharatiya Welfare Trust of India is a non-governmental organization
            committed to serving society. We work in education, healthcare,
            sports, environment, and cultural development, while also providing
            food support for the underprivileged and contributing to social
            welfare activities across the country.
          </p>

          <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
            Registration no : IV-190100261/2024
          </p>
          <p style={{ fontWeight: "bold", marginBottom: "30px" }}>
            Estd: 31ST MAY,2024
          </p>

          {/* Objective cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            <div
              style={{
                background: "#f7f4e9",
                padding: "20px",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              <span style={{ fontSize: "2rem" }}>📘</span>
              <h3>Work in Education Sector</h3>
            </div>
            <div
              style={{
                background: "#f7f4e9",
                padding: "20px",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              <span style={{ fontSize: "2rem" }}>🍛</span>
              <h3>Provide Foods for Hunger</h3>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
