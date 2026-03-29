import User from "../models/user.model.js" 
import bcrypt from "bcrypt"

const register = async (req, res) => {
   try {
     const { Username, password } = req.body
     
     if (!Username || !password) {
         throw new Error("Invalid credentials")
     }
     
    const existing = await User.findOne({ Username: Username });
    if (existing) {
        res.status(400).json({message:"User already exists"})
    }

    const hashpass = await bcrypt.hash(password, 10)
 
     const user = await User.create({
         Username,
         password:hashpass
     })
       
    return res.status(201).json({
        Message:"User successfully created",
        Username: Username
    })
   } catch (err) {
        return res.status(500).json({error:err.message})
   }
}

export {register}