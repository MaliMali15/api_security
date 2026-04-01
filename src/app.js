import express from "express"
import cors from "cors"
import authRouter from "./routes/auth.router.js"
import postRouter from "./routes/post.router.js"


const app = express()

app.use(cors({
    origin: process.env.CORS,
    credentials:true
}))

app.use(express.json({ limit: "20kb" }))
app.use(express.urlencoded({ extended: true, limit: "20kb" }))
app.set("query parser", "extended")

app.use("/auth",authRouter)
app.use("/post",postRouter)

export {app}