import { Schema, model } from "mongoose";
const manufacturerSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "user", required: true },
    companyName: { type: String, required: true },
    address: String,
    contactNumber: String,
    partnerRetailers: [
      { type: Schema.Types.ObjectId, ref: "retailer" }
    ],
    recyclingRequests: [
      {
        userId: { type: Schema.Types.ObjectId, ref: "user" },
        quantityKg: Number,
        status: {
          type: String,
          enum: ["requested", "picked_up", "processed"],
          default: "requested",
        },
        date: { type: Date, default: Date.now },
      }
    ],
    totalRecycledKg: { type: Number, default: 0 },
    sustainabilityScore: { type: Number, default: 0 }, // optional metric
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const ManufacturerModel = model("manufacturer", manufacturerSchema);
