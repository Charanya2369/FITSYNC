import { Schema, model } from "mongoose";
const retailerSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "user", required: true },
    businessName: { type: String, required: true },
    brandIds: [{ type: Schema.Types.ObjectId, ref: "brand" }], 
    productCatalog: [
      {
        productName: String,
        category: String,
        price: Number,
        sizeOptions: [String], // S, M, L etc
        brandId: { type: Schema.Types.ObjectId, ref: "brand" },
      }
    ],
    analytics: {
      totalSales: { type: Number, default: 0 },
      totalReturns: { type: Number, default: 0 },
      sizeMismatchReturns: { type: Number, default: 0 }, 
    },
    address: String,
    contactNumber: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const RetailerModel = model("retailer", retailerSchema);
