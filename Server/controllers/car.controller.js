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
export const addCar = (req, res, next) => {
  try {
    const { car } = req.body;
    console.log(car);
  } catch (error) {
    next(error);
    console.log(error);
  }
};
export const updateCar = () => {};
export const deleteCar = () => {};
