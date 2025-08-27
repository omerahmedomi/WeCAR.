import { Router } from "express";
import { createOrder, getUserOrders } from "../controllers/order.controller.js";

const orderRouter= Router();

// orderRouter.get('/',getOrders())
orderRouter.post('/',createOrder)
orderRouter.get('/:id',getUserOrders)
// orderRouter.put('/',updateOrder())
// orderRouter.delete('/',deleteOrder())


export default orderRouter