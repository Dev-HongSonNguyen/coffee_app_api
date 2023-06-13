import mongoose from "mongoose";
const cartSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        price: {
            type: Number,
        },
        image: {
            type: String,
        },
        description: {
            type: String,
        },
        quantity: {
            type: Number,
        },
        subtotal: {
            type: Number,
        },
    },
);
export default mongoose.model("Cart", cartSchema);
