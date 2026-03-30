import User from "../models/user.model.js" 
import bcrypt from "bcrypt"

const register = async (req, res) => {
   try {
     const { username, password } = req.body
     
     if (!username || !password) {
         throw new Error("Invalid credentials")
     }
     
    const existing = await User.findOne({ username: username });
    if (existing) {
        res.status(400).json({message:"User already exists"})
    }

    const hashpass = await bcrypt.hash(password, 10)
 
     const user = await User.create({
         username,
         password:hashpass
     })
       
    return res.status(201).json({
        Message:"User successfully created",
        username: username
    })
   } catch (err) {
        return res.status(500).json({error:err.message})
   }
}

export {register}