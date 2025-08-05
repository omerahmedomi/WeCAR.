import React from "react";
import Petrol from "./Petrol";

const CarCard = ({car}) => {
  return (
    <div className=" p-4 border border-dashed  w-fit flex flex-col rounded-md bg-white ">
      <div className=" h-50 w-70  sm:h-45 sm:w-65  rounded-md mb-2">
        <img
          src="./CarsAuth.jpg"
          alt=""
          className="object-cover w-full h-full max-w-full rounded-md"
        />
      </div>
      <p className="mb-4 font-semibold">{car.name}</p>
      <div className="infos grid grid-cols-3 gap-y-2 border-dashed border-b gap-x-6 pb-4">
        <div className="flex items-center gap-x-1 ">
          <span>
            <Petrol />
          </span>
          <p>Petrol</p>
        </div>
        <div className="flex items-center gap-x-1 ">
          <span>
            <Petrol />
          </span>
          <p>Petrol</p>
        </div>
        <div className="flex items-center gap-x-1 ">
          <span>
            <Petrol />
          </span>
          <p>Petrol</p>
        </div>
        <div className="flex items-center gap-x-1 ">
          <span>
            <Petrol />
          </span>
          <p>Petrol</p>
        </div>
        <div className="flex items-center gap-x-1 ">
          <span>
            <Petrol />
          </span>
          <p>Petrol</p>
        </div>
        <div className="flex items-center gap-x-1 ">
          <span>
            <Petrol />
          </span>
          <p>Petrol</p>
        </div>
      </div>
      <div className="mt-3 flex justify-between">
        <p className="space-x-1">
          <span className="font-semibold">15K ETB</span>
          <span className="text-sm ">/Day</span>
        </p>
        <button className="border border-cyan-800 focus:outline-none px-3 py rounded-sm cursor-pointer text-cyan-500 font-semibold hover:text-cyan-400 transition-colors duration-300 ">Rent Car</button>
      </div>
    </div>
  );
};

export default CarCard;
