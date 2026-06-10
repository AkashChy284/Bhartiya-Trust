import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ManageGallery() {
  const navigate = useNavigate();

  const [images, setImages] = useState([]);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const fetchImages = async () => {
    const res = await fetch("http://localhost:8080/api/gallery");
    const data = await res.json();
    setImages(data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const uploadImage = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select image");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    await fetch("http://localhost:8080/api/gallery", {
      method: "POST",
      body: formData,
    });

    setImage(null);
    setPreview("");

    const input = document.getElementById("galleryImageInput");
    if (input) input.value = "";

    fetchImages();
  };

  const deleteImage = async (id) => {
    if (!window.confirm("Delete this gallery image?")) return;

    await fetch(`http://localhost:8080/api/gallery/${id}`, {
      method: "DELETE",
    });

    fetchImages();
  };

  return (
    <div style={styles.page}>
      <div style={styles.topbar}>
        <button style={styles.backBtn} onClick={() => navigate("/admin-dashboard")}>
          ← Dashboard
        </button>

        <div>
          <h1 style={styles.title}>Gallery Management</h1>
          <p style={styles.subtitle}>Upload and manage trust activity photos</p>
        </div>

        <div style={styles.countBox}>
          <span>Total Images</span>
          <strong>{images.length}</strong>
        </div>
      </div>

      <div style={styles.layout}>
        <section style={styles.uploadPanel}>
          <h2 style={styles.panelTitle}>Upload New Image</h2>
          <p style={styles.panelText}>Add photos of events, activities and programs.</p>

          <form onSubmit={uploadImage} style={styles.form}>
            <label style={styles.uploadBox}>
              <input
                id="galleryImageInput"
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />

              {preview ? (
                <img src={preview} alt="Preview" style={styles.preview} />
              ) : (
                <div>
                  <div style={styles.uploadIcon}>🖼️</div>
                  <p>Click to select gallery image</p>
                  <span>PNG, JPG or JPEG</span>
                </div>
              )}
            </label>

            <button style={styles.uploadBtn} type="submit">
              + Upload Image
            </button>
          </form>
        </section>

        <section style={styles.galleryPanel}>
          <div style={styles.panelHeader}>
            <h2 style={styles.panelTitle}>Gallery Images</h2>
            <span style={styles.badge}>Live from Database</span>
          </div>

          {images.length === 0 ? (
            <div style={styles.emptyBox}>No gallery images uploaded yet.</div>
          ) : (
            <div style={styles.grid}>
              {images.map((img) => (
                <div key={img.id} style={styles.card}>
                  <img
                    src={`${img.imageUrl}?t=${Date.now()}`}
                    alt="Gallery"
                    style={styles.image}
                  />

                  <button style={styles.deleteBtn} onClick={() => deleteImage(img.id)}>
                    Delete Image
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #07111f, #111827, #201033)",
    color: "#fff",
    padding: "30px",
    fontFamily: "Inter, Arial, sans-serif",
  },
  topbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "28px",
  },
  backBtn: {
    padding: "13px 18px",
    background: "rgba(255,255,255,0.08)",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "14px",
    cursor: "pointer",
  },
  title: {
    margin: 0,
    fontSize: "32px",
  },
  subtitle: {
    margin: "8px 0 0",
    color: "#94a3b8",
  },
  countBox: {
    background: "linear-gradient(135deg, #0284c7, #38bdf8)",
    padding: "16px 22px",
    borderRadius: "18px",
    display: "grid",
    gap: "6px",
    minWidth: "150px",
    textAlign: "center",
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "360px 1fr",
    gap: "24px",
  },
  uploadPanel: {
    background: "rgba(15,23,42,0.88)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "24px",
    padding: "24px",
    height: "fit-content",
  },
  galleryPanel: {
    background: "rgba(15,23,42,0.88)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "24px",
    padding: "24px",
  },
  panelHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "18px",
  },
  panelTitle: {
    margin: 0,
    fontSize: "22px",
  },
  panelText: {
    color: "#94a3b8",
    marginBottom: "20px",
  },
  badge: {
    background: "rgba(56,189,248,0.18)",
    color: "#7dd3fc",
    padding: "8px 12px",
    borderRadius: "999px",
    fontSize: "13px",
  },
  form: {
    display: "grid",
    gap: "16px",
  },
  uploadBox: {
    minHeight: "260px",
    border: "1px dashed rgba(255,255,255,0.35)",
    borderRadius: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#cbd5e1",
    cursor: "pointer",
    background: "rgba(255,255,255,0.04)",
    overflow: "hidden",
  },
  uploadIcon: {
    fontSize: "40px",
  },
  preview: {
    width: "100%",
    height: "260px",
    objectFit: "cover",
  },
  uploadBtn: {
    padding: "15px",
    background: "linear-gradient(135deg, #38bdf8, #a78bfa)",
    color: "#0f172a",
    border: "none",
    borderRadius: "14px",
    cursor: "pointer",
    fontWeight: "800",
    fontSize: "15px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  },
  card: {
    background: "rgba(2,6,23,0.75)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "22px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "230px",
    objectFit: "cover",
  },
  deleteBtn: {
    margin: "16px",
    width: "calc(100% - 32px)",
    padding: "12px",
    background: "linear-gradient(135deg, #ef4444, #f97316)",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "700",
  },
  emptyBox: {
    padding: "40px",
    textAlign: "center",
    color: "#94a3b8",
    border: "1px dashed rgba(255,255,255,0.2)",
    borderRadius: "18px",
  },
};