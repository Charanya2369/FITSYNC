export default function LandingScreen() {
  return (
    <div style={styles.container}>

      {/* MAIN TITLE */}
      <h1 style={styles.logo}>FitSync</h1>

      {/* SUBTEXT */}
      <p style={styles.tagline}>Smart Fit • Sustainable Fashion • AI-Powered Sizing</p>

      {/* BUTTON GROUP */}
      <div style={styles.buttonContainer}>
        <a href="/register" style={styles.primaryButton}>Get Started</a>
        <a href="#" style={styles.secondaryButton}>Download App</a>
      </div>

      {/* LEARN MORE */}
      <a href="#" style={styles.learnMore}>Learn More →</a>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #1f2937, #0f172a)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontFamily: "Arial",
    textAlign: "center"
  },

  logo: {
    fontSize: "60px",
    fontWeight: "bold",
    marginBottom: "10px"
  },

  tagline: {
    fontSize: "20px",
    opacity: 0.8,
    marginBottom: "30px"
  },

  buttonContainer: {
    display: "flex",
    gap: "20px",
    marginBottom: "25px"
  },

  primaryButton: {
    padding: "12px 30px",
    background: "#10b981",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: "6px",
    textDecoration: "none",
    fontSize: "16px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
  },

  secondaryButton: {
    padding: "12px 30px",
    background: "rgba(255,255,255,0.1)",
    borderRadius: "6px",
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    backdropFilter: "blur(10px)"
  },

  learnMore: {
    marginTop: "10px",
    fontSize: "16px",
    opacity: "0.8",
    color: "#10b981",
    textDecoration: "none"
  }
};
