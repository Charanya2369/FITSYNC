import { useNavigate } from "react-router-dom";

export default function CustomerSetup() {
  const navigate = useNavigate();

  return (
    <div style={container}>
      <div style={card}>
        <h1 style={title}>Welcome to FitSync</h1>
        <p style={subtitle}>Let’s set up your profile to get your perfect fit.</p>

        <button style={button} onClick={() => navigate("/customer/scan")}>
          Start Body Scan
        </button>
      </div>
    </div>
  );
}

/* STYLES */
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
  fontSize: "28px",
  fontWeight: "bold",
  marginBottom: "10px"
};

const subtitle = {
  fontSize: "16px",
  opacity: 0.8,
  marginBottom: "20px"
};

const button = {
  width: "100%",
  padding: "12px",
  background: "#10b981",
  border: "none",
  borderRadius: "6px",
  color: "#fff",
  fontSize: "16px",
  cursor: "pointer",
  fontWeight: "bold"
};
