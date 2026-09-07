import express from "express";
import { ManufacturerModel } from "../models/ManufacturerModel.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { verifyManufacturer } from "../middleware/verifyManufacturer.js";
import { sendResponse } from "../utils/response.js";

export const manufacturerRoute = express.Router();
manufacturerRoute.post("/profile", verifyToken, verifyManufacturer, async (req, res) => {
  try {
    const data = req.body;

    let manufacturer = await ManufacturerModel.findOne({ userId: req.user.id });
    if (manufacturer) {
      manufacturer = await ManufacturerModel.findOneAndUpdate(
        { userId: req.user.id },
        data,
        { new: true }
      );
      return sendResponse(res, 200, "Manufacturer profile updated", manufacturer);
    }
    const newManufacturer = new ManufacturerModel({
      userId: req.user.id,
      ...data,
    });
    await newManufacturer.save();
    return sendResponse(res, 201, "Manufacturer profile created", newManufacturer);
  } catch (err) {
    return sendResponse(res, 500, err.message);
  }
});
manufacturerRoute.post("/recycle-request", verifyToken, async (req, res) => {
  try {
    const { quantityKg } = req.body;

    const updated = await ManufacturerModel.findOneAndUpdate(
      {}, // Any manufacturer can accept (later we add assignment logic)
      {
        $push: {
          recyclingRequests: {
            userId: req.user.id,
            quantityKg,
          },
        },
      },
      { new: true }
    );

    return sendResponse(res, 200, "Recycling request submitted", updated);
  } catch (err) {
    return sendResponse(res, 500, err.message);
  }
});
manufacturerRoute.put(
  "/update-status/:reqId",
  verifyToken,
  verifyManufacturer,
  async (req, res) => {
    try {
      const { status } = req.body;
      const updated = await ManufacturerModel.findOneAndUpdate(
        {
          userId: req.user.id,
          "recyclingRequests._id": req.params.reqId,
        },
        {
          $set: { "recyclingRequests.$.status": status },
        },
        { new: true }
      );
      return sendResponse(res, 200, "Recycling status updated", updated);
    } catch (err) {
      return sendResponse(res, 500, err.message);
    }
  }
);
manufacturerRoute.post(
  "/update-total",
  verifyToken,
  verifyManufacturer,
  async (req, res) => {
    try {
      const { kg } = req.body;
      const updated = await ManufacturerModel.findOneAndUpdate(
        { userId: req.user.id },
        {
          $inc: {
            totalRecycledKg: kg,
            sustainabilityScore: kg * 2, // example metric: 2 points per kg
          },
        },
        { new: true }
      );

      return sendResponse(res, 200, "Total recycled material updated", updated);
    } catch (err) {
      return sendResponse(res, 500, err.message);
    }
  }
);
//manufacturer
manufacturerRoute.get(
  "/dashboard",
  verifyToken,
  verifyManufacturer,
  async (req, res) => {
    try {
      const manufacturer = await ManufacturerModel.findOne({ userId: req.user.id });

      if (!manufacturer) return sendResponse(res, 404, "Manufacturer not found");

      return sendResponse(res, 200, "Dashboard data", manufacturer);
    } catch (err) {
      return sendResponse(res, 500, err.message);
    }
  }
);
