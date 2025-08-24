import { Router } from "express";
import { getAllUsers } from "../controllers/user.controller.js";

const userRouter = Router()

userRouter.get('/',getAllUsers)
userRouter.post('/',)

export default userRouter