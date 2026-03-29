import mongoose from "mongoose";


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongoDb_URI)
        console.log("MongoDB connected") 
    }
    catch(error) {
        console.log("Connection error", error)
    }
    
}

export { connectDB }