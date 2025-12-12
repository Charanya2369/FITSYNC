import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

// Import Routes
import { authRoute } from "./APIs/AuthAPIs.js";
import { userRoute } from "./APIs/UserAPIs.js";
import { scanRoute } from "./APIs/ScanAPIs.js";
import { sizeRoute } from "./APIs/SizeAPIs.js";
import { brandRoute } from "./APIs/BrandAPIs.js";
import { fitnessRoute } from "./APIs/FitnessAPIs.js";
import { retailerRoute } from "./APIs/RetailerAPIs.js";
import { manufacturerRoute } from "./APIs/ManufacturerAPIs.js";

dotenv.config();

const app = express();

// -------------------- MIDDLEWARES -------------------- //
app.use(express.json());
app.use(cookieParser());

// IMPORTANT FIX — allow frontend to communicate with backend
app.use(
  cors({
    origin: "http://localhost:5173",   // React frontend
    credentials: true,                  // allow cookies
  })
);

// ----------------------- ROUTES ----------------------- //
app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/scan", scanRoute);
app.use("/size", sizeRoute);
app.use("/brand", brandRoute);
app.use("/fitness", fitnessRoute);
app.use("/retailer", retailerRoute);
app.use("/manufacturer", manufacturerRoute);

// ----------------------- START SERVER ----------------------- //
async function startServer() {
  try {
    await connectDB();
    console.log("✅ MongoDB connected successfully");

    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(` Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(" Server start error:", err.message);
  }
}

startServer();
