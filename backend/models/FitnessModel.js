import { Schema, model } from "mongoose";
const fitnessSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "user", required: true },
    height: Number,
    weight: Number,
    bmi: Number,
    bodyFat: Number,
    goal: {
      type: String,
      enum: ["lose_weight", "gain_weight", "maintain", "build_muscle"],
      default: "maintain",
    },
    recommendations: {
      dietPlan: String,
      workoutPlan: String,
      calorieIntake: Number,
    },
    history: [
      {
        date: { type: Date, default: Date.now },
        weight: Number,
        bmi: Number,
      }
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const FitnessModel = model("fitness", fitnessSchema);
