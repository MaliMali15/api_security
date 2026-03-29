import User from "../models/user.model.js"


const getUserById = async (req, res) => {
    try {

        const validUser = req.user
        console.log(validUser);
        
        if (!validUser) {
            return res.status(401).json({ message: "Unauthorized"})
        }

        const validId = validUser._id
        console.log(validId);
        

        if (!validId) {
            return res.status(401).json({message: "Unauthorized"})
        }

        const { userId } = req.params

        if (userId != validId) {
            return res.status(401).json({message:"Unauthorized"})    
        }

        const user = await User.findById(userId).select("-password")
        if (!user) {
            return res.status(401).json({message:"Invalid request"})
        }

        return res.status(200).json({
            user,
            message:"User info retrieved successfully"
        })

    } catch (error) {
        return res.status(500).json({message:"Server Error"})
    }
}

export {getUserById}