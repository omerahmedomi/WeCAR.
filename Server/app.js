import express from "express";
import connectToDatabase from "./database/mongodb";

const app = express()
const port = 5500;

app.listen(port, async()=>{
    console.log("Running on port:",port)
    await connectToDatabase()
})