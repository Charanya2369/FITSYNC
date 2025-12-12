import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        credentials: "include"
      });

      const data = await res.json();
      alert(data.message);

      if (!res.ok) return;

      const payload = data.payload;

      // store in localStorage
      localStorage.setItem("token", payload.token);
      localStorage.setItem("role", payload.role);
      localStorage.setItem("userId", payload.id);

      // Redirect based on role
      if (payload.role === "customer") {
        navigate("/homepage");   // ✅ correct path
       } 
       else if (payload.role === "retailer") {
        navigate("/retailer/dashboard");  // ✅ correct path
       } 
       else if (payload.role === "manufacturer") {
        navigate("/manufacturer/dashboard"); // ✅ correct path
        }
    } catch (error) {
      console.error("LOGIN ERROR:", error);
      alert("Login failed");
    }
  };

  return (
    <div style={container}>
      <div style={card}>
        <h2 style={title}>Welcome Back</h2>

        <input
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          style={input}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          style={input}
        />

        <button onClick={handleSubmit} style={button}>
          Login
        </button>

        <p style={{ marginTop: 15 }}>
          Don’t have an account?
          <a href="/register" style={{ color: "#10b981", marginLeft: 5 }}>
            Register
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
