import { Router } from "express";
import { createOrder } from "../controllers/order.controller.js";

const orderRouter= Router();

// orderRouter.get('/',getOrders())
orderRouter.post('/',createOrder)
// orderRouter.put('/',updateOrder())
// orderRouter.delete('/',deleteOrder())


export default orderRouter