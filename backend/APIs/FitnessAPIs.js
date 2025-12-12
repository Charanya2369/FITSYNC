import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { FitnessModel } from "../models/FitnessModel.js";
import { FitnessEngine } from "../services/FitnessEngine.js";
import { UserModel } from "../models/UserModel.js";
import { sendResponse } from "../utils/response.js";

export const fitnessRoute = express.Router();
//calculate bmi
fitnessRoute.post("/analyze", verifyToken, async (req, res) => {
  try {
    const { height, weight, goal } = req.body;

    if (!height || !weight) {
      return sendResponse(res, 400, "Height and weight are required");
    }
    const bmi = FitnessEngine.calculateBMI(height, weight);
    const level = FitnessEngine.getFitnessLevel(bmi);
    const dietPlan = FitnessEngine.getDietPlan(level);
    const workoutPlan = FitnessEngine.getWorkoutPlan(level);
    const record = new FitnessModel({
      userId: req.user.id,
      height,
      weight,
      bmi,
      goal: goal || "maintain",
      recommendations: {
        dietPlan,
        workoutPlan,
      },
    });

    await record.save();
    await UserModel.findByIdAndUpdate(req.user.id, {
      bmi,
      fitnessLevel: level,
    });
    return sendResponse(res, 200, "Fitness analysis completed", record);
  } catch (err) {
    return sendResponse(res, 500, err.message);
  }
});

// history
fitnessRoute.get("/history", verifyToken, async (req, res) => {
  try {
    const list = await FitnessModel.find({ userId: req.user.id });

    return sendResponse(res, 200, "Fitness history fetched", list);
  } catch (err) {
    return sendResponse(res, 500, err.message);
  }
});

//get fitness report
fitnessRoute.get("/latest", verifyToken, async (req, res) => {
  try {
    const latest = await FitnessModel.findOne({ userId: req.user.id })
      .sort({ createdAt: -1 })
      .limit(1);

    return sendResponse(res, 200, "Latest fitness report", latest);
  } catch (err) {
    return sendResponse(res, 500, err.message);
  }
});
