import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ManageContact() {
  const navigate = useNavigate();

  const [contact, setContact] = useState({
    id: "",
    phone: "",
    whatsapp: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    fetch("http://localhost:8080/api/contact-info")
      .then((res) => res.json())
      .then((data) => setContact(data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const updateContact = async (e) => {
    e.preventDefault();

    await fetch(`http://localhost:8080/api/contact-info/${contact.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });

    alert("Contact details updated successfully");
  };

  return (
    <div style={styles.page}>
      <div style={styles.topbar}>
        <button style={styles.backBtn} onClick={() => navigate("/admin-dashboard")}>
          ← Dashboard
        </button>

        <div>
          <h1 style={styles.title}>Contact Management</h1>
          <p style={styles.subtitle}>Update phone, WhatsApp, email and address</p>
        </div>

        <div style={styles.statusBox}>
          <span>Status</span>
          <strong>Active</strong>
        </div>
      </div>

      <div style={styles.layout}>
        <section style={styles.formPanel}>
          <h2 style={styles.panelTitle}>Edit Contact Details</h2>
          <p style={styles.panelText}>These details will appear on the public Contact page.</p>

          <form onSubmit={updateContact} style={styles.form}>
            <input
              style={styles.input}
              name="phone"
              placeholder="Phone Number"
              value={contact.phone}
              onChange={handleChange}
            />

            <input
              style={styles.input}
              name="whatsapp"
              placeholder="WhatsApp Number"
              value={contact.whatsapp}
              onChange={handleChange}
            />

            <input
              style={styles.input}
              name="email"
              placeholder="Email Address"
              value={contact.email}
              onChange={handleChange}
            />

            <textarea
              style={styles.textarea}
              name="address"
              placeholder="Address"
              value={contact.address}
              onChange={handleChange}
            />

            <button style={styles.saveBtn} type="submit">
              Save Contact Details
            </button>
          </form>
        </section>

        <section style={styles.previewPanel}>
          <div style={styles.panelHeader}>
            <h2 style={styles.panelTitle}>Live Preview</h2>
            <span style={styles.badge}>Website Contact</span>
          </div>

          <div style={styles.previewCard}>
            <div style={styles.previewItem}>📞 {contact.phone || "Phone number"}</div>
            <div style={styles.previewItem}>💬 {contact.whatsapp || "WhatsApp number"}</div>
            <div style={styles.previewItem}>📧 {contact.email || "Email address"}</div>
            <div style={styles.previewItem}>📍 {contact.address || "Address"}</div>
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
    background: "linear-gradient(135deg, #059669, #34d399)",
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
    background: "rgba(52,211,153,0.18)",
    color: "#6ee7b7",
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
    minHeight: "150px",
  },
  saveBtn: {
    padding: "15px",
    background: "linear-gradient(135deg, #34d399, #38bdf8)",
    color: "#0f172a",
    border: "none",
    borderRadius: "14px",
    cursor: "pointer",
    fontWeight: "800",
    fontSize: "15px",
  },
  previewCard: {
    display: "grid",
    gap: "14px",
  },
  previewItem: {
    background: "rgba(2,6,23,0.75)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "16px",
    padding: "16px",
    color: "#d1d5db",
  },
};