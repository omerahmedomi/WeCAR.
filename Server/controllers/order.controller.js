import mongoose from "mongoose";
import Order from "../model/order.model.js";

export const createOrder = async (req, res, next) => {
  try {
    const { userId, carId, price, pickUpDate, returnDate } = req.body;
    console.log(userId, carId, price);
    const order = await Order.create({
      user: userId,
      car: carId,
      price,
      pickUpDate,
      returnDate,
    });
    console.log("Order", order);
    res.status(201).send({ message: "order created successfully", order });
  } catch (error) {
    console.log("Error creating order", error);
    next(error);
  }
};

export const getUserOrders = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userOrders = await Order.find({ user: id })
      .populate("user", "firstName lastName")
      .populate("car", "name model");

    res
      .status(200)
      .send({ message: "User Orders fetched successfully", userOrders });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find()
      .populate("user", "firstName lastName")
      .populate("car", "name model");
    res.status(200).send({ message: "Orders fetched successfully", orders });
  } catch (error) {
    next(error);
    console.log(error);
  }
};


export const updateOrder  = async (req,res,next)=>{
  try {
    const {id}= req.params
    const {status} =req.body

    console.log(id,status)
    const order = await Order.findByIdAndUpdate(id,{status},{new:true})

    res.status(200).send({message:"Order updated successfully",order})
  } catch (error) {
    next(error)
    console.log(error)
    
  }

}


export const deleteOrder = async (req,res,next)=>{
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id)
    res.status(200).send({message:"Order deleted successfully",deletedOrder})
  } catch (error) {
    next(error)
    console.log(error)
    
  }
}