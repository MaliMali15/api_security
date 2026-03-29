import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

const jwtverify = async (req, res, next) => {
    try {

        const header = req.headers.authorization

        if (!header || !header.startsWith("Bearer ")) {
            return res.status(401).json({message:"Unauthorized"})
        }

        const token = header.split(" ")[1]
        
        if (!token) {
            return res.status(401).json({message:"Invalid request"})
        }
        
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

        if (!decodedToken) {
            return res.status(401).json({message:"Unauthorized request"})
        }
        
        const user = await User.findById(decodedToken.id)

        if (!user) {
            return res.status(401).json({message:"Unauthorized"})
        }
        
        req.user = user
        next()

    } catch (error) {
        console.log("JWT error", error.message); 
        return res.status(401).json({message:"Unauthorized"})
    }
}

export {jwtverify}