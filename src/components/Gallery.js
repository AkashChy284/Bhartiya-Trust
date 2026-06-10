import React, { useEffect, useState } from "react";
import "./Gallery.css";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/gallery")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="gallery">
      <h1>Our Gallery</h1>
      <p>Some glimpses of our activities and programs.</p>

      <div className="gallery-grid">
        {images.map((img) => (
          <div key={img.id} className="gallery-item">
            <img src={img.imageUrl} alt="Gallery" />
          </div>
        ))}
      </div>
    </section>
  );
}