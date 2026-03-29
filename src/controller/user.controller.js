
const getDetails = async (req, res) => {

    const user = req.user

    return res.status(200).json({
        user,
        message:"User details retrieved successfully"
    })
}

export {getDetails}