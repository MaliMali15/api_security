import { Router } from "express";
import { login } from "../controller/login.controller.js"
import { register } from "../controller/register.controller.js"
import { getDetails } from "../controller/user.controller.js";
import { getUsers } from "../controller/allUser.controller.js";
import { getUserById } from "../controller/getUserById.controller.js";
import { jwtverify } from "../middleware/auth.middleware.js";

const router = Router()

router.post("/register", register)
router.post("/login", login)
router.get("/userDetails", jwtverify, getDetails)
router.get("/allUsers", jwtverify, getUsers)
router.get("/:userId",jwtverify, getUserById)

export default router