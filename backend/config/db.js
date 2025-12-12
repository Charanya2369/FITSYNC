import mongoose from "mongoose";
export const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error("MONGO_URI is missing in .env file");
  }

  try {
    await mongoose.connect(uri); // NO EXTRA OPTIONS FOR MONGOOSE v9+

    console.log("✅ Database connected");
  } catch (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  }
};
