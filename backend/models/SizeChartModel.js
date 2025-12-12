import { Schema, model } from "mongoose";
const singleSizeSchema = new Schema(
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
const sizeChartSchema = new Schema(
  {
    brandId: { type: Schema.Types.ObjectId, ref: "brand", required: true },
    category: {
      type: String,
      enum: [
        "tshirt",
        "shirt",
        "jeans",
        "pants",
        "kurta",
        "dress",
        "sportswear",
        "other",
      ],
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "unisex"],
      default: "unisex",
    },

    sizes: [singleSizeSchema], 
    updatedBy: { type: Schema.Types.ObjectId, ref: "admin" },
  },
  { versionKey: false, timestamps: true }
);

export const SizeChartModel = model("sizechart", sizeChartSchema);
