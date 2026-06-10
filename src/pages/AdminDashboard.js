import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [memberCount, setMemberCount] = useState(0);
  const [galleryCount, setGalleryCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    fetch("http://localhost:8080/api/members")
      .then((res) => res.json())
      .then((data) => setMemberCount(data.length))
      .catch(() => setMemberCount(0));

    fetch("http://localhost:8080/api/gallery")
      .then((res) => res.json())
      .then((data) => setGalleryCount(data.length))
      .catch(() => setGalleryCount(0));

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/admin-login");
  };

  const formattedDate = currentTime.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedTime = currentTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const totalModules = 6;
  const completedModules = 5;
  const completion = Math.round((completedModules / totalModules) * 100);

  return (
    <div
      style={{
        ...styles.page,
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      {isMobile && (
        <button
          style={styles.mobileMenuBtn}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰
        </button>
      )}

      <aside
        style={{
          ...styles.sidebar,
          width: isMobile ? "100%" : "280px",
          display: isMobile && !sidebarOpen ? "none" : "block",
        }}
      >
        <div style={styles.brandBox}>
          <div style={styles.logoCircle}>B</div>
          <div>
            <h2 style={styles.logo}>BWT Admin</h2>
            <p style={styles.logoSub}>SaaS Control Center</p>
          </div>
        </div>

        <p style={styles.menuTitle}>MAIN MENU</p>

        <button style={styles.activeMenu}>📊 Dashboard</button>

        <button
          style={styles.menuBtn}
          onClick={() => navigate("/admin/members")}
        >
          👥 Members
        </button>

        <button
          style={styles.menuBtn}
          onClick={() => navigate("/admin/gallery")}
        >
          🖼 Gallery
        </button>

        <button
          style={styles.menuBtn}
          onClick={() => navigate("/admin/about")}
        >
          📝 About Section
        </button>

        <button
          style={styles.menuBtn}
          onClick={() => navigate("/admin/contact")}
        >
          📞 Contact Details
        </button>

        <button
          style={styles.menuBtn}
          onClick={() => navigate("/admin/donation")}
        >
          💰 Donations
        </button>

        <p style={styles.menuTitle}>SYSTEM</p>

        <button
          style={styles.menuBtn}
          onClick={() => navigate("/admin/settings")}
        >
          ⚙ Settings
        </button>

        <button style={styles.logout} onClick={logout}>
          🚪 Logout
        </button>
      </aside>

      <main style={styles.main}>
        <header
          style={{
            ...styles.header,
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
          }}
        >
          <div>
            <h1 style={styles.heading}>Welcome Back, Admin 👋</h1>
            <p style={styles.date}>
              Manage Bharatiya Welfare Trust website from one place
            </p>
          </div>

          <div style={styles.clockBox}>
            <strong>{formattedTime}</strong>
            <span>{formattedDate}</span>
          </div>
        </header>

        <section
          style={{
            ...styles.hero,
            flexDirection: isMobile ? "column" : "row",
            gap: "20px",
          }}
        >
          <div>
            <h2 style={styles.heroTitle}>Website Control Dashboard</h2>

            <p style={styles.heroText}>
              Your website CMS is {completion}% ready. Members, gallery, about,
              contact and donation sections are connected with database.
            </p>

            <div style={styles.progressOuter}>
              <div
                style={{
                  ...styles.progressInner,
                  width: `${completion}%`,
                }}
              ></div>
            </div>
          </div>

          <button
            style={styles.heroBtn}
            onClick={() => navigate("/admin/gallery")}
          >
            + Upload Gallery Image
          </button>
        </section>

        <div style={styles.stats}>
          <StatCard
            color1="#7c3aed"
            color2="#a78bfa"
            icon="👥"
            title="Total Members"
            value={memberCount}
          />

          <StatCard
            color1="#0284c7"
            color2="#38bdf8"
            icon="🖼"
            title="Gallery Images"
            value={galleryCount}
          />

          <StatCard
            color1="#059669"
            color2="#34d399"
            icon="📞"
            title="Contact Section"
            value="Active"
          />

          <StatCard
            color1="#ea580c"
            color2="#fb923c"
            icon="💰"
            title="Donation Section"
            value="Active"
          />
        </div>

        <section
          style={{
            ...styles.analyticsGrid,
            gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr",
          }}
        >
          <div style={styles.panel}>
            <div style={styles.panelHeader}>
              <h2>Quick Actions</h2>
              <span style={styles.badge}>Live CMS</span>
            </div>

            <div style={styles.actions}>
              <ActionCard
                title="Manage Members"
                desc="Add/delete trust members."
                icon="👥"
                onClick={() => navigate("/admin/members")}
              />

              <ActionCard
                title="Manage Gallery"
                desc="Upload activity photos."
                icon="🖼"
                onClick={() => navigate("/admin/gallery")}
                highlighted
              />

              <ActionCard
                title="Manage About"
                desc="Update mission and vision."
                icon="📝"
                onClick={() => navigate("/admin/about")}
              />

              <ActionCard
                title="Contact Details"
                desc="Edit phone and address."
                icon="📞"
                onClick={() => navigate("/admin/contact")}
              />

              <ActionCard
                title="Donation Settings"
                desc="Edit QR, UPI and bank."
                icon="💰"
                onClick={() => navigate("/admin/donation")}
              />

              <ActionCard
                title="Settings"
                desc="Branding and website setup."
                icon="⚙"
                onClick={() => navigate("/admin/settings")}
              />
            </div>
          </div>

          <div style={styles.sidePanel}>
            <h2>System Health</h2>

            <HealthItem label="Frontend" status="Running" />
            <HealthItem label="Backend API" status="Connected" />
            <HealthItem label="Database" status="Active" />
            <HealthItem label="Image Upload" status="Working" />
            <HealthItem label="Admin Login" status="Basic" />

            <div style={styles.noticeBox}>
              <strong>Client Ready Status</strong>
              <p>Website content can now be managed without editing code.</p>
            </div>
          </div>
        </section>

        <section
          style={{
            ...styles.bottomGrid,
            gridTemplateColumns: isMobile ? "1fr" : "1.5fr 1fr",
          }}
        >
          <div style={styles.activityPanel}>
            <h2>Recent Activity</h2>
            <div style={styles.activityItem}>
              ✅ Dashboard opened at {formattedTime}
            </div>
            <div style={styles.activityItem}>✅ Members module connected</div>
            <div style={styles.activityItem}>✅ Gallery upload enabled</div>
            <div style={styles.activityItem}>✅ Contact editor active</div>
            <div style={styles.activityItem}>✅ Donation settings active</div>
          </div>

          <div style={styles.summaryPanel}>
            <h2>CMS Summary</h2>
            <p>Total content modules: {totalModules}</p>
            <p>Completed modules: {completedModules}</p>
            <p>Pending: Backend secure login + deployment</p>
          </div>
        </section>
      </main>
    </div>
  );
}

function StatCard({ color1, color2, icon, title, value }) {
  return (
    <div
      style={{
        ...styles.statCard,
        background: `linear-gradient(135deg, ${color1}, ${color2})`,
      }}
    >
      <div style={styles.statIcon}>{icon}</div>
      <h2>{value}</h2>
      <p>{title}</p>
    </div>
  );
}

function ActionCard({ title, desc, icon, onClick, highlighted }) {
  return (
    <div
      onClick={onClick}
      style={highlighted ? styles.actionCardActive : styles.actionCard}
    >
      <div style={styles.actionIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <button style={highlighted ? styles.actionBtnActive : styles.actionBtn}>
        Open
      </button>
    </div>
  );
}

function HealthItem({ label, status }) {
  return (
    <div style={styles.healthItem}>
      <span>{label}</span>
      <strong>{status}</strong>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    minHeight: "100vh",
    background: "linear-gradient(135deg,#07111f,#111827,#201033)",
    color: "#fff",
    fontFamily: "Inter, Arial, sans-serif",
  },

  mobileMenuBtn: {
    position: "fixed",
    top: "15px",
    left: "15px",
    zIndex: 9999,
    background: "#a78bfa",
    color: "#111",
    border: "none",
    borderRadius: "12px",
    padding: "12px 16px",
    cursor: "pointer",
    fontSize: "20px",
    fontWeight: "bold",
  },

  sidebar: {
    background: "rgba(8,13,28,.95)",
    padding: "28px 22px",
    borderRight: "1px solid rgba(255,255,255,.08)",
  },

  brandBox: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    marginBottom: "35px",
  },

  logoCircle: {
    width: "48px",
    height: "48px",
    borderRadius: "14px",
    background: "linear-gradient(135deg,#a78bfa,#38bdf8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#0f172a",
    fontWeight: "800",
    fontSize: "22px",
  },

  logo: {
    margin: 0,
    fontSize: "22px",
  },

  logoSub: {
    margin: "4px 0 0",
    color: "#94a3b8",
    fontSize: "13px",
  },

  menuTitle: {
    fontSize: "12px",
    color: "#64748b",
    marginTop: "24px",
    marginBottom: "12px",
    letterSpacing: "1px",
  },

  activeMenu: {
    width: "100%",
    padding: "14px",
    background: "linear-gradient(135deg,#a78bfa,#38bdf8)",
    color: "#0f172a",
    border: "none",
    borderRadius: "14px",
    textAlign: "left",
    marginBottom: "10px",
    cursor: "pointer",
    fontWeight: "700",
  },

  menuBtn: {
    width: "100%",
    padding: "14px",
    background: "transparent",
    color: "#cbd5e1",
    border: "1px solid transparent",
    borderRadius: "14px",
    textAlign: "left",
    marginBottom: "8px",
    cursor: "pointer",
    fontSize: "15px",
  },

  logout: {
    width: "100%",
    padding: "14px",
    background: "linear-gradient(135deg,#ef4444,#f97316)",
    color: "#fff",
    border: "none",
    borderRadius: "14px",
    marginTop: "25px",
    cursor: "pointer",
    fontWeight: "700",
  },

  main: {
    flex: 1,
    padding: "30px",
    paddingTop: "55px",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "25px",
    gap: "18px",
  },

  heading: {
    margin: 0,
    fontSize: "30px",
  },

  date: {
    margin: "8px 0 0",
    color: "#94a3b8",
  },

  clockBox: {
    background: "rgba(255,255,255,.08)",
    padding: "14px 20px",
    borderRadius: "16px",
    display: "grid",
    textAlign: "right",
    border: "1px solid rgba(255,255,255,.12)",
  },

  hero: {
    background:
      "linear-gradient(135deg,rgba(167,139,250,.25),rgba(56,189,248,.18))",
    border: "1px solid rgba(255,255,255,.12)",
    borderRadius: "26px",
    padding: "28px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
  },

  heroTitle: {
    margin: 0,
    fontSize: "26px",
  },

  heroText: {
    color: "#cbd5e1",
    maxWidth: "650px",
    lineHeight: "1.6",
  },

  heroBtn: {
    background: "#fff",
    color: "#0f172a",
    border: "none",
    borderRadius: "14px",
    padding: "15px 22px",
    cursor: "pointer",
    fontWeight: "800",
  },

  progressOuter: {
    width: "100%",
    height: "10px",
    background: "rgba(255,255,255,.12)",
    borderRadius: "999px",
    marginTop: "15px",
    overflow: "hidden",
  },

  progressInner: {
    height: "100%",
    background: "linear-gradient(135deg,#a78bfa,#38bdf8)",
  },

  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "18px",
    marginBottom: "24px",
  },

  statCard: {
    borderRadius: "22px",
    padding: "24px",
  },

  statIcon: {
    fontSize: "30px",
  },

  analyticsGrid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "22px",
    marginBottom: "22px",
  },

  panel: {
    background: "rgba(15,23,42,.85)",
    border: "1px solid rgba(255,255,255,.12)",
    borderRadius: "24px",
    padding: "24px",
  },

  sidePanel: {
    background: "rgba(15,23,42,.85)",
    border: "1px solid rgba(255,255,255,.12)",
    borderRadius: "24px",
    padding: "24px",
  },

  panelHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  badge: {
    background: "rgba(167,139,250,.18)",
    color: "#c4b5fd",
    padding: "8px 12px",
    borderRadius: "999px",
    fontSize: "13px",
  },

  actions: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "18px",
    marginTop: "20px",
  },

  actionCard: {
    background: "rgba(2,6,23,.75)",
    border: "1px solid rgba(255,255,255,.1)",
    borderRadius: "20px",
    padding: "20px",
    cursor: "pointer",
  },

  actionCardActive: {
    background:
      "linear-gradient(135deg,rgba(124,58,237,.5),rgba(14,165,233,.35))",
    border: "1px solid #a78bfa",
    borderRadius: "20px",
    padding: "20px",
    cursor: "pointer",
  },

  actionIcon: {
    fontSize: "30px",
  },

  actionBtn: {
    width: "100%",
    padding: "11px",
    marginTop: "12px",
    background: "transparent",
    color: "#fff",
    border: "1px solid rgba(255,255,255,.2)",
    borderRadius: "12px",
    cursor: "pointer",
  },

  actionBtnActive: {
    width: "100%",
    padding: "11px",
    marginTop: "12px",
    background: "#fff",
    color: "#0f172a",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "800",
  },

  healthItem: {
    display: "flex",
    justifyContent: "space-between",
    background: "rgba(255,255,255,.06)",
    padding: "14px",
    borderRadius: "14px",
    marginBottom: "12px",
  },

  noticeBox: {
    background:
      "linear-gradient(135deg,rgba(167,139,250,.25),rgba(56,189,248,.15))",
    padding: "16px",
    borderRadius: "16px",
    marginTop: "18px",
  },

  bottomGrid: {
    display: "grid",
    gridTemplateColumns: "1.5fr 1fr",
    gap: "22px",
  },

  activityPanel: {
    background: "rgba(15,23,42,.85)",
    border: "1px solid rgba(255,255,255,.12)",
    borderRadius: "24px",
    padding: "24px",
  },

  summaryPanel: {
    background: "rgba(15,23,42,.85)",
    border: "1px solid rgba(255,255,255,.12)",
    borderRadius: "24px",
    padding: "24px",
  },

  activityItem: {
    background: "rgba(255,255,255,.06)",
    padding: "14px",
    borderRadius: "14px",
    marginBottom: "12px",
    color: "#d1d5db",
  },
};