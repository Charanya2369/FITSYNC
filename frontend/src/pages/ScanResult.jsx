import { useLocation, useNavigate } from "react-router-dom";

export default function ScanResult() {
  const navigate = useNavigate();
  const location = useLocation();

  const measurements = location?.state;

  if (!measurements) {
    return (
      <div style={container}>
        <p style={{ color: "#fff" }}>⚠️ No scan data found.</p>
        <button style={button} onClick={() => navigate("/customer/scan")}>
          Go Back to Scan
        </button>
      </div>
    );
  }

  return (
    <div style={container}>
      <div style={card}>
        <h2 style={title}>Your Measurements</h2>

        <div style={resultBox}>
          <p>Height: <b>{measurements.height} cm</b></p>
          <p>Chest: <b>{measurements.chest} cm</b></p>
          <p>Waist: <b>{measurements.waist} cm</b></p>
        </div>

        <button
          style={button}
          onClick={() => navigate("/brand-recommendation", { state: measurements })}
        >
          View Size Recommendations →
        </button>

        <button
          style={secButton}
          onClick={() => navigate("/customer/fitness", { state: measurements })}
        >
          View Fitness Plan →
        </button>
      </div>
    </div>
  );
}

/* ---------- Styles ---------- */

const container = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg,#0f172a,#1e293b)",
  color: "#fff",
  fontFamily: "Arial"
};

const card = {
  background: "rgba(255,255,255,0.08)",
  padding: "40px",
  borderRadius: "12px",
  width: "380px",
  textAlign: "center",
  boxShadow: "0 0 25px rgba(0,0,0,0.4)",
  backdropFilter: "blur(10px)"
};

const title = {
  fontSize: "24px",
  marginBottom: "15px",
  fontWeight: "bold"
};

const resultBox = {
  background: "rgba(255,255,255,0.05)",
  padding: "20px",
  borderRadius: "10px",
  marginBottom: "20px"
};

const button = {
  width: "100%",
  padding: "12px",
  background: "#10b981",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  marginBottom: "12px",
  fontWeight: "bold",
  cursor: "pointer"
};

const secButton = {
  ...button,
  background: "#2563eb"
};

