import express from "express";
import { upload } from "../middleware/upload.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { ScanModel } from "../models/ScanModel.js";
import { MLService } from "../services/MLService.js";
import { sendResponse } from "../utils/response.js";
import { UserModel } from "../models/UserModel.js";

export const scanRoute = express.Router();
//upload scan images
scanRoute.post(
  "/upload",
  verifyToken,
  upload.fields([{ name: "frontImage" }, { name: "backImage" }]),
  async (req, res) => {
    try {
      const front = req.files.frontImage?.[0];
      const back = req.files.backImage?.[0];

      if (!front || !back) {
        return sendResponse(res, 400, "Both images are required");
      }
      // Step 1: Extract measurements using ML service 
      const measurements = await MLService.extractMeasurements(
        front.path,
        back.path
      );
      // Step 2: Save scan in DB
      const scanDoc = new ScanModel({
        userId: req.user.id,
        frontImage: front.path,
        backImage: back.path,
        measurements,
      });
      await scanDoc.save();
      // Step 3: Link scan to user
      await UserModel.findByIdAndUpdate(req.user.id, {
        $push: { scans: scanDoc._id },
      });
      return sendResponse(res, 200, "Scan uploaded successfully", scanDoc);
    } catch (err) {
      return sendResponse(res, 500, err.message);
    }
  }
);

//get all scan
scanRoute.get("/my-scans", verifyToken, async (req, res) => {
  try {
    const scans = await ScanModel.find({ userId: req.user.id });

    return sendResponse(res, 200, "User scans fetched", scans);
  } catch (err) {
    return sendResponse(res, 500, err.message);
  }
});

//get single scan
scanRoute.get("/:scanId", verifyToken, async (req, res) => {
  try {
    const scan = await ScanModel.findById(req.params.scanId);

    if (!scan) return sendResponse(res, 404, "Scan not found");

    return sendResponse(res, 200, "Scan fetched", scan);
  } catch (err) {
    return sendResponse(res, 500, err.message);
  }
});
