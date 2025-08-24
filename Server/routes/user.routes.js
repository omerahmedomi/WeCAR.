import { Router } from "express";
import { deleteUser, getAllUsers } from "../controllers/user.controller.js";

const userRouter = Router()

userRouter.get('/',getAllUsers)
userRouter.delete('/:id',deleteUser)

export default userRouter