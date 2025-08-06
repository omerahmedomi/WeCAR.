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

const CarCard = ({car}) => {
  return (
    <div className=" p-4 border border-dashed  w-fit flex flex-col rounded-md bg-white ">
      <div className="  h-45 w-60  rounded-md mb-2">
        <img
          src="./CarsAuth.jpg"
          alt=""
          className="object-cover w-full h-full max-w-full rounded-md"
        />
      </div>
      <p className="mb-4 font-semibold">{car.name}</p>
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
            {car.fuelType == "Petrol" ? (
              <Petrol />
            ) : car.fuelType == "Diesel" ? (
              <Diesel />
            ) : car.fuelType == "Electric" ? (
              <ElectricCar />
            ) : (
              <Hybrid />
            )}
          </span>
          <p>{car.fuelType}</p>
        </div>
        <div className="flex items-center gap-x-1 door">
          <span>
            <CarDoor />
          </span>
          <p>{car.doors} Door</p>
        </div>
        <div className="flex items-center gap-x-1 ">
          <span>
            {car.transmission == "Auto" ? <AutomaticGear /> : <ManualGear />}
          </span>
          <p>{car.transmission.split("")[0].toUpperCase() + car.transmission.slice(1)}</p>
        </div>
        <div className="flex items-center gap-x-1 ">
          <span>
            <Diesel />
          </span>
          <p>Petrol</p>
        </div>
      </div>
      <div className="mt-3 flex justify-between">
        <p className="space-x-1">
          <span className="font-semibold">{car.pricePerDayInK}K ETB</span>
          <span className="text-sm ">/Day</span>
        </p>
        <button className="border border-cyan-800 focus:outline-none px-3 py rounded-sm cursor-pointer text-cyan-500 font-semibold hover:text-cyan-400 transition-colors duration-300 ">
          Rent Car
        </button>
      </div>
    </div>
  );
};

export default CarCard;
