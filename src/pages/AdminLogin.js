import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === "bhartiya123") {
      localStorage.setItem("admin", "true");
      navigate("/admin-dashboard");
    } else {
      alert("Wrong Password");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>BWT Admin Login</h1>
        <p style={styles.subtitle}>Enter password to manage website</p>

        <input
          style={styles.input}
          type="password"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.button} onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f172a, #2563eb)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial",
  },
  card: {
    background: "#fff",
    padding: "40px",
    width: "380px",
    borderRadius: "18px",
    textAlign: "center",
  },
  title: { marginBottom: "10px" },
  subtitle: { color: "#64748b", marginBottom: "25px" },
  input: {
    width: "100%",
    padding: "14px",
    marginBottom: "18px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "14px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};