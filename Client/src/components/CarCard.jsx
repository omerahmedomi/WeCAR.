import React from "react";
import Petrol from "../Icons/Petrol";
import CarDoor from "../Icons/CarDoor";
import CarSeat from "../Icons/CarSeart";
import CarEngine from "../Icons/CarEngine";
import AutomaticGear from "../Icons/AutomaticGear";
import ManualGear from "../Icons/ManualGear";
import ElectricCar from "../Icons/ElectricCar";
import Diesel from "../Icons/Diesel";
import Hybrid from "../Icons/Hybrid";
import {useGlobal} from "../GlobalContext";
import { useNavigate } from "react-router-dom";
import Road from "../Icons/Road";
import { Capitalize } from "../pages/RentalPage";

const CarCard = ({ car }) => {
  const navigate = useNavigate();

  const { user } = useGlobal();
  return (
    <div className=" p-4 border border-dashed  w-fit flex flex-col rounded-md bg-white dark:bg-gray-800 transition-colors duration-500">
      <div className="  h-45 w-70 sm:w-65   rounded-md mb-2">
        <img
          src="./CarsAuth.jpg"
          alt=""
          className="object-cover w-full h-full max-w-full rounded-md"
        />
      </div>
      <p className="mb-4 font-semibold">
        {Capitalize(car.name) + " " + Capitalize(car.model)}
      </p>
      <div className="infos grid grid-cols-3 gap-y-2 border-dashed border-b gap-x-5 pb-4">
        <div className="flex items-center gap-x-1 ">
          <span>
            <CarSeat />
          </span>
          <p>{car.seats} Seat</p>
        </div>
        <div className="flex items-center gap-x-1 ">
          <span>
            <CarEngine />
          </span>
          <p>{car.year}</p>
        </div>
        <div className="flex items-center gap-x-1 ">
          <span>
            {car.fuelType == "petrol" ? (
              <Petrol />
            ) : car.fuelType == "diesel" ? (
              <Diesel />
            ) : car.fuelType == "electric" ? (
              <ElectricCar />
            ) : (
              <Hybrid />
            )}
          </span>
          <p>
            {car.fuelType.split("")[0].toUpperCase() + car.fuelType.slice(1)}
          </p>
        </div>
        <div className="flex items-center gap-x-1 door">
          <span>
            <CarDoor />
          </span>
          <p>{car.doors} Door</p>
        </div>
        <div className="flex items-center gap-x-1 ">
          <span>
            {car.transmission == "auto" ? <AutomaticGear /> : <ManualGear />}
          </span>
          <p>
            {car.transmission.split("")[0].toUpperCase() +
              car.transmission.slice(1)}
          </p>
        </div>
        <div className="flex items-center gap-x-1 " title="Mileage">
          <span>
            <Road />
          </span>
          <p>{car.mileage}Kms</p>
        </div>
      </div>
      <div className="mt-3 flex justify-between">
        <p className="space-x-1">
          <span className="font-semibold">{car.pricePerDayInK}K ETB</span>
          <span className="text-sm ">/Day</span>
        </p>
        <button
          className="ring ring-gray-600 dark:ring-gray-400 border-cyan-800 focus:outline-none px-3 py-0.5 rounded-sm cursor-pointer text-cyan-500  dark:text-cyan-400 font-semibold hover:text-cyan-400 dark:hover:text-cyan-300
          hover:ring-cyan-400 dark:ring:text-cyan-300
          transition-colors duration-300 "
          onClick={() => {
            if (user) {
              navigate(`/rental-cars/${car._id}`, { state: car });
            } else {
              navigate("/sign-up");
            }
          }}
        >
          Rent Car
        </button>
      </div>
    </div>
  );
};

export default CarCard;
