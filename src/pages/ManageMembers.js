import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API = "https://bhartiya-trust-6.onrender.com";

export default function ManageMembers() {
  const navigate = useNavigate();

  const [members, setMembers] = useState([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchMembers = async () => {
    try {
      const res = await fetch(`${API}/api/members`);
      const data = await res.json();

      if (Array.isArray(data)) {
        setMembers(data);
      } else {
        console.log("Members API did not return array:", data);
        setMembers([]);
      }
    } catch (error) {
      console.log("Fetch members error:", error);
      setMembers([]);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const addMember = async (e) => {
    e.preventDefault();

    if (!name || !role || !image) {
      alert("Please fill name, role and image");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("name", name);
      formData.append("role", role);
      formData.append("image", image);

      const res = await fetch(`${API}/api/members`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const text = await res.text();
        console.log("Upload failed:", text);
        alert("Upload failed. Check Render logs.");
        return;
      }

      setName("");
      setRole("");
      setImage(null);

      await fetchMembers();
      alert("Member added successfully");
    } catch (error) {
      console.log("Add member error:", error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const deleteMember = async (id) => {
    if (!window.confirm("Delete this member?")) return;

    try {
      await fetch(`${API}/api/members/${id}`, {
        method: "DELETE",
      });

      await fetchMembers();
    } catch (error) {
      console.log("Delete member error:", error);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.topbar}>
        <button style={styles.backBtn} onClick={() => navigate("/admin-dashboard")}>
          ← Dashboard
        </button>

        <div>
          <h1 style={styles.title}>Manage Members</h1>
          <p style={styles.subtitle}>Add, view and remove trust members</p>
        </div>

        <div style={styles.statusBox}>
          <span>Total</span>
          <strong>{members.length}</strong>
        </div>
      </div>

      <div style={styles.grid}>
        <form style={styles.formCard} onSubmit={addMember}>
          <h2>Add New Member</h2>

          <label style={styles.label}>Member Name</label>
          <input
            style={styles.input}
            type="text"
            placeholder="Enter member name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label style={styles.label}>Role / Designation</label>
          <input
            style={styles.input}
            type="text"
            placeholder="Enter role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />

          <label style={styles.label}>Upload Photo</label>
          <input
            style={styles.input}
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <button style={styles.submitBtn} type="submit" disabled={loading}>
            {loading ? "Uploading..." : "+ Add Member"}
          </button>
        </form>

        <div style={styles.listCard}>
          <h2>Members List</h2>

          {members.length === 0 ? (
            <p style={styles.empty}>No members added yet.</p>
          ) : (
            <div style={styles.memberGrid}>
              {members.map((member) => (
                <div style={styles.memberCard} key={member.id}>
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    style={styles.memberImg}
                  />

                  <div>
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>

                  <button
                    style={styles.deleteBtn}
                    onClick={() => deleteMember(member.id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#07111f,#111827,#201033)",
    color: "#fff",
    padding: "30px",
    fontFamily: "Inter, Arial, sans-serif",
  },
  topbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    marginBottom: "30px",
  },
  backBtn: {
    background: "rgba(255,255,255,0.08)",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.12)",
    padding: "12px 18px",
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
    background: "linear-gradient(135deg,#a78bfa,#38bdf8)",
    color: "#111827",
    padding: "15px 25px",
    borderRadius: "18px",
    display: "grid",
    textAlign: "center",
    fontWeight: "800",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "380px 1fr",
    gap: "25px",
  },
  formCard: {
    background: "rgba(15,23,42,0.9)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "24px",
    padding: "25px",
  },
  listCard: {
    background: "rgba(15,23,42,0.9)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "24px",
    padding: "25px",
  },
  label: {
    display: "block",
    marginTop: "16px",
    marginBottom: "8px",
    color: "#cbd5e1",
  },
  input: {
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.14)",
    background: "#020617",
    color: "#fff",
    boxSizing: "border-box",
  },
  submitBtn: {
    width: "100%",
    marginTop: "22px",
    padding: "14px",
    borderRadius: "14px",
    border: "none",
    background: "linear-gradient(135deg,#facc15,#fb923c)",
    color: "#111827",
    fontWeight: "900",
    cursor: "pointer",
  },
  empty: {
    color: "#94a3b8",
  },
  memberGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px",
  },
  memberCard: {
    background: "#020617",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "18px",
    padding: "16px",
  },
  memberImg: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "14px",
    marginBottom: "12px",
  },
  deleteBtn: {
    width: "100%",
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    background: "#ef4444",
    color: "#fff",
    cursor: "pointer",
  },
};