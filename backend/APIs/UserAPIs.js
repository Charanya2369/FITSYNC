import express from "express";
import { UserModel } from "../models/UserModel.js";
import { FitnessEngine } from "../services/FitnessEngine.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { sendResponse } from "../utils/response.js";
import { RewardModel } from "../models/RewardModel.js";

export const userRoute = express.Router();

//get profile
userRoute.get("/profile", verifyToken, async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id).populate("scans");
    if (!user) return sendResponse(res, 404, "User not found");

    return sendResponse(res, 200, "User profile fetched", user);
  } catch (err) {
    return sendResponse(res, 500, err.message);
  }
});

//update profile
userRoute.put("/update", verifyToken, async (req, res) => {
  try {
    const { height, weight, age, gender } = req.body;
    let bmi = null;
    if (height && weight) {
      bmi = FitnessEngine.calculateBMI(height, weight);
    }
    const updated = await UserModel.findByIdAndUpdate(
      req.user.id,
      {
        height,
        weight,
        age,
        gender,
        bmi,
        fitnessLevel: FitnessEngine.getFitnessLevel(bmi),
      },
      { new: true }
    );

    return sendResponse(res, 200, "Profile updated", updated);
  } catch (err) {
    return sendResponse(res, 500, err.message);
  }
});

//link scan
userRoute.put("/add-scan/:scanId", verifyToken, async (req, res) => {
  try {
    const { scanId } = req.params;

    const updated = await UserModel.findByIdAndUpdate(
      req.user.id,
      { $push: { scans: scanId } },
      { new: true }
    );

    return sendResponse(res, 200, "Scan linked to user", updated);
  } catch (err) {
    return sendResponse(res, 500, err.message);
  }
});

//rewardpoints
userRoute.post("/reward", verifyToken, async (req, res) => {
  try {
    const { points, activityType, description } = req.body;

    const newReward = new RewardModel({
      userId: req.user.id,
      points,
      activityType,
      description,
    });
    await newReward.save();
    //update user points
    await UserModel.findByIdAndUpdate(req.user.id, {
      $inc: { rewardPoints: points },
    });
    return sendResponse(res, 200, "Reward added", newReward);
  } catch (err) {
    return sendResponse(res, 500, err.message);
  }
});
