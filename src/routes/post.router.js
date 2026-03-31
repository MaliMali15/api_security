import { Router } from "express"
import { getPostById, createPost } from "../controller/post.controller.js"
import { jwtverify } from "../middleware/auth.middleware.js"

const router = Router()

router.post("/create",jwtverify,createPost)
router.get("/:id",jwtverify,getPostById)

export default router