import { Schema, model } from "mongoose";
const rewardSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "user", required: true },
    points: { type: Number, default: 0 },
    activityType: {
      type: String,
      enum: [
        "scan_upload",
        "profile_completed",
        "fitness_update",
        "recycling_done",
        "retailer_purchase",
      ],
      required: true,
    },

    description: { type: String }, 
    dateEarned: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const RewardModel = model("reward", rewardSchema);
