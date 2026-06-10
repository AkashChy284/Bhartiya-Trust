import React from "react";
import "./Support.css";
import { FaHospital } from "react-icons/fa";

import img1 from "../assets/patient1.jpg";
import img2 from "../assets/patient2.jpg";
import img3 from "../assets/patient3.jpg";
import img4 from "../assets/patient4.jpg";

const patients = [
  {
    id: 1,
    title: "BABY OF AMRUTA",
    img: img1,
  },
  {
    id: 2,
    title: "BABY MITHANSHU & MORE",
    img: img2,
  },
  {
    id: 3,
    title: "MASTER ARYAN GAURAV",
    img: img3,
  },
  {
    id: 4,
    title: "Master Dhruv",
    img: img4,
  },
];

export default function Support() {
  return (
    <section className="support-root">
      <div className="support-bg-wave" />
      <div className="support-container">
        <h2 className="support-heading">Support A Life</h2>
        <p className="support-sub">
          <span className="dash">—</span>
          We can't help everyone, but everyone can help someone
          <span className="dash">—</span>
        </p>

        <div className="cards-wrap">
          {patients.map((p) => (
            <article className="card" key={p.id}>
              <div className="card-image-wrap">
                <img src={p.img} alt={p.title} className="card-image" />
                <div className="card-icon" aria-hidden>
                  <FaHospital />
                </div>
              </div>

              <div className="card-body">
                <h3 className="card-title">{p.title}</h3>
                <p className="card-desc">
                  All India contribution made to "Youth Helping Trust" are eligible for tax deduction of 50% u/s 80G of the Income Tax Act 1961.
                </p>

                <div className="card-footer">
                  <button className="report-btn">
                    View Medical Report
                    <span className="arrow">➜</span>
                    <span className="triangle" aria-hidden />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
