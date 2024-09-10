import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import MiddleWare from "./MiddleWare/MiddleWare.js";
import AccountController from "./Controller/AccountController.js";
import cors from "cors"
import JobController from "./Controller/JobController.js";
const app = express()
app.use(express.json())

dotenv.config()

app.use(cors({
    crossOrigin: "*"
}))

const PORT = process.env.PORT
const DATABASE_NAME = process.env.DATABASE_NAME
mongoose.connect("mongodb://localhost:27017/" + DATABASE_NAME)

app.listen(PORT, ()=>{
    console.log("Server is running on port " + PORT)
})

//Login-Signin
app.post("/login", MiddleWare.login, AccountController.login)
app.post("/register", MiddleWare.registerAccount, AccountController.registerAccount)

//Job
app.post("/registerjob", MiddleWare.registerJob, JobController.registerJob )
app.get("/joblist", JobController.getAllJobs)
app.get("/jobdetails/:id", JobController.findJob)
//Password
app.post("/changepassword",AccountController.changePassword)