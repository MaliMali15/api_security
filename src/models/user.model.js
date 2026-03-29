import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema(
    {
        Username: {
            type: String,
            required: true,
            trim:true
        },
        password: {
            type: String,
            required:true
        }
    }
)

const User = mongoose.model("User", userSchema)

export default User