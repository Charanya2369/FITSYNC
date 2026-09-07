import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function BodyScan() {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate a real scan with animation and delay
    setTimeout(() => {
      const measurements = {
        height: 165,
        chest: 88,
        waist: 72,
      };

      // Navigate to result page with measurements
      navigate("/customer/scan-result", { state: measurements });
    }, 5000); // 5 seconds scanning time
  }, [navigate]);

  return (
    <div style={container}>
      <div style={card}>
        <h2 style={title}>Body Mirror Scan</h2>
        <p style={subtitle}>Position yourself in the frame and start scanning</p>

        <div style={scanBox}>
          <p style={scanText}>🔍 Scanning... please stay still</p>
        </div>

        <button style={button}>Scanning…</button>
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
  fontWeight: "bold",
  marginBottom: "6px"
};

const subtitle = {
  fontSize: "14px",
  opacity: 0.8,
  marginBottom: "20px"
};

const scanBox = {
  height: "260px",
  background: "rgba(255,255,255,0.05)",
  borderRadius: "12px",
  marginBottom: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const scanText = {
  color: "#10b981",
  fontSize: "16px",
  fontWeight: "bold"
};

const button = {
  width: "100%",
  padding: "12px",
  background: "#10b981",
  border: "none",
  borderRadius: "6px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold"
};


