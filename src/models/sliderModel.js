import mongoose from "mongoose";

const sliderSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        image: {
            type: String,
        },
        ratio: {
            type: String,
        }, 
        description: {
            type: String
        },
    },
    {timestamps: true, versionKey: false}
);
export default mongoose.model("Slider", sliderSchema)