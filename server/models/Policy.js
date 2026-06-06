import mongoose from "mongoose"; //  Updated from require to import

const policySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    premiumAmount: {
      type: Number,
      required: true,
    },

    coverageAmount: {
      type: Number,
      required: true,
    },

    duration: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//  Updated from module.exports to export default
export default mongoose.model("Policy", policySchema);