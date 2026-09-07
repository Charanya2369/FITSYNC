import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>

      {/* HEADER */}
      <header style={styles.header}>
        <h2 style={styles.logo}>FitSync</h2>
        <button style={styles.headerBtn} onClick={() => navigate("/choose-role")}>
          Get Started
        </button>
      </header>

      {/* MAIN SECTION */}
      <main style={styles.main}>
        <h1 style={styles.title}>Why FitSync?</h1>

        <p style={styles.subtitle}>
          FitSync helps customers, retailers, and manufacturers through 
          AI-powered size recommendations, sustainability tracking, and 
          fitness insights.
        </p>

        <div style={styles.cardContainer}>
          {infoCard("👤 For Customers",
            "Accurate size recommendations, AI body scan, fitness plan based on body metrics, and rewards for recycling cotton."
          )}

          {infoCard("🏪 For Retailers",
            "Reduce return rates by 30–40%, upload standardized size charts, track analytics, and promote sustainability."
          )}

          {infoCard("🏭 For Manufacturers",
            "Receive cotton waste from customers, track production quality, analyze fit issues, and support circular fashion."
          )}
        </div>

        <button style={styles.getStartedBtn} onClick={() => navigate("/choose-role")}>
          Get Started →
        </button>
      </main>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <span>© 2025 FitSync</span>
        <span style={{ opacity: 0.7 }}>Privacy • Terms • Contact</span>
      </footer>
    </div>
  );
}

/* Helper Component */
function infoCard(title, text) {
  return (
    <div style={styles.card}>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardText}>{text}</p>
    </div>
  );
}

/* Styles */
const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 40px",
    alignItems: "center",
  },

  logo: {
    fontSize: "26px",
    fontWeight: "bold",
  },

  headerBtn: {
    background: "#10b981",
    border: "none",
    padding: "10px 16px",
    borderRadius: "8px",
    color: "#fff",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
  },

  main: {
    textAlign: "center",
    padding: "40px 20px",
  },

  title: {
    fontSize: "40px",
    marginBottom: "12px",
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: "16px",
    opacity: 0.85,
    maxWidth: "650px",
    margin: "0 auto 50px",
  },

  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "40px",
  },

  card: {
    width: "300px",
    padding: "20px",
    background: "rgba(255,255,255,0.07)",
    borderRadius: "12px",
    backdropFilter: "blur(10px)",
    textAlign: "left",
  },

  cardTitle: {
    fontSize: "20px",
    marginBottom: "10px",
    color: "#10b981",
  },

  cardText: {
    opacity: 0.85,
    fontSize: "14px",
  },

  getStartedBtn: {
    background: "#10b981",
    padding: "14px 26px",
    borderRadius: "10px",
    border: "none",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "20px",
  },

  footer: {
    marginTop: "auto",
    padding: "20px 40px",
    display: "flex",
    justifyContent: "space-between",
    opacity: 0.8,
  },
};
