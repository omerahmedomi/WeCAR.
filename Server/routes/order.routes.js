import { Router } from "express";
import { createOrder, getOrders, getUserOrders, updateOrder } from "../controllers/order.controller.js";

const orderRouter= Router();

orderRouter.get('/',getOrders)
orderRouter.post('/',createOrder)
orderRouter.get('/:id',getUserOrders)
orderRouter.put('/:id',updateOrder)
// orderRouter.delete('/',deleteOrder())


export default orderRouter