import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        credentials: "include"
      });

      const data = await res.json();
      console.log("REGISTER RESPONSE:", data);

      alert(data.message);

      if (res.status === 200 || res.status === 201) {
        setTimeout(() => navigate("/login"), 200);
      }
    } catch (error) {
      console.error("REGISTER ERROR:", error);
      alert("Registration failed");
    }
  };

  return (
    <div style={container}>
      <div style={card}>
        <h2 style={title}>Create Your FitSync Account</h2>

        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          style={input}
        />

        <input
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          style={input}
        />

        <input
          name="password"
          type="password"
          placeholder="Create Password"
          onChange={handleChange}
          style={input}
        />

        <select name="role" onChange={handleChange} style={input}>
          <option value="customer">Customer</option>
          <option value="manufacturer">Manufacturer</option>
          <option value="retailer">Retailer</option>
        </select>

        <button onClick={handleSubmit} style={button}>
          Register
        </button>

        <p style={{ marginTop: 15 }}>
          Already have an account?
          <a href="/login" style={{ color: "#10b981", marginLeft: 5 }}>
            Login
          </a>
        </p>
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
  background: "linear-gradient(135deg,#1f2937,#0f172a)",
  color: "#fff",
  fontFamily: "Arial"
};

const card = {
  background: "rgba(255,255,255,0.08)",
  padding: "40px",
  borderRadius: "12px",
  width: "350px",
  backdropFilter: "blur(12px)",
  textAlign: "center",
  boxShadow: "0 0 25px rgba(0,0,0,0.4)"
};

const title = {
  marginBottom: "20px",
  fontSize: "26px",
  fontWeight: "bold"
};

const input = {
  width: "100%",
  padding: "12px",
  margin: "10px 0",
  borderRadius: "6px",
  border: "none",
  outline: "none"
};

const button = {
  width: "100%",
  padding: "12px",
  marginTop: "15px",
  background: "#10b981",
  border: "none",
  color: "#fff",
  fontWeight: "bold",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "16px"
};
