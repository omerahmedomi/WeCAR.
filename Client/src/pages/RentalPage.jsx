import React from "react";
import Header from "./../components/Header";
import { useLocation } from "react-router-dom";

const RentalPage = () => {
  const { state: car } = useLocation();

  
  return (
    <div>
      <Header />
      <main className="pt-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Image Section */}
          <div className="sm:w-1/2">
            <img
              src="/CarsAuth.jpg"
              alt="Car"
              className="w-full h-64 sm:h-full object-fit"
            />
          </div>

          {/* Info Section */}
          <div className="sm:w-1/2 p-6 sm:p-8 bg-gray-50 flex flex-col justify-center">
            <p className="text-2xl font-bold text-gray-800 mb-4 text-center sm:text-left font-grenze">
              Car Info
            </p>

            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3 text-gray-700 font-eczar">
              <li className="flex justify-between">
                <span className="font-semibold">Name:</span>
                <span>{car.name}</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Model:</span>
                <span>{car.model}</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Mileage:</span>
                <span>{car.mileage}</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Transmission:</span>
                <span>{car.transmission}</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Fuel Type:</span>
                <span>{car.fuelType}</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Luggage:</span>
                <span>{car.luggageCapacity}</span>
              </li>
              <li className="flex justify-between gap-x-10 sm:gap-x-15 lg:gap-x-10">
                <span className="font-semibold">Features:</span>
                <span>{car.features.join(" , ")}</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Color:</span>
                <span>{car.color}</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RentalPage;
