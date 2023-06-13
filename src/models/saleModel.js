import mongoose from "mongoose";

const saleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    timeSale: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);
export default mongoose.model("Sale", saleSchema)
