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
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { car } = req.body;
    const newCar = await Car.create([car], { session });
    res.status(200).send({ message: "Car added successfully", newCar });
    console.log(car);
    await session.commitTransaction()
    session.endSession()
  } catch (error) {
    next(error);
    console.log(error);
    await session.abortTransaction();
    session.endSession();
  }
};
export const updateCar = () => {};
export const deleteCar = () => {};
