import mongoose from "mongoose";
const postSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        image: {
            type: String,
        },
        description: {
            type: String,
        },
    },
    { timestamps: true, versionKey: false }
);
export default mongoose.model("Post", postSchema);
