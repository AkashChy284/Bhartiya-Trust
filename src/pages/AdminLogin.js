import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      localStorage.setItem("admin", "true");
      navigate("/admin-dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.left}>
        <div style={styles.brandBadge}>BWT</div>

        <h1 style={styles.title}>Bharatiya Welfare Trust</h1>
        <p style={styles.subtitle}>
          Secure admin control center for managing website content, members,
          gallery, contact and donation details.
        </p>

        <div style={styles.features}>
          <div>✅ Manage website content</div>
          <div>✅ Upload gallery and members</div>
          <div>✅ Update donation and contact details</div>
        </div>
      </div>

      <div style={styles.right}>
        <form onSubmit={login} style={styles.card}>
          <div style={styles.logoCircle}>B</div>

          <h2 style={styles.cardTitle}>Admin Login</h2>
          <p style={styles.cardSub}>Enter your credentials to continue</p>

          {error && <div style={styles.error}>{error}</div>}

          <label style={styles.label}>Username</label>
          <input
            style={styles.input}
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label style={styles.label}>Password</label>
          <input
            style={styles.input}
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button style={styles.button} type="submit">
            Login to Dashboard
          </button>

          <p style={styles.note}>
            Authorized access only. All activities are monitored.
          </p>
        </form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    background: "linear-gradient(135deg, #07111f, #111827, #2e1065)",
    color: "#fff",
    fontFamily: "Inter, Arial, sans-serif",
  },
  left: {
    padding: "80px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  brandBadge: {
    width: "70px",
    height: "70px",
    borderRadius: "20px",
    background: "linear-gradient(135deg, #facc15, #fb923c)",
    color: "#111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "900",
    fontSize: "24px",
    marginBottom: "25px",
  },
  title: {
    fontSize: "48px",
    margin: 0,
    lineHeight: "1.1",
  },
  subtitle: {
    color: "#cbd5e1",
    fontSize: "18px",
    maxWidth: "620px",
    lineHeight: "1.7",
    marginTop: "20px",
  },
  features: {
    marginTop: "35px",
    display: "grid",
    gap: "16px",
    color: "#e5e7eb",
    fontSize: "17px",
  },
  right: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
  },
  card: {
    width: "100%",
    maxWidth: "430px",
    background: "rgba(15, 23, 42, 0.92)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "28px",
    padding: "38px",
    boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
  },
  logoCircle: {
    width: "58px",
    height: "58px",
    borderRadius: "18px",
    background: "linear-gradient(135deg, #a78bfa, #38bdf8)",
    color: "#0f172a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "900",
    fontSize: "26px",
    marginBottom: "22px",
  },
  cardTitle: {
    margin: 0,
    fontSize: "30px",
  },
  cardSub: {
    color: "#94a3b8",
    marginBottom: "26px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    marginTop: "16px",
    color: "#cbd5e1",
    fontSize: "14px",
  },
  input: {
    width: "100%",
    padding: "15px",
    background: "#020617",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: "14px",
    outline: "none",
    fontSize: "15px",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    marginTop: "24px",
    padding: "15px",
    background: "linear-gradient(135deg, #facc15, #fb923c)",
    color: "#111827",
    border: "none",
    borderRadius: "14px",
    cursor: "pointer",
    fontWeight: "900",
    fontSize: "16px",
  },
  error: {
    background: "rgba(239,68,68,0.15)",
    color: "#fecaca",
    border: "1px solid rgba(239,68,68,0.35)",
    padding: "12px",
    borderRadius: "12px",
    marginBottom: "16px",
  },
  note: {
    color: "#64748b",
    textAlign: "center",
    fontSize: "13px",
    marginTop: "18px",
  },
};