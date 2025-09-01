import { Router } from "express";
import { deleteUser, getAllUsers, updateRole } from "../controllers/user.controller.js";
import { superAdminMiddleware } from "../middlewares/superAdmin.middleware.js";
import authMiddleware from "../middlewares/auth.middleware.js";


const userRouter = Router()

userRouter.get('/',getAllUsers)
userRouter.delete('/:id',authMiddleware,superAdminMiddleware,deleteUser)
userRouter.put('/role/:id',authMiddleware,superAdminMiddleware,updateRole)

export default userRouter