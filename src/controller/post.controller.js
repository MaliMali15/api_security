import { Post } from "../models/post.model.js"

const createPost = async (req, res)=>{
   try {
     const { description } = req.body
     
     if (!description) {
         return res.stauts(401).json({message:"Invalid"})
       }
       
       const post = await Post.create({
           description,
           owner:req.user._id
           
     })

     return res.status(201).json({
         message: "Post successfully created",
         post
     })
       
   } catch (error) {
       return res.status(500).json({error:error.message})
   }
}


const getPostById = async (req, res)=>{
    try {
        
        const { id } = req.params
        
        if (!id) {
            return res.status(401).json({message:"Invalid"})
        }

        const post = await Post.findById(id)
        
        if (post.owner.toString() !== req.user._id.toString()) {
            return res.status(403).json({message:"Forbidden"})
        }

        return res.status(200).json({
            message: "post retrieved successfully",
            post
        })

    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}


export { createPost,getPostById }
