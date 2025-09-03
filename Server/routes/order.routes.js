import { Router } from "express";
import { createOrder, deleteOrder, getOrders, getUserOrders, updateStatus} from "../controllers/order.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const orderRouter= Router();

orderRouter.get('/',getOrders)
orderRouter.post('/',authMiddleware,createOrder)
orderRouter.get('/:id',authMiddleware,getUserOrders)
orderRouter.put('/status/:id',updateStatus)
orderRouter.delete('/:id',deleteOrder)



export default orderRouter