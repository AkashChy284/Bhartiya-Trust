import React from "react";
import aboutImg from "../assets/about.jpg";
import "./About.css";

export default function About() {
  return (
    <section className="about">
      <div className="about-left">
        <img src={aboutImg} alt="Volunteers" />
        <div className="volunteer-tag">
          <h2>12K+</h2>
          <p>Volunteers</p>
        </div>
      </div>

      <div className="about-right">
        <h3>Make your Goals Always to Help Poor People</h3>
        <p>
          Bharatiya  Welfare Trust (BSFWT) was established on{" "}
          <strong>29th September 2020</strong> as a non-government trust in West
          Bengal. We work on issues like education, health, art & culture, and
          disaster management.
        </p>
        <ul>
          <li>✔ Quick Fundraising</li>
          <li>✔ Join Our Team</li>
        </ul>

        <h3>Trust Details</h3>
        <table className="about-table">
          <tbody>
            <tr>
              <td>NGO ID</td>
              <td>WB/2022/0319254</td>
            </tr>
            <tr>
              <td>Registration No</td>
              <td>IV-1903-00586/2020</td>
            </tr>
            <tr>
              <td>Registration Date</td>
              <td>29-09-2020</td>
            </tr>
            <tr>
              <td>Act</td>
              <td>Trust Act 1882</td>
            </tr>
            <tr>
              <td>Register City</td>
              <td>Chakdaha</td>
            </tr>
            <tr>
              <td>Register State</td>
              <td>West Bengal</td>
            </tr>
            <tr>
              <td>Key Issues</td>
              <td>Art & Culture, Children, Disaster Mgmt, Health & Family Welfare</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>
                South Chanduriya 47T Rail Gate Bazar, Simurali, P.O. Chanduriya,
                P.S. Chakdaha, Dist. Nadia, West Bengal
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>bsfwt2020@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
