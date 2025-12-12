export default function RetailerDashboard() {
  return (
    <div style={page}>
      <h1 style={title}>Welcome, Retailer</h1>

      {/* ---- TOP ANALYTICS ---- */}
      <div style={analyticsRow}>
        <div style={analyticsCard}>
          <h3 style={cardTitle}>Size Charts</h3>
          <p style={cardValue}>8</p>
        </div>

        <div style={analyticsCard}>
          <h3 style={cardTitle}>Return Reduction</h3>
          <p style={{ ...cardValue, color: "#10b981" }}>23%</p>
        </div>
      </div>

      {/* ---- MAIN OPTIONS ---- */}
      <div style={optionsGrid}>

        {optionCard("Upload Size Chart")}
        {optionCard("Size Chart Standardization")}
        {optionCard("Why Recycle Cotton")}
        {optionCard("Sustainable Cotton Marketplace")}

      </div>

      {/* ---- MARKETPLACE ---- */}
      <div style={sectionCard}>
        <h2 style={sectionTitle}>Sustainable Cotton Marketplace</h2>

        <div style={marketGrid}>
          {marketItem("GreenText Manufacturing", "Premium quality", "$2.50 / kg")}
          {marketItem("Eco-Fiber Co.", "Recycled fiber bundles", "$3.10 / kg")}
          {marketItem("Customer Returns Pool", "Reusable cotton stock", "$1.80 / kg")}
        </div>
      </div>

      {/* ---- BRAND PERFORMANCE ---- */}
      <div style={sectionCard}>
        <h2 style={sectionTitle}>Brand Performance</h2>

        <p style={metric}>Sales Performance: <span style={metricValue}>$2847</span></p>
        <p style={metric}>Total Transactions: <span style={metricValue}>312</span></p>
        <p style={metric}>Conversion Rate: <span style={metricValue}>18%</span></p>
        <p style={metric}>Revenue This Month: <span style={metricValue}>$12,450</span></p>

        {/* Size Distribution */}
        <div style={{ marginTop: "20px" }}>
          <h3 style={secondaryTitle}>Size Distribution</h3>
          <div style={sizeDistRow}>
            {sizeBox("S", 25)}
            {sizeBox("M", 40)}
            {sizeBox("L", 20)}
            {sizeBox("XL", 15)}
          </div>
        </div>
      </div>

      {/* ---- CUSTOMER INSIGHTS ---- */}
      <div style={sectionCard}>
        <h2 style={sectionTitle}>Customer Insights</h2>

        <p style={metric}>Average Customer Age: <span style={metricValue}>27 yrs</span></p>
        <p style={metric}>Return Rate: <span style={metricValue}>12%</span></p>
        <p style={metric}>Satisfaction Score: <span style={metricValue}>4.6 / 5</span></p>
        <p style={metric}>Peak Scan Time: <span style={metricValue}>7 PM</span></p>
      </div>
    </div>
  );
}

/* ---------- COMPONENT HELPERS ---------- */

function optionCard(label) {
  return (
    <div style={optionStyle}>
      <h3 style={optionLabel}>{label}</h3>
    </div>
  );
}

function marketItem(name, desc, price) {
  return (
    <div style={marketCard}>
      <h3 style={marketName}>{name}</h3>
      <p style={marketDesc}>{desc}</p>
      <p style={marketPrice}>{price}</p>
    </div>
  );
}

function sizeBox(size, percentage) {
  return (
    <div style={sizeCard}>
      <p style={{ fontSize: "18px", fontWeight: "700" }}>{size}</p>
      <p style={{ fontSize: "14px", color: "#10b981" }}>{percentage}%</p>
    </div>
  );
}

/* ---------- STYLES ---------- */

const page = {
  minHeight: "100vh",
  background: "linear-gradient(135deg,#0f172a,#1f2937)",
  color: "white",
  padding: "40px",
  fontFamily: "Arial"
};

const title = {
  fontSize: "34px",
  fontWeight: "800",
  textAlign: "center",
  marginBottom: "30px"
};

const analyticsRow = {
  display: "flex",
  gap: "20px",
  justifyContent: "center",
  marginBottom: "30px"
};

const analyticsCard = {
  background: "rgba(255,255,255,0.08)",
  padding: "20px 40px",
  borderRadius: "12px",
  backdropFilter: "blur(10px)",
  textAlign: "center",
  width: "200px",
  boxShadow: "0 0 25px rgba(0,0,0,0.3)"
};

const cardTitle = {
  fontSize: "16px",
  color: "#9CA3AF"
};

const cardValue = {
  fontSize: "32px",
  fontWeight: "800"
};

const optionsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "20px",
  marginBottom: "30px"
};

const optionStyle = {
  background: "rgba(255,255,255,0.08)",
  padding: "20px",
  borderRadius: "14px",
  textAlign: "center",
  cursor: "pointer",
  boxShadow: "0 0 25px rgba(0,0,0,0.4)",
  transition: "0.3s"
};

const optionLabel = {
  fontWeight: "700",
  fontSize: "16px"
};

const sectionCard = {
  background: "rgba(255,255,255,0.06)",
  padding: "25px",
  marginTop: "30px",
  borderRadius: "16px",
  backdropFilter: "blur(10px)",
  boxShadow: "0 0 25px rgba(0,0,0,0.4)"
};

const sectionTitle = {
  fontSize: "22px",
  fontWeight: "700",
  marginBottom: "15px",
  color: "#10b981"
};

const marketGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px"
};

const marketCard = {
  background: "rgba(255,255,255,0.08)",
  padding: "18px",
  borderRadius: "12px",
  textAlign: "center"
};

const marketName = { fontWeight: "700", fontSize: "16px" };
const marketDesc = { color: "#D1D5DB", fontSize: "14px" };
const marketPrice = { color: "#10b981", fontWeight: "700" };

const metric = {
  marginBottom: "8px",
  fontSize: "16px"
};

const metricValue = {
  color: "#10b981",
  fontWeight: "700"
};

const secondaryTitle = { marginBottom: "10px", color: "#D1FAE5" };

const sizeDistRow = {
  display: "flex",
  gap: "20px",
  marginTop: "10px"
};

const sizeCard = {
  background: "rgba(255,255,255,0.08)",
  padding: "10px 15px",
  borderRadius: "10px",
  textAlign: "center"
};

