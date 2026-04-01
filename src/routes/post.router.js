import { Router } from "express"
import { getPostById, createPost, postFilter } from "../controller/post.controller.js"
import { jwtverify } from "../middleware/auth.middleware.js"

const router = Router()

router.post("/create",jwtverify,createPost)
router.get("/:id", jwtverify, getPostById)
router.get("/",jwtverify,postFilter)

export default router