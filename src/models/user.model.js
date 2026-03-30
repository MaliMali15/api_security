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
        },
        role: {
            type: String,
            required: true,
            enum: ["admin", "user"],
            default: "user"
            
        }
    }
)

const User = mongoose.model("User", userSchema)

export default User