import React from "react";
import "./Gallery.css";

// Import your images
import img1 from "../assets/gallery/img1.jpg";
import img2 from "../assets/gallery/img2.jpg";
import img3 from "../assets/gallery/img3.jpg";
import img4 from "../assets/gallery/img4.jpg";
import img5 from "../assets/gallery/img5.jpg";
import img6 from "../assets/gallery/img6.jpg";

export default function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="gallery">
      <h1>Our Gallery</h1>
      <p>Some glimpses of our activities and programs.</p>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
