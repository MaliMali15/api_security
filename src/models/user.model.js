import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim:true
        },
        password: {
            type: String,
            required:true
        },
        role: {
            type: String,
            required: true,
            enum: ["admin", "user"],
            default: "user",
            immutable:true
            
        }
    }
)

const User = mongoose.model("User", userSchema)

export default User