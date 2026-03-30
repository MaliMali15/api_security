import User from "../models/user.model.js"

const updateDetails = async (req, res) => {
    try {
        const { username } = req.body
        const { _id } = req.user
        
        if (!username) {
            return res.status(400).json({ message: "Invalid" })
        }
        if (!_id) {
            return res.status(400).json({ message: "Invalid" })
        }

        const updatedUser = await User.findByIdAndUpdate(_id,
            {
                username: username
            },
            {
                new: true
            }
        ).select("-password")

        return res.status(200).json({
            message: "User details successfully updated",
            updatedUser
        })

    } catch (error) {
        
            return res.status(500).json({error:error.message})

    }
}

export {updateDetails}