import express from "express";
import connectToDatabase from "./database/mongodb.js";
import { PORT } from "./config/env.js";

const app = express()


app.listen(PORT || 5500 , async()=>{
    console.log("Running on port:",PORT)
    await connectToDatabase()
})