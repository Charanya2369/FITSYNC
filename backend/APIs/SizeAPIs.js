import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { ScanModel } from "../models/ScanModel.js";
import { BrandModel } from "../models/BrandModel.js";
import { RecommendationEngine } from "../services/RecommendationEngine.js";
import { sendResponse } from "../utils/response.js";

export const sizeRoute = express.Router();

//recommend size
sizeRoute.get("/recommend/:scanId/:brandId", verifyToken, async (req, res) => {
  try {
    const { scanId, brandId } = req.params;
    const scan = await ScanModel.findById(scanId);
    if (!scan) return sendResponse(res, 404, "Scan not found");
    const brand = await BrandModel.findById(brandId);
    if (!brand || !brand.sizeChart)
      return sendResponse(res, 404, "Brand size chart not found");
    const result = RecommendationEngine.recommendSize(
      scan.measurements,
      brand.sizeChart
    );
    scan.recommendedSizes.push({
      brandId,
      size: result.size,
      confidence: result.confidence,
    });
    await scan.save();
    return sendResponse(res, 200, "Size recommendation generated", result);
  } catch (err) {
    return sendResponse(res, 500, err.message);
  }
});
sizeRoute.get("/scan/:scanId", verifyToken, async (req, res) => {
  try {
    const scan = await ScanModel.findById(req.params.scanId).populate("recommendedSizes.brandId");

    if (!scan) return sendResponse(res, 404, "Scan not found");

    return sendResponse(res, 200, "Recommendations fetched", scan.recommendedSizes);
  } catch (err) {
    return sendResponse(res, 500, err.message);
  }
});
