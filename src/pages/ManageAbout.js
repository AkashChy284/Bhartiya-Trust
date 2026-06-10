import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ManageAbout() {
  const navigate = useNavigate();

  const [about, setAbout] = useState({
    id: "",
    title: "",
    description: "",
    mission: "",
    vision: "",
  });

  useEffect(() => {
    fetch("https://bhartiya-trust-6.onrender.com/api/about-content")
      .then((res) => res.json())
      .then((data) => setAbout(data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setAbout({
      ...about,
      [e.target.name]: e.target.value,
    });
  };

  const updateAbout = async (e) => {
    e.preventDefault();

    await fetch(`https://bhartiya-trust-6.onrender.com/api/about-content/${about.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(about),
    });

    alert("About content updated successfully");
  };

  return (
    <div style={styles.page}>
      <div style={styles.topbar}>
        <button style={styles.backBtn} onClick={() => navigate("/admin-dashboard")}>
          ← Dashboard
        </button>

        <div>
          <h1 style={styles.title}>About Section</h1>
          <p style={styles.subtitle}>Update About Us, Mission and Vision</p>
        </div>

        <div style={styles.statusBox}>
          <span>Status</span>
          <strong>Active</strong>
        </div>
      </div>

      <div style={styles.layout}>
        <section style={styles.formPanel}>
          <h2 style={styles.panelTitle}>Edit About Content</h2>
          <p style={styles.panelText}>
            This content will appear on the public About page.
          </p>

          <form onSubmit={updateAbout} style={styles.form}>
            <input
              style={styles.input}
              name="title"
              placeholder="About Title"
              value={about.title}
              onChange={handleChange}
            />

            <textarea
              style={styles.textarea}
              name="description"
              placeholder="About Description"
              value={about.description}
              onChange={handleChange}
            />

            <textarea
              style={styles.textarea}
              name="mission"
              placeholder="Mission"
              value={about.mission}
              onChange={handleChange}
            />

            <textarea
              style={styles.textarea}
              name="vision"
              placeholder="Vision"
              value={about.vision}
              onChange={handleChange}
            />

            <button style={styles.saveBtn} type="submit">
              Save About Content
            </button>
          </form>
        </section>

        <section style={styles.previewPanel}>
          <div style={styles.panelHeader}>
            <h2 style={styles.panelTitle}>Live Preview</h2>
            <span style={styles.badge}>Website Content</span>
          </div>

          <div style={styles.previewCard}>
            <h3>{about.title || "About Title"}</h3>
            <p>{about.description || "About description preview..."}</p>

            <div style={styles.miniBox}>
              <h4>Mission</h4>
              <p>{about.mission || "Mission content preview..."}</p>
            </div>

            <div style={styles.miniBox}>
              <h4>Vision</h4>
              <p>{about.vision || "Vision content preview..."}</p>
            </div>
          </div>
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
  statusBox: {
    background: "linear-gradient(135deg, #7c3aed, #a78bfa)",
    padding: "16px 22px",
    borderRadius: "18px",
    display: "grid",
    gap: "6px",
    minWidth: "140px",
    textAlign: "center",
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "1.3fr 1fr",
    gap: "24px",
  },
  formPanel: {
    background: "rgba(15,23,42,0.88)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "24px",
    padding: "24px",
  },
  previewPanel: {
    background: "rgba(15,23,42,0.88)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "24px",
    padding: "24px",
    height: "fit-content",
  },
  panelHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
    background: "rgba(167,139,250,0.18)",
    color: "#c4b5fd",
    padding: "8px 12px",
    borderRadius: "999px",
    fontSize: "13px",
  },
  form: {
    display: "grid",
    gap: "16px",
  },
  input: {
    padding: "14px",
    background: "#0f172a",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "14px",
    outline: "none",
    fontSize: "15px",
  },
  textarea: {
    padding: "14px",
    background: "#0f172a",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "14px",
    outline: "none",
    fontSize: "15px",
    minHeight: "130px",
  },
  saveBtn: {
    padding: "15px",
    background: "linear-gradient(135deg, #a78bfa, #38bdf8)",
    color: "#0f172a",
    border: "none",
    borderRadius: "14px",
    cursor: "pointer",
    fontWeight: "800",
    fontSize: "15px",
  },
  previewCard: {
    background: "rgba(2,6,23,0.75)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "20px",
    padding: "22px",
    lineHeight: "1.6",
  },
  miniBox: {
    background: "rgba(255,255,255,0.06)",
    padding: "15px",
    borderRadius: "14px",
    marginTop: "14px",
  },
};