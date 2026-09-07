import express from "express";
import { BrandModel } from "../models/BrandModel.js";
import { SizeChartModel } from "../models/SizeChartModel.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { verifyAdmin } from "../middleware/verifyAdmin.js";
import { sendResponse } from "../utils/response.js";

export const brandRoute = express.Router();
//add brands
brandRoute.post("/", verifyToken, verifyAdmin, async (req, res) => {
  try {
    const brand = new BrandModel(req.body);
    await brand.save();

    return sendResponse(res, 201, "Brand created", brand);
  } catch (err) {
    return sendResponse(res, 500, err.message);
  }
});
//get all brands
brandRoute.get("/", async (req, res) => {
  try {
    const list = await BrandModel.find();
    return sendResponse(res, 200, "Brand list fetched", list);
  } catch (err) {
    return sendResponse(res, 500, err.message);
  }
});
brandRoute.get("/:brandId", async (req, res) => {
  try {
    const brand = await BrandModel.findById(req.params.brandId);
    if (!brand) return sendResponse(res, 404, "Brand not found");

    return sendResponse(res, 200, "Brand details fetched", brand);
  } catch (err) {
    return sendResponse(res, 500, err.message);
  }
});
//add sizechart
brandRoute.post("/size-chart/:brandId", verifyToken, verifyAdmin, async (req, res) => {
  try {
    const { brandId } = req.params;

    const sizeChart = new SizeChartModel({
      brandId,
      ...req.body,
    });
    await sizeChart.save();
    return sendResponse(res, 201, "Size chart added", sizeChart);
  } catch (err) {
    return sendResponse(res, 500, err.message);
  }
});
// size charts
brandRoute.get("/size-chart/:brandId", async (req, res) => {
  try {
    const list = await SizeChartModel.find({ brandId: req.params.brandId });

    return sendResponse(res, 200, "Size charts fetched", list);
  } catch (err) {
    return sendResponse(res, 500, err.message);
  }
});
