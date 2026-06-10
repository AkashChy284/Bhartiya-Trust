import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ManageDonation() {
  const navigate = useNavigate();

  const [donation, setDonation] = useState({
    id: "",
    upiId: "",
    upiName: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    qrImageUrl: "",
  });

  const [qrImage, setQrImage] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    fetch("https://bhartiya-trust-6.onrender.com/api/donation-info")
      .then((res) => res.json())
      .then((data) => setDonation(data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setDonation({
      ...donation,
      [e.target.name]: e.target.value,
    });
  };

  const handleQrChange = (e) => {
    const file = e.target.files[0];
    setQrImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const updateDonation = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("upiId", donation.upiId);
    formData.append("upiName", donation.upiName);
    formData.append("bankName", donation.bankName);
    formData.append("accountNumber", donation.accountNumber);
    formData.append("ifscCode", donation.ifscCode);

    if (qrImage) {
      formData.append("qrImage", qrImage);
    }

    const res = await fetch(
      `https://bhartiya-trust-6.onrender.com/api/donation-info/${donation.id}`,
      {
        method: "PUT",
        body: formData,
      }
    );

    const data = await res.json();
    setDonation(data);
    setQrImage(null);
    setPreview("");

    const input = document.getElementById("qrImageInput");
    if (input) input.value = "";

    alert("Donation settings updated successfully");
  };

  return (
    <div style={styles.page}>
      <div style={styles.topbar}>
        <button style={styles.backBtn} onClick={() => navigate("/admin-dashboard")}>
          ← Dashboard
        </button>

        <div>
          <h1 style={styles.title}>Donation Settings</h1>
          <p style={styles.subtitle}>Manage UPI, QR code and bank details</p>
        </div>

        <div style={styles.statusBox}>
          <span>Status</span>
          <strong>Active</strong>
        </div>
      </div>

      <div style={styles.layout}>
        <section style={styles.formPanel}>
          <h2 style={styles.panelTitle}>Payment Details</h2>
          <p style={styles.panelText}>
            These details will appear on the public donation page.
          </p>

          <form onSubmit={updateDonation} style={styles.form}>
            <input
              style={styles.input}
              name="upiId"
              placeholder="UPI ID"
              value={donation.upiId}
              onChange={handleChange}
            />

            <input
              style={styles.input}
              name="upiName"
              placeholder="UPI Name"
              value={donation.upiName}
              onChange={handleChange}
            />

            <input
              style={styles.input}
              name="bankName"
              placeholder="Bank Name"
              value={donation.bankName}
              onChange={handleChange}
            />

            <input
              style={styles.input}
              name="accountNumber"
              placeholder="Account Number"
              value={donation.accountNumber}
              onChange={handleChange}
            />

            <input
              style={styles.input}
              name="ifscCode"
              placeholder="IFSC Code"
              value={donation.ifscCode}
              onChange={handleChange}
            />

            <label style={styles.uploadBox}>
              <input
                id="qrImageInput"
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleQrChange}
                style={{ display: "none" }}
              />

              {preview ? (
                <img src={preview} alt="QR Preview" style={styles.qrPreview} />
              ) : donation.qrImageUrl ? (
                <img
                  src={`${donation.qrImageUrl}?t=${Date.now()}`}
                  alt="Current QR"
                  style={styles.qrPreview}
                />
              ) : (
                <div>
                  <div style={styles.uploadIcon}>📲</div>
                  <p>Click to upload QR code</p>
                  <span>PNG, JPG or JPEG</span>
                </div>
              )}
            </label>

            <button style={styles.saveBtn} type="submit">
              Save Donation Settings
            </button>
          </form>
        </section>

        <section style={styles.previewPanel}>
          <div style={styles.panelHeader}>
            <h2 style={styles.panelTitle}>Live Preview</h2>
            <span style={styles.badge}>Donation Page</span>
          </div>

          <div style={styles.previewCard}>
            <h3>{donation.upiName || "Bhartiya Welfare Trust"}</h3>

            {(preview || donation.qrImageUrl) && (
              <img
                src={preview || `${donation.qrImageUrl}?t=${Date.now()}`}
                alt="Donation QR"
                style={styles.qr}
              />
            )}

            <div style={styles.previewItem}>
              <strong>UPI ID:</strong> {donation.upiId || "Not added"}
            </div>

            <div style={styles.previewItem}>
              <strong>Bank:</strong> {donation.bankName || "Not added"}
            </div>

            <div style={styles.previewItem}>
              <strong>Account:</strong> {donation.accountNumber || "Not added"}
            </div>

            <div style={styles.previewItem}>
              <strong>IFSC:</strong> {donation.ifscCode || "Not added"}
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
    background: "linear-gradient(135deg, #ea580c, #fb923c)",
    padding: "16px 22px",
    borderRadius: "18px",
    display: "grid",
    gap: "6px",
    minWidth: "140px",
    textAlign: "center",
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
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
    background: "rgba(251,146,60,0.18)",
    color: "#fed7aa",
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
  uploadBox: {
    minHeight: "240px",
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
  qrPreview: {
    width: "100%",
    height: "240px",
    objectFit: "contain",
    background: "#fff",
    padding: "10px",
  },
  saveBtn: {
    padding: "15px",
    background: "linear-gradient(135deg, #fb923c, #facc15)",
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
    display: "grid",
    gap: "14px",
  },
  qr: {
    width: "220px",
    height: "220px",
    objectFit: "contain",
    background: "#fff",
    borderRadius: "16px",
    padding: "12px",
    margin: "0 auto",
  },
  previewItem: {
    background: "rgba(255,255,255,0.06)",
    padding: "14px",
    borderRadius: "14px",
    color: "#d1d5db",
  },
};