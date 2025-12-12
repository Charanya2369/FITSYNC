import { Schema, model } from "mongoose";
const sizeChartSchema = new Schema(
  {
    size: { type: String, required: true }, 
    chest: Number,
    waist: Number,
    hip: Number,
    shoulder: Number,
    inseam: Number,
  },
  { _id: false }
);
const brandSchema = new Schema(
  {
    brandName: { type: String, required: true, unique: true },
    gender: {
      type: String,
      enum: ["male", "female", "unisex"],
      default: "unisex",
    },
    category: {
      type: String,
      enum: ["tshirt", "shirt", "jeans", "pants", "kurta", "dress", "other"],
      required: true,
    },

    sizeChart: [sizeChartSchema], 
    updatedBy: { type: Schema.Types.ObjectId, ref: "admin" },
  },
  { versionKey: false, timestamps: true }
);

export const BrandModel = model("brand", brandSchema);
