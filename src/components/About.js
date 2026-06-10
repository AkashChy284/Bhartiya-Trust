import React from "react";
import "./About.css";
import field1 from "../assets/icon-education.png";
import field2 from "../assets/icon-health.png";
import field3 from "../assets/icon-resilience.png";
import field4 from "../assets/icon-livelihood.png";
import field5 from "../assets/icon-protection.png";
import field6 from "../assets/icon-humanitarian.png";
import highlightImage from "../assets/highlight-children.jpg"; // replace with your image

export default function About() {
  return (
    <div className="about-page">
      {/* ---------- PINK INTRO BAND ---------- */}
      <section className="about-intro-band">
        <div className="about-intro-inner">
          <h2 className="about-intro-title">BAL RAKSHA, BHAVISHYA RAKSHA</h2>

          <div className="about-intro-copy">
            <p>
              At Bhartiya Welfare Trust (also known as Save the Children), nurturing
              children is nurturing the promise of India. Since 2024, we have
              made it our mission to transform childhood landscapes nationwide
              through compassion, care and relentless efforts. We are steadfast
              in our resolve to help the children of India build a Secure
              Childhood and thus a Secure Future.
            </p>

            <p>
              Our approach at Bhartiya Welfare Trust is HOLISTIC as we address
              numerous aspects of childhood: access to health and nutrition,
              quality education, protection from harm, supporting with
              psychosocial needs and driving a well-rounded development of
              children. Protection from exploitation and access to equal
              opportunities help children thrive as architects of the nation's
              future.
            </p>

            <button className="btn-read-more">Read More...</button>
          </div>
        </div>
      </section>

      {/* ---------- FIELDS OF WORK (CENTERED) ---------- */}
      <section className="fields-section">
        <h3 className="fields-heading">OUR FIELDS OF WORK</h3>

        <div className="fields-grid" aria-hidden>
          <div className="field">
            <img src={field1} alt="Education" />
            <span>EDUCATION</span>
          </div>
          <div className="field">
            <img src={field2} alt="Health" />
            <span>HEALTH</span>
          </div>
          <div className="field">
            <img src={field3} alt="Resilience" />
            <span>RESILIENCE</span>
          </div>
          <div className="field">
            <img src={field4} alt="Livelihood" />
            <span>LIVELIHOOD</span>
          </div>
          <div className="field">
            <img src={field5} alt="Protection" />
            <span>PROTECTION</span>
          </div>
          <div className="field">
            <img src={field6} alt="Humanitarian" />
            <span>HUMANITARIAN</span>
          </div>
        </div>
      </section>

      {/* ---------- HIGHLIGHT SECTION (IMAGE LEFT / CARD RIGHT) ---------- */}
      <section className="highlight-section">
        <div className="highlight-inner">
          <div className="highlight-image-wrap">
            <img
              src={highlightImage}
              alt="Children studying"
              className="highlight-image"
            />
          </div>

          <div className="highlight-card">
            <h4 className="highlight-title">
              SHIKSHA KI RAKSHA,
              <br />
              BHAVISHYA KI RAKSHA!
            </h4>

            <p className="highlight-copy">
              From early childhood to adolescence, quality education unlocks
              human potential. Bhartiya Welfare Trust (Save the Children, India)
              champions the cause of India's underserved since 2004, aligning
              inclusive learning with national ethos. Safe classrooms, girls'
              participation, digital access — their interventions remove barriers
              spanning from urban slums to rural communities.
            </p>

            <p className="highlight-copy">
              Uplifting over 80,000 students, we have seeded future innovation
              and powered sustainable solutions. Click here to learn more about
              its transformative impact on our children.
            </p>

            <button className="btn-know-more">Know More</button>
          </div>
        </div>
      </section>
    </div>
  );
}
