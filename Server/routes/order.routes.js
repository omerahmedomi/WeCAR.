import { Router } from "express";
import { createOrder, deleteOrder, getOrders, getUserOrders, updateOrder } from "../controllers/order.controller.js";

const orderRouter= Router();

orderRouter.get('/',getOrders)
orderRouter.post('/',createOrder)
orderRouter.get('/:id',getUserOrders)
orderRouter.put('/:id',updateOrder)
orderRouter.delete('/:id',deleteOrder)


export default orderRouter