import React from "react";
import { useNavigate } from "react-router-dom";

export default function ManageSettings() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.topbar}>
        <button style={styles.backBtn} onClick={() => navigate("/admin-dashboard")}>
          ← Dashboard
        </button>

        <div>
          <h1 style={styles.title}>Website Settings</h1>
          <p style={styles.subtitle}>Manage branding, security and website preferences</p>
        </div>

        <div style={styles.statusBox}>
          <span>System</span>
          <strong>Healthy</strong>
        </div>
      </div>

      <div style={styles.grid}>
        <div style={styles.card}>
          <div style={styles.icon}>🏛️</div>
          <h2>Trust Branding</h2>
          <p>Trust name, logo, tagline and footer branding.</p>
          <button style={styles.btn}>Coming Soon</button>
        </div>

        <div style={styles.card}>
          <div style={styles.icon}>🔐</div>
          <h2>Admin Security</h2>
          <p>Change admin password and secure login access.</p>
          <button style={styles.btn}>Coming Soon</button>
        </div>

        <div style={styles.card}>
          <div style={styles.icon}>🌐</div>
          <h2>Website Info</h2>
          <p>Manage domain, email, support phone and public details.</p>
          <button style={styles.btn}>Coming Soon</button>
        </div>

        <div style={styles.card}>
          <div style={styles.icon}>🎨</div>
          <h2>Theme Settings</h2>
          <p>Choose website colors, admin theme and layout style.</p>
          <button style={styles.btn}>Coming Soon</button>
        </div>

        <div style={styles.card}>
          <div style={styles.icon}>🗂️</div>
          <h2>Backup & Data</h2>
          <p>Export members, gallery, donation and contact data.</p>
          <button style={styles.btn}>Coming Soon</button>
        </div>

        <div style={styles.card}>
          <div style={styles.icon}>⚙️</div>
          <h2>Maintenance Mode</h2>
          <p>Temporarily disable public website during updates.</p>
          <button style={styles.btn}>Coming Soon</button>
        </div>
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
    background: "linear-gradient(135deg, #6366f1, #38bdf8)",
    padding: "16px 22px",
    borderRadius: "18px",
    display: "grid",
    gap: "6px",
    minWidth: "140px",
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "22px",
  },
  card: {
    background: "rgba(15,23,42,0.88)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "24px",
    padding: "26px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
  },
  icon: {
    fontSize: "36px",
    marginBottom: "15px",
  },
  btn: {
    marginTop: "18px",
    padding: "12px 16px",
    background: "linear-gradient(135deg, #a78bfa, #38bdf8)",
    color: "#0f172a",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "800",
  },
};