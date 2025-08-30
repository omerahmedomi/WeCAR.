import mongoose from "mongoose";
import Car from "../model/car.model.js";

export const getAllCars = async (req, res, next) => {
  try {
    const cars = await Car.find();
    res.status(200).send({ message: "Fetched all cars successfully", cars });
  } catch (error) {
    console.log(errror);
    next(error);
  }
};
export const addCar = async (req, res, next) => {
  console.log("ADD car called")
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { car } = req.body;
    const newCar = await Car.create([car], { session });
    res.status(200).send({ message: "Car added successfully", newCar });
    console.log(car);
    await session.commitTransaction();
    session.endSession();
  } catch (error) {
    next(error);
    console.log(error);
    await session.abortTransaction();
    session.endSession();
  }
};
export const updateCar = async (req,res,next) => {

  try {
    const {id}=req.params
    const {car} =req.body
    const updatedCar = await Car.findOneAndUpdate({_id:id},car,{new:true})

    res.status(200).send({message:"Car updated successfully",updatedCar})

  } catch (error) {
    next(error)
    console.log(error)
    
  }
};
export const deleteCar = async (req, res, next) => {
  try {
    console.log(req.params.id);
    const deletedCar = await Car.findByIdAndDelete(req.params.id);

    res.status(200).send({ message: "Car deleted successfully", deletedCar });
  } catch (error) {
    next(error);
    console.log(error);
  }
};
