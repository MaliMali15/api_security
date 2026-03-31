import { Schema } from "mongoose";
import mongoose from "mongoose";


const postSchema = new Schema({
    description: {
        type: String,
        required:true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required:true
    }
})

const Post = mongoose.model("Post", postSchema)

export {Post}