import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true
}))
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extendes : true, limit: "16kb"}))
app.use(express.static("public"))
app.use(express.cookieParser())

export { app }