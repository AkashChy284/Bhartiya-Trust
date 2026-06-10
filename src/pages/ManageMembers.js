import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ManageMembers() {
  const navigate = useNavigate();

  const [members, setMembers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    role: "",
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const fetchMembers = async () => {
    try {
      const res = await fetch("https://bhartiya-trust-6.onrender.com/api/members");
      const data = await res.json();
      setMembers(data);
    } catch (error) {
      console.log("Error fetching members:", error);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const addMember = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select member image");
      return;
    }

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("role", form.role);
    formData.append("image", image);

    await fetch("https://bhartiya-trust-6.onrender.com/api/members", {
      method: "POST",
      body: formData,
    });

    setForm({ name: "", role: "" });
    setImage(null);
    setPreview("");

    const input = document.getElementById("memberImageInput");
    if (input) input.value = "";

    fetchMembers();
  };

  const deleteMember = async (id) => {
    if (!window.confirm("Delete this member?")) return;

    await fetch(`https://bhartiya-trust-6.onrender.com/api/members/${id}`, {
      method: "DELETE",
    });

    fetchMembers();
  };

  return (
    <div style={styles.page}>
      <div style={styles.topbar}>
        <button style={styles.backBtn} onClick={() => navigate("/admin-dashboard")}>
          ← Dashboard
        </button>

        <div>
          <h1 style={styles.title}>Members Management</h1>
          <p style={styles.subtitle}>Add, manage and remove trust members</p>
        </div>

        <div style={styles.countBox}>
          <span>Total Members</span>
          <strong>{members.length}</strong>
        </div>
      </div>

      <div style={styles.layout}>
        <section style={styles.formPanel}>
          <h2 style={styles.panelTitle}>Add New Member</h2>
          <p style={styles.panelText}>Upload member photo and details.</p>

          <form onSubmit={addMember} style={styles.form}>
            <input
              style={styles.input}
              name="name"
              placeholder="Member Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              style={styles.input}
              name="role"
              placeholder="Member Role"
              value={form.role}
              onChange={handleChange}
              required
            />

            <label style={styles.uploadBox}>
              <input
                id="memberImageInput"
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />

              {preview ? (
                <img src={preview} alt="Preview" style={styles.preview} />
              ) : (
                <div>
                  <div style={styles.uploadIcon}>📤</div>
                  <p>Click to upload member image</p>
                  <span>PNG, JPG or JPEG</span>
                </div>
              )}
            </label>

            <button style={styles.addBtn} type="submit">
              + Add Member
            </button>
          </form>
        </section>

        <section style={styles.memberPanel}>
          <div style={styles.panelHeader}>
            <h2 style={styles.panelTitle}>All Members</h2>
            <span style={styles.badge}>Live from Database</span>
          </div>

          {members.length === 0 ? (
            <div style={styles.emptyBox}>
              No members added yet.
            </div>
          ) : (
            <div style={styles.grid}>
              {members.map((member) => (
                <div key={member.id} style={styles.card}>
                  <img
                    src={`${member.imageUrl}?t=${Date.now()}`}
                    alt={member.name}
                    style={styles.image}
                  />

                  <div style={styles.memberInfo}>
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>

                  <button
                    style={styles.deleteBtn}
                    onClick={() => deleteMember(member.id)}
                  >
                    Delete Member
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
    background: "linear-gradient(135deg, #7c3aed, #38bdf8)",
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
  formPanel: {
    background: "rgba(15,23,42,0.88)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "24px",
    padding: "24px",
    height: "fit-content",
  },
  memberPanel: {
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
  uploadBox: {
    minHeight: "210px",
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
    fontSize: "36px",
  },
  preview: {
    width: "100%",
    height: "210px",
    objectFit: "cover",
  },
  addBtn: {
    padding: "15px",
    background: "linear-gradient(135deg, #a78bfa, #38bdf8)",
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
    height: "220px",
    objectFit: "cover",
  },
  memberInfo: {
    padding: "18px",
  },
  deleteBtn: {
    margin: "0 18px 18px",
    width: "calc(100% - 36px)",
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