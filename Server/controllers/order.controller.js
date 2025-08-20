import mongoose from "mongoose";
import Order from "../model/order.model.js";

export const createOrder = async(req,res,next) =>{
   try {
     const { userId, carId, price } = req.body;
     console.log(userId,carId,price)
     const order = await Order.create({
        user:userId,
        car:userId,
        price
     });
     console.log("Order",order)
     res.status(201).send({message:"order created successfully",order})
   } catch (error) {
    console.log("Error creating order",error)
    next(error)
    
   }
}