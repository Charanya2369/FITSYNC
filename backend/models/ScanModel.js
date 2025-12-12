import { Schema, model } from "mongoose";
const scanSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "user", required: true },
    //cloud(image)
    frontImage: { type: String, required: true },
    backImage: { type: String, required: true },
    measurements: {
      chest: Number,
      waist: Number,
      hip: Number,
      shoulder: Number,
      inseam: Number,
      neck: Number,
      height: Number,
      weight: Number,
      bodyType: String, 
    },
    recommendedSizes: [
      {
        brandId: { type: Schema.Types.ObjectId, ref: "brand" },
        size: String,
        confidence: Number, // 0 to 1
      },
    ],
    mlModelVersion: { type: String, default: "v1" },
    feedback: {
      wasAccurate: Boolean,
      note: String,
    },
  },
  { versionKey: false, timestamps: true }
);

export const ScanModel = model("scan", scanSchema);
