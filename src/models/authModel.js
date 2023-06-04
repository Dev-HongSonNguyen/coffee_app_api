import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        default: "member"
    }
});

export default mongoose.model("User", userSchema)