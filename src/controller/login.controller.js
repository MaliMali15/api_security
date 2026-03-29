import User from "../models/user.model.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const login = async (req, res) => {
    try {
        const { Username, password } = req.body
        
        if (!Username || !password) {
            return res.status(400).json({message:"Invalid credentials"})
        }
        
        if (typeof Username != "string" || typeof password != "string") {
            return res.status(400).json({message:"Invalid Credentials"})
        }

        const user = await User.findOne({ Username: Username })

        if (!user) {
            return res.status(404).json({message:"User doesn't exist"})
        }
    
        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({message:"Invalid Credentials"})
        }

        const token = jwt.sign(
            {
                id:user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn:"1d"
            }
        )

        return res.status(200).json({
            message: "Logged in successfully",
            token
        })
        


    } catch (err) {
        return res.status(500).json({error:err.message})
    }
}

export {login}