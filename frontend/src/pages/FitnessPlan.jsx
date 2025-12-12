import { useLocation, useNavigate } from "react-router-dom";

export default function FitnessPlan() {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) {
    return (
      <div style={styles.container}>
        <p style={{ color: "#fff" }}>No fitness data found.</p>
      </div>
    );
  }

  const { height, chest, waist } = state;

  // ---------- BMI CALCULATION (simple approx) ----------
  const heightMeters = height / 100;
  const bmi = Math.round(waist / heightMeters ** 2);

  let status = "";
  let diet = [];
  let exercises = [];

  if (bmi < 18.5) {
    status = "Underweight";
    diet = [
      "High-calorie foods (rice, potatoes, oats)",
      "Protein-rich meals (eggs, chicken, paneer)",
      "Healthy fats (nuts, peanut butter, ghee)",
      "Milkshakes & fruit smoothies"
    ];
    exercises = [
      "Strength training 4× weekly",
      "Push-ups 3 sets × 12 reps",
      "Weighted squats 3 sets × 15 reps",
      "Deadlifts (light weight) 3 sets × 10 reps"
    ];
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    status = "Normal Weight";
    diet = [
      "Balanced mix: carbs + protein + vegetables",
      "Drink 2–3 L water daily",
      "Fruits & whole grains each day",
      "Lean protein (fish, chicken, beans)"
    ];
    exercises = [
      "30 min brisk walking",
      "Light weight training 3× weekly",
      "Yoga/stretching 20 min",
      "Cycling twice a week"
    ];
  } else {
    status = "Overweight";
    diet = [
      "Calorie-deficit plan (avoid sugary foods)",
      "High-protein meals (lentils, tofu, chicken)",
      "Green vegetables in every meal",
      "Avoid soft drinks & fried food"
    ];
    exercises = [
      "Cardio 30–40 min daily",
      "Skipping (300–500 reps)",
      "Planks 3× for 40 seconds",
      "Burpees 3 sets × 12 reps"
    ];
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <h1 style={styles.title}>Your Fitness Plan</h1>

        <p style={styles.bmiText}>
          <strong>BMI Score:</strong> {bmi} — 
          <span style={{ color: "#10b981" }}> {status}</span>
        </p>

        <h2 style={styles.sectionTitle}>Diet Recommendations</h2>
        <ul style={styles.list}>
          {diet.map((d, i) => (
            <li key={i} style={styles.listItem}>{d}</li>
          ))}
        </ul>

        <h2 style={styles.sectionTitle}>Exercise Plan</h2>
        <ul style={styles.list}>
          {exercises.map((ex, i) => (
            <li key={i} style={styles.listItem}>{ex}</li>
          ))}
        </ul>

        <button
          style={styles.button}
          onClick={() => navigate("/customer/cotton-sell")}
        >
          Continue → Cotton Recycling
        </button>

      </div>
    </div>
  );
}

/* ---------- STYLES ---------- */
const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#0f172a,#1e293b)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontFamily: "Arial",
  },

  card: {
    background: "rgba(255,255,255,0.08)",
    padding: "40px",
    borderRadius: "14px",
    width: "450px",
    boxShadow: "0 5px 25px rgba(0,0,0,0.4)",
    backdropFilter: "blur(10px)",
  },

  title: {
    fontSize: "28px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px",
  },

  bmiText: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "18px",
  },

  sectionTitle: {
    fontSize: "20px",
    marginTop: "20px",
    marginBottom: "10px",
    color: "#10b981",
  },

  list: {
    paddingLeft: "20px",
    marginBottom: "20px",
  },

  listItem: {
    marginBottom: "8px",
    opacity: 0.9,
  },

  button: {
    width: "100%",
    padding: "14px",
    background: "#10b981",
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "20px",
    fontSize: "16px",
  }
};
