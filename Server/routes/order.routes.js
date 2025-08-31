import { Router } from "express";
import { createOrder, deleteOrder, getOrders, getUserOrders, updateOrder } from "../controllers/order.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const orderRouter= Router();

orderRouter.get('/',getOrders)
orderRouter.post('/',createOrder)
orderRouter.get('/:id',authMiddleware,getUserOrders)
orderRouter.put('/:id',updateOrder)
orderRouter.delete('/:id',deleteOrder)


export default orderRouter