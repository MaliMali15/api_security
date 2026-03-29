import express from "express"
import cors from "cors"
import authRouter from "./routes/auth.router.js"


const app = express()

app.use(cors({
    origin: process.env.CORS,
    credentials:true
}))

app.use(express.json({ limit: "20kb" }))

app.use("/auth",authRouter)


export {app}