import User from "../models/user.model.js"

const admin = async (req, res) => {
    try {
        
        const { username } = req.user
        
        if (!username) {
            return res.status(401).json({message:"Invalid User"})
        }

        const user = await User.findOne({ username: username })
        
        if (!user) {
            return res.status(401).json({message:"Unauthorized"})
        }

        if (user.role !== "admin") {
            return res.status(403).json({message:"Forbidden"})
        }

        return res.status(201).json({
            message: "Accessed admin panel",
            user
        })

    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

export {admin}