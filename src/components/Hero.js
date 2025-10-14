import React from "react";
import "./Hero.css";
import heroVideo from "../assets/child_education.mp4"; // replace with your actual video file

export default function Hero() {
  return (
    <section className="hero-bwt">
      <div className="hero-inner">
        <div className="hero-content-bwt">
          <h1>
            Let’s ensure <span className="highlight-bwt">happy</span>
            <br />
            <span className="underline-bwt">childhoods</span> for India’s children
          </h1>
          <button className="hero-btn-bwt">💛 Yes! I Want To Help!</button>
        </div>

        <div className="hero-video-wrapper">
          <video
            className="hero-video"
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className="paint-mask"></div>
        </div>
      </div>
    </section>
  );
}
