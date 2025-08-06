import React, { useEffect, useState } from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Search from "../Icons/Search";
import CarCard from "../components/CarCard";
import { carss } from "../cars";

const RentalCars = () => {
  const [selectedGear, setSelectedGear] = useState("any");
  const [selectedPrice, setSelectedPrice] = useState("any");
  const [selectedColor, setSelectedColor] = useState("any");
  const [cars, setCars] = useState([]);

  const gearOptions = ["any", "manual", "auto"];
  const priceOptions = ["any", "below 15K", "15K-20K", "20K-25K", "above 20K"];
  const colorOptions = ["any", "red", "black", "gray", "white"];

  useEffect(() => {
    setCars(carss);
  }, []);
  return (
    <>
      <Header />
      <div className="search mt-20 mx-auto bg-blue-10 flex justify-center w-fit relative ">
        <input
          type="search"
          className="border  rounded-full pl-8 py-1 focus:outline-none font-eczar focus:bg-white [&::-webkit-search-cancel-button]:hidden "
          placeholder="Search for cars"
        />
        <span className="absolute left-2 top-2 ">
          <Search />
        </span>
      </div>

      <div className="cat-and-car-wrapper lg:flex lg:items-start w-full shadow-[3px]   font-eczar mt-4 pb-5">
        <div className="categories lg:border-r-1 border-gray-300 flex text-nowrap gap-x-10 sm:gap-x-0 p-2  flex-wrap max-[415px]:justify-around lg:flex-col  max-lg:justify-around  md:space-y-7 md:px-9  ">
          <div className="type flex flex-col items-center  space-y-2">
            <p className="font-semibold ">Gear</p>
            <div className="grid grid-cols-2 prices lg:flex flex-col *:space-x-1  *:space-y-3">
              {gearOptions.map((type, index) => {
                return (
                  <div>
                    <input
                      key={index}
                      type="radio"
                      name="type"
                      value={type}
                      className=""
                      checked={selectedGear == type}
                      onChange={(e) => {
                        setSelectedGear(e.target.value);
                        if(type == 'any') setCars(carss)
                        else{
                          setCars(carss.filter((car)=>car.transmission == type))
                        }
                       
                      }}
                      
                    />
                    <label for={type}>
                      {type.split("")[0].toUpperCase() + type.slice(1)}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="price flex flex-col items-center space-y-2">
            <p className="font-semibold">
              Price / <span className="text-sm">Day</span>
            </p>
            <div className="grid grid-cols-2 prices lg:flex flex-col *:space-x-1 *:space-y-3">
              {priceOptions.map((price, index) => {
                return (
                  <div>
                    <input
                      key={index}
                      type="radio"
                      name="price"
                      value={price}
                      className=""
                      checked={selectedPrice == price}
                      onChange={(e) => {
                        setSelectedPrice(e.target.value);
                      }}
                    />
                    <label for="Any">
                      {price.split("")[0].toUpperCase() + price.slice(1)}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="color flex flex-col items-center space-y-2 ">
            <p className="font-semibold">Color</p>
            <div className="colors grid grid-cols-2   lg:flex flex-col *:space-x-1 *:space-y-3">
              {colorOptions.map((color, index) => {
                return (
                  <div>
                    <input
                      key={index}
                      type="radio"
                      name="color"
                      value={color}
                      className=""
                      checked={selectedColor == color}
                      onChange={(e) => {
                        setSelectedColor(e.target.value);
                      }}
                    />
                    <label for="Any">
                      {color.split("")[0].toUpperCase() + color.slice(1)}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          className="cars lg:h-[92svh] min-h-[50svh] lg:overflow-y-scroll p-3 
           grid grid-cols-[repeat(1,_min-content)] sm:grid-cols-[repeat(2,_min-content)] min-[964px]:!grid-cols-[repeat(3,_min-content)]  min-[1150px]:!grid-cols-[repeat(3,_min-content)] 2xl:!grid-cols-[repeat(4,_min-content)]
          content-start justify-center sm:justify-around
           gap-y-10 sm:gap-y-15 lg:gap-x-3   grow   w-full"
        >
          {cars.map((car, index) => {
            return <CarCard key={index} car={car} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RentalCars;
