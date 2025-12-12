import { useNavigate } from "react-router-dom";

export default function UserTypeSelection() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Choose Your Role</h1>

      <div style={styles.cardContainer}>

        {/* CUSTOMER BUTTON */}
        <div
          style={styles.card}
          onClick={() => navigate("/customer/setup")}   // ⭐ THIS IS THE FIX
        >
          <h2 style={styles.cardTitle}>Customer</h2>
          <p style={styles.cardText}>Scan your body, get size recommendations, fitness plans, and rewards.</p>
        </div>

        {/* RETAILER BUTTON */}
        <div
          style={styles.card}
          onClick={() => navigate("/retailer/dashboard")}
        >
          <h2 style={styles.cardTitle}>Retailer</h2>
          <p style={styles.cardText}>Upload size charts, reduce returns, and track analytics.</p>
        </div>

        {/* MANUFACTURER BUTTON */}
        <div
          style={styles.card}
          onClick={() => navigate("/manufacturer/dashboard")}
        >
          <h2 style={styles.cardTitle}>Manufacturer</h2>
          <p style={styles.cardText}>Upload cotton waste, monitor quality, analyze fit feedback.</p>
        </div>

      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    background: "linear-gradient(135deg,#0f172a,#1e293b)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontFamily: "Arial"
  },

  title: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "30px"
  },

  cardContainer: {
    display: "flex",
    gap: "25px"
  },

  card: {
    width: "260px",
    padding: "20px",
    background: "rgba(255,255,255,0.08)",
    borderRadius: "12px",
    textAlign: "center",
    cursor: "pointer",
    transition: "0.3s",
  },

  cardTitle: {
    fontSize: "22px",
    marginBottom: "10px",
    color: "#10b981",
  },

  cardText: {
    fontSize: "14px",
    opacity: 0.85
  }
};
