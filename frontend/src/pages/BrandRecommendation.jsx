export default function BrandRecommendation() {

  // Sample recommended results (later this comes from backend)
  const recommendations = [
    { brand: "Nike", size: "M", score: "98%" },
    { brand: "Zara", size: "M", score: "95%" },
    { brand: "H&M", size: "L", score: "92%" },
    { brand: "Adidas", size: "M", score: "90%" },
    { brand: "Uniqlo", size: "M", score: "89%" }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <h1 style={styles.title}>Best Fit Brands</h1>
        <p style={styles.subtitle}>Recommended using your body scan</p>

        <div style={styles.brandList}>
          {recommendations.map((b, i) => (
            <div key={i} style={styles.brandCard}>
              <h3>{b.brand}</h3>
              <p style={styles.sizeText}>Recommended Size: <b>{b.size}</b></p>
              <p style={styles.scoreText}>Match Score: {b.score}</p>
            </div>
          ))}
        </div>

        <button style={styles.button}>
          View Measurement Details →
        </button>

      </div>
    </div>
  );
}

/* ---------- STYLES ---------- */

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #1f2937, #0f172a)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial"
  },

  card: {
    width: "420px",
    background: "rgba(255,255,255,0.08)",
    padding: "35px",
    borderRadius: "14px",
    backdropFilter: "blur(12px)",
    color: "#fff",
    boxShadow: "0 0 25px rgba(0,0,0,0.3)",
    textAlign: "center"
  },

  title: {
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "5px"
  },

  subtitle: {
    fontSize: "14px",
    opacity: 0.7,
    marginBottom: "25px"
  },

  brandList: {
    maxHeight: "350px",
    overflowY: "auto",
    marginBottom: "20px"
  },

  brandCard: {
    padding: "18px",
    background: "rgba(255,255,255,0.12)",
    borderRadius: "10px",
    marginBottom: "12px",
    textAlign: "left"
  },

  sizeText: { marginTop: "5px" },

  scoreText: {
    marginTop: "3px",
    color: "#10b981"
  },

  button: {
    width: "100%",
    padding: "14px",
    background: "#10b981",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    color: "#fff"
  }
};
