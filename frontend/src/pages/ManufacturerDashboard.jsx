import { useState } from "react";

export default function ManufacturerDashboard() {
  // simulated data (replace with API calls later)
  const [uploads] = useState([
    { id: 1, name: "Batch A - 20kg", quality: "Good", points: 100 },
    { id: 2, name: "Batch B - 12kg", quality: "Average", points: 62 }
  ]);

  const fitFeedback = [
    { issue: "Sleeves too long", percent: 32 },
    { issue: "Chest too tight", percent: 28 },
    { issue: "Length too short", percent: 25 },
    { issue: "Waist too loose", percent: 15 }
  ];

  const rewardRules = {
    perKg: 5,
    qualityBonus: 2,
    monthlyGoal: 10
  };

  return (
    <div style={page}>
      <h1 style={title}>Manufacturer Dashboard</h1>

      <div style={topRow}>
        <div style={statCard}>
          <div style={statLabel}>Uploaded Cotton (kg)</div>
          <div style={statValue}>32 kg</div>
        </div>

        <div style={statCard}>
          <div style={statLabel}>Pending Quality Checks</div>
          <div style={statValue}>3</div>
        </div>

        <div style={statCard}>
          <div style={statLabel}>Reward Points Pool</div>
          <div style={{ ...statValue, color: "#10b981" }}>172 pts</div>
        </div>
      </div>

      {/* Upload area */}
      <section style={section}>
        <h2 style={sectionTitle}>Upload Waste Cotton</h2>
        <div style={uploadRow}>
          <div style={uploadBox}>
            <p style={{ color: "#9CA3AF" }}>Drag & drop images or</p>
            <input type="file" accept="image/*" />
          </div>

          <div style={uploadInfo}>
            <p style={{ marginBottom: 8, color: "#D1D5DB" }}>
              Reward rules:
            </p>
            <p>• {rewardRules.perKg} pts per kg</p>
            <p>• +{rewardRules.qualityBonus} quality bonus</p>
            <p>• +{rewardRules.monthlyGoal} monthly goal bonus</p>
            <button style={smallBtn}>Upload</button>
          </div>
        </div>
      </section>

      {/* Fit feedback */}
      <section style={section}>
        <h2 style={sectionTitle}>Fit Feedback Dashboard</h2>
        <div style={feedbackGrid}>
          {fitFeedback.map((f) => (
            <div key={f.issue} style={feedbackCard}>
              <div style={feedbackIssue}>{f.issue}</div>
              <div style={feedbackPercent}>{f.percent}%</div>
              <div style={feedbackBarWrap}>
                <div style={{ ...feedbackBar, width: `${f.percent}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Uploads and Planning */}
      <section style={section}>
        <h2 style={sectionTitle}>Uploads & Production Planning</h2>

        <div style={uploadsRow}>
          <div style={uploadsList}>
            {uploads.map((u) => (
              <div key={u.id} style={uploadRowItem}>
                <div>
                  <div style={{ fontWeight: 700 }}>{u.name}</div>
                  <div style={{ color: "#9CA3AF", fontSize: 13 }}>{u.quality}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontWeight: 800 }}>{u.points} pts</div>
                  <div style={{ fontSize: 12, color: "#9CA3AF" }}>view</div>
                </div>
              </div>
            ))}
          </div>

          <div style={planningBox}>
            <h3 style={{ marginBottom: 8 }}>Production Planning</h3>
            <p style={{ color: "#D1D5DB", marginBottom: 12 }}>
              Forecast next month needs and plan recycled feedstock allocation.
            </p>
            <button style={smallBtn}>Create Plan</button>
          </div>
        </div>
      </section>

      {/* Complaints & Standards */}
      <section style={section}>
        <h2 style={sectionTitle}>Complaints & Standards</h2>
        <div style={standardsGrid}>
          <div style={standardCard}>
            <h4 style={{ color: "#10b981" }}>Standards</h4>
            <p style={{ color: "#D1D5DB" }}>GOTS compliance checklist, quality thresholds.</p>
            <button style={smallBtn}>View</button>
          </div>

          <div style={complaintCard}>
            <h4 style={{ color: "#F97316" }}>Complaints</h4>
            <p style={{ color: "#D1D5DB" }}>
              Consumer fit complaints & production issues.
            </p>
            <button style={smallBtn}>Resolve</button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- STYLES ---------- */

const page = {
  minHeight: "100vh",
  background: "linear-gradient(135deg,#0f172a,#111827)",
  color: "#fff",
  padding: 30,
  fontFamily: "Arial"
};

const title = {
  fontSize: 28,
  fontWeight: 800,
  textAlign: "center",
  marginBottom: 20
};

const topRow = {
  display: "flex",
  gap: 20,
  justifyContent: "center",
  marginBottom: 24
};

const statCard = {
  background: "rgba(255,255,255,0.06)",
  padding: 18,
  borderRadius: 12,
  width: 220,
  textAlign: "center",
  boxShadow: "0 8px 30px rgba(0,0,0,0.35)"
};

const statLabel = { color: "#9CA3AF", marginBottom: 6 };
const statValue = { fontSize: 22, fontWeight: 800 };

const section = {
  background: "rgba(255,255,255,0.03)",
  padding: 18,
  borderRadius: 14,
  marginBottom: 20
};

const sectionTitle = {
  fontSize: 18,
  color: "#10b981",
  fontWeight: 800,
  marginBottom: 12
};

const uploadRow = { display: "flex", gap: 16, alignItems: "center" };

const uploadBox = {
  flex: 1,
  padding: 18,
  background: "rgba(255,255,255,0.05)",
  borderRadius: 10,
  textAlign: "center"
};

const uploadInfo = { width: 240, padding: 12, textAlign: "left" };

const smallBtn = {
  marginTop: 12,
  padding: "10px 14px",
  background: "#10b981",
  color: "#fff",
  border: "none",
  borderRadius: 8,
  cursor: "pointer",
  fontWeight: 700
};

const feedbackGrid = { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 };

const feedbackCard = {
  padding: 14,
  background: "rgba(255,255,255,0.05)",
  borderRadius: 10,
  textAlign: "center"
};

const feedbackIssue = { fontWeight: 700, marginBottom: 6, color: "#E5E7EB" };
const feedbackPercent = { fontSize: 18, fontWeight: 800, color: "#10b981" };

const feedbackBarWrap = { height: 8, background: "rgba(255,255,255,0.03)", borderRadius: 8, marginTop: 8 };
const feedbackBar = { height: "100%", background: "#10b981", borderRadius: 8 };

const uploadsRow = { display: "flex", gap: 16, alignItems: "flex-start" };
const uploadsList = { flex: 1 };

const uploadRowItem = {
  display: "flex",
  justifyContent: "space-between",
  background: "rgba(255,255,255,0.05)",
  padding: 12,
  borderRadius: 8,
  marginBottom: 8
};

const planningBox = {
  width: 260,
  padding: 12,
  background: "rgba(255,255,255,0.05)",
  borderRadius: 10
};

const standardsGrid = { display: "flex", gap: 16 };
const standardCard = { flex: 1, padding: 14, background: "rgba(255,255,255,0.05)", borderRadius: 10 };
const complaintCard = { flex: 1, padding: 14, background: "rgba(255,255,255,0.05)", borderRadius: 10 };
