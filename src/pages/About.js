import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import aboutImg1 from "../assets/about.jpg";

export default function About() {
  const [about, setAbout] = useState({
    title: "",
    description: "",
    mission: "",
    vision: "",
  });

  useEffect(() => {
    fetch("http://localhost:8080/api/about-content")
      .then((res) => res.json())
      .then((data) => setAbout(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />

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

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          padding: "60px 20px",
          alignItems: "center",
        }}
      >
        <div style={{ display: "grid", gap: "10px" }}>
          <img
            src={aboutImg1}
            alt="Bharatiya Welfare Trust"
            style={{
              width: "100%",
              borderRadius: "10px",
            }}
          />
        </div>

        <div>
          <h2
            style={{
              color: "#c9a227",
              marginBottom: "10px",
            }}
          >
            About Us
          </h2>

          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            {about.title}
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              marginBottom: "20px",
            }}
          >
            {about.description}
          </p>

          <div
            style={{
              background: "#f7f7f7",
              padding: "20px",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          >
            <h3>Mission</h3>
            <p>{about.mission}</p>

            <h3>Vision</h3>
            <p>{about.vision}</p>
          </div>

          <p
            style={{
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Registration no : IV-190100261/2024
          </p>

          <p
            style={{
              fontWeight: "bold",
              marginBottom: "30px",
            }}
          >
            Estd: 31ST MAY,2024
          </p>

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