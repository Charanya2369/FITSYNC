import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CottonSell() {
  const navigate = useNavigate();

  const [weight, setWeight] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  // Reward rules
  const POINTS_PER_KG = 5;
  const QUALITY_BONUS = 2;
  const MONTHLY_GOAL_BONUS = 10;

  // Calculate points
  const basePoints = weight ? weight * POINTS_PER_KG : 0;
  const totalPoints = weight
    ? basePoints + QUALITY_BONUS + MONTHLY_GOAL_BONUS
    : 0;

  // Handle image upload preview
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    alert(`Cotton submitted! You earned ${totalPoints} points.`);
    navigate("/homepage"); // Redirect after submission
  };

  return (
    <div style={page}>
      <div style={card}>
        <h1 style={title}>Sell Waste Cotton</h1>
        <p style={subtitle}>Upload cotton and earn reward points</p>

        {/* Upload Image */}
        <div style={uploadBox}>
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Cotton Preview"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          ) : (
            <p style={{ color: "#9CA3AF" }}>No file selected</p>
          )}

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ marginTop: "10px", color: "#E5E7EB" }}
          />
        </div>

        {/* Weight Input */}
        <input
          type="number"
          placeholder="Enter weight in kg"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          style={input}
        />

        {/* Reward Breakdown */}
        <div style={rewardBox}>
          <h3 style={rewardTitle}>Reward Structure</h3>
          <p>• {POINTS_PER_KG} points per kg</p>
          <p>• +{QUALITY_BONUS} quality bonus</p>
          <p>• +{MONTHLY_GOAL_BONUS} monthly goal bonus</p>

          <h3 style={totalPointsTitle}>
            Total Earned: <span style={{ color: "#10b981" }}>{totalPoints} pts</span>
          </h3>
        </div>

        {/* Submit Button */}
        <button
          disabled={!weight}
          onClick={handleSubmit}
          style={{ 
            ...button, 
            opacity: weight ? 1 : 0.5,
            cursor: weight ? "pointer" : "not-allowed" 
          }}
        >
          Submit & Continue
        </button>
      </div>
    </div>
  );
}

/* -------------- STYLES -------------- */

const page = {
  height: "100vh",
  background: "linear-gradient(135deg,#0f172a,#1f2937)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontFamily: "Arial"
};

const card = {
  width: "420px",
  padding: "40px",
  background: "rgba(255,255,255,0.08)",
  borderRadius: "16px",
  backdropFilter: "blur(10px)",
  textAlign: "center",
  boxShadow: "0 0 25px rgba(0,0,0,0.4)"
};

const title = {
  fontSize: "28px",
  fontWeight: "800",
  marginBottom: "8px"
};

const subtitle = {
  color: "#D1D5DB",
  marginBottom: "25px"
};

const uploadBox = {
  padding: "15px",
  background: "rgba(255,255,255,0.05)",
  borderRadius: "12px",
  marginBottom: "20px"
};

const input = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  outline: "none",
  marginBottom: "20px"
};

const rewardBox = {
  background: "rgba(255,255,255,0.05)",
  padding: "20px",
  borderRadius: "12px",
  marginBottom: "20px",
  textAlign: "left"
};

const rewardTitle = {
  color: "#10b981",
  fontSize: "18px",
  marginBottom: "10px",
  fontWeight: "700"
};

const totalPointsTitle = {
  marginTop: "12px",
  fontWeight: "800",
  fontSize: "16px"
};

const button = {
  width: "100%",
  padding: "12px",
  background: "#10b981",
  border: "none",
  color: "#fff",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "17px",
  fontWeight: "bold",
  boxShadow: "0 10px 25px rgba(16,185,129,0.25)"
};

