import express, { urlencoded } from "express";
import connectToDatabase from "./database/mongodb.js";
import { PORT } from "./config/env.js";
import cookieParser from "cookie-parser";
import errorMiddleware from "./middlewares/error.middleware.js";
import authRouter from "./routes/auth.routes.js";
import cors from "cors";
import orderRouter from "./routes/order.routes.js";
import userRouter from "./routes/user.routes.js";
import carRouter from "./routes/car.routes.js";



const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(urlencoded({extended:false}))
app.use(cors({ origin: ["http://localhost:5173","http://192.168.1.4:5173"], credentials: true }));

app.use('/auth',authRouter)
app.use('/orders',orderRouter)
app.use('/users',userRouter)
app.use('/cars',carRouter)


app.use(errorMiddleware);

app.listen(PORT || 5500 ,"0.0.0.0", async()=>{
    console.log("Running on port:",PORT)
    await connectToDatabase()
})