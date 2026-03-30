
import User from "../models/user.model.js"

const getUsers = async (req,res) => {
    try {
        const users = await User.find().select("-username -password")
        
        console.log(users);
        
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({message:"Server errro"})
    }
}

export {getUsers}