import React, { useEffect, useState } from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Search from "../Icons/Search";
import CarCard from "../components/CarCard";
// import { carss as originalCars} from "../cars";
import { useLocation } from "react-router-dom";
import axios from "axios";


const RentalCars = () => {



  
  const [selectedGear, setSelectedGear] = useState("any");
  const [selectedPrice, setSelectedPrice] = useState("any");
  const [selectedColor, setSelectedColor] = useState("any");
  const [allCars, setAllCars] = useState([]);
  const [cars, setCars] = useState([]);

  const gearOptions = ["any", "manual", "auto"];
  const priceOptions = ["any", "below 15K", "15K-20K", "20K-25K", "above 25K"];
  const colorOptions = ["any", "red", "black", "gray", "white"];

  const applyFilters = () => {
    const filtered = allCars.filter((car) => {
      const gearMatch =
        selectedGear === "any" || car.transmission === selectedGear;
      const colorMatch =
        selectedColor === "any" ||
        car.color.toLowerCase() === selectedColor.toLowerCase();
        const priceMatch = (() => {
          if (selectedPrice === "any") return true;
          if (selectedPrice === "below 15K") return car.pricePerDayInK < 15;
          if (selectedPrice === "15K-20K")
            return car.pricePerDayInK >= 15 && car.pricePerDayInK < 20;
          if (selectedPrice === "20K-25K")
            return car.pricePerDayInK >= 20 && car.pricePerDayInK < 25;
          if (selectedPrice === "above 25K") return car.pricePerDayInK >= 25;
          return true;
        })();


      return gearMatch && colorMatch && priceMatch;
    });

    setCars(filtered);
  };

  const apiBase = 'http://localhost:5500'

 const fetchCars = async()=>{
  try {
    const response = await axios.get(apiBase + `/cars`)
    setAllCars(response.data.cars)
    setCars(response.data.cars)
  } catch (error) {
    console.log(error)
    
  }
   

 }



  useEffect(() => {
    
    applyFilters();
  }, [selectedGear,selectedPrice,selectedColor]);
  
  useEffect(() => {
    
    window.scrollTo(0,0)
  }, []);

  useEffect(() => {
    fetchCars();
    
      
  }, []);
  return (
    <>
      <Header />
      
      <div className="search mt-20 mx-auto bg-blue-10 flex justify-center w-fit relative ">
        <input
          type="search"
          className="border  rounded-full pl-8 py-1 focus:outline-none font-eczar focus:bg-white [&::-webkit-search-cancel-button]:hidden caret-cyan-500"
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
                        if (type == "any") setCars((prev) => prev);
                        else {
                          setCars((prev) =>
                            prev.filter((car) => car.transmission == type)
                          );
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
          <div className="pricePerDayInK flex flex-col items-center space-y-2">
            <p className="font-semibold">
              Price / <span className="text-sm">Day</span>
            </p>
            <div className="grid grid-cols-2 prices lg:flex flex-col *:space-x-1 *:space-y-3">
              {priceOptions.map((pricePerDayInK, index) => {
                return (
                  <div>
                    <input
                      key={index}
                      type="radio"
                      name="pricePerDayInK"
                      value={pricePerDayInK}
                      className=""
                      checked={selectedPrice == pricePerDayInK}
                      onChange={(e) => {
                        setSelectedPrice(e.target.value);
                        if (pricePerDayInK == "any") setCars((prev) => prev);
                        else if (pricePerDayInK == "below 15K") {
                          setCars((prev) =>
                            prev.filter((car) => car.pricePerDayInK < 15)
                          );
                        } else if (pricePerDayInK == "15K-20K") {
                          setCars((prev) =>
                            prev.filter(
                              (car) =>
                                car.pricePerDayInK >= 15 &&
                                car.pricePerDayInK < 20
                            )
                          );
                        } else if (pricePerDayInK == "20K-25K") {
                          setCars((prev) =>
                            prev.filter(
                              (car) =>
                                car.pricePerDayInK >= 20 &&
                                car.pricePerDayInK < 20
                            )
                          );
                        } else {
                          setCars((prev) =>
                            prev.filter((car) => car.pricePerDayInK >= 25)
                          );
                        }
                      }}
                    />
                    <label for="Any">
                      {pricePerDayInK.split("")[0].toUpperCase() +
                        pricePerDayInK.slice(1)}
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
              grow   w-full gap-y-5 lg:gap-x-3"
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
