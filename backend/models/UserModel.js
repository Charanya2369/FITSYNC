import { Schema, model } from "mongoose";
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["customer", "retailer", "manufacturer", "admin"],
      default: "customer",
    },
    //details
    gender: { type: String, enum: ["male", "female", "other"] },
    age: { type: Number },
    height: { type: Number },
    weight: { type: Number },
    bmi: { type: Number },
    fitnessLevel: { type: String },
    scans: [{ type: Schema.Types.ObjectId, ref: "scan" }],
    rewardPoints: { type: Number, default: 0 },
    subscriptionPlan: {
      type: String,
      enum: ["free", "premium"],
      default: "free",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export const UserModel = model("user", userSchema);
