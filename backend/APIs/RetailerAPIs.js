import express from "express";
import { RetailerModel } from "../models/RetailerModel.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { verifyRetailer } from "../middleware/verifyRetailer.js";
import { sendResponse } from "../utils/response.js";

export const retailerRoute = express.Router();

//create and update user profilend
retailerRoute.post("/profile", verifyToken, verifyRetailer, async (req, res) => {
  try {
    const data = req.body;
    let retailer = await RetailerModel.findOne({ userId: req.user.id });
    if (retailer) {
      retailer = await RetailerModel.findOneAndUpdate(
        { userId: req.user.id },
        data,
        { new: true }
      );
      return sendResponse(res, 200, "Retailer profile updated", retailer);
    }
    const newRetailer = new RetailerModel({
      userId: req.user.id,
      ...data,
    });
    await newRetailer.save();
    return sendResponse(res, 201, "Retailer profile created", newRetailer);
  } catch (err) {
    return sendResponse(res, 500, err.message);
  }
});
//add product
retailerRoute.post("/add-product", verifyToken, verifyRetailer, async (req, res) => {
  try {
    const product = req.body;

    const updated = await RetailerModel.findOneAndUpdate(
      { userId: req.user.id },
      {
        $push: { productCatalog: product },
      },
      { new: true }
    );
    return sendResponse(res, 200, "Product added", updated);
  } catch (err) {
    return sendResponse(res, 500, err.message);
  }
});
retailerRoute.get("/catalog", verifyToken, verifyRetailer, async (req, res) => {
  try {
    const retailer = await RetailerModel.findOne({ userId: req.user.id });

    if (!retailer) return sendResponse(res, 404, "Retailer not found");

    return sendResponse(res, 200, "Product catalog fetched", retailer.productCatalog);
  } catch (err) {
    return sendResponse(res, 500, err.message);
  }
});
retailerRoute.get("/analytics", verifyToken, verifyRetailer, async (req, res) => {
  try {
    const retailer = await RetailerModel.findOne({ userId: req.user.id });

    if (!retailer) return sendResponse(res, 404, "Retailer not found");

    return sendResponse(res, 200, "Retailer analytics", retailer.analytics);
  } catch (err) {
    return sendResponse(res, 500, err.message);
  }
});
retailerRoute.post("/return", verifyToken, verifyRetailer, async (req, res) => {
  try {
    const { mismatch } = req.body;
    const updated = await RetailerModel.findOneAndUpdate(
      { userId: req.user.id },
      {
        $inc: {
          "analytics.totalReturns": 1,
          "analytics.sizeMismatchReturns": mismatch ? 1 : 0,
        },
      },
      { new: true }
    );
    return sendResponse(res, 200, "Return recorded", updated.analytics);
  } catch (err) {
    return sendResponse(res, 500, err.message);
  }
});
