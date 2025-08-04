import React from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Search from "../Icons/Search";
import CarCard from "../components/CarCard";


const RentalCars = () => {
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

      <div className="cat-and-car-wrapper lg:flex lg:items-start w-full   font-eczar mt-4">
        <div className="categories  flex text-nowrap gap-x-10 sm:gap-x-0 p-2 text-sm flex-wrap max-[415px]:justify-around lg:flex-col  max-lg:justify-around md:text-base md:space-y-7 md:px-9 ">
          <div className="type flex flex-col items-center gears max-[479px]:order-4 max-[479px]:flex-2 space-y-2">
            <p className="font-semibold ">Gear</p>
            <div className="self-center *:space-x-1 *:space-y-3">
              <div>
                <input type="radio" name="type" value="Any" className="" />
                <label for="Any">Any</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="type"
                  value="Automatic"
                  className=""
                />
                <label for="Automatic">Automatic</label>
              </div>
              <div>
                <input type="radio" name="type" value="Manual" />
                <label for="Manual">Manual</label>
              </div>
            </div>
          </div>
          <div className="price flex flex-col items-center space-y-2">
            <p className="font-semibold">
              Price / <span className="text-sm">Day</span>
            </p>
            <div className="grid grid-cols-2 prices lg:flex flex-col *:space-x-1 *:space-y-3">
              <div className="">
                <input type="radio" name="price" value="Any" className="" />
                <label for="Any">Any</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="price"
                  value="Automatic"
                  className=""
                />
                <label for="Automatic">Below 15K</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="price"
                  value="Automatic"
                  className=""
                />
                <label for="Automatic">15K-20k</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="price"
                  value="Automatic"
                  className=""
                />
                <label for="Automatic">20K-25K</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="price"
                  value="Automatic"
                  className=""
                />
                <label for="Automatic">Above 25K</label>
              </div>
            </div>
          </div>
          <div className="color flex flex-col items-center space-y-2 ">
            <p className="font-semibold">Color</p>
            <div className="colors grid grid-cols-2   lg:flex flex-col *:space-x-1 *:space-y-3">
              <div>
                <input type="radio" name="color" value="Any" className="" />
                <label for="Any">Any</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="color"
                  value="Automatic"
                  className=""
                />
                <label for="WhiteGray">White/Gray</label>
              </div>
              <div>
                <input type="radio" name="color" value="Manual" />
                <label for="Red">Red</label>
              </div>
              <div>
                <input type="radio" name="color" value="Manual" />
                <label for="Black">Black</label>
              </div>
              <div>
                <input type="radio" name="color" value="Manual" />
                <label for="Yellow">Yellow</label>
              </div>
            </div>
          </div>
        </div>
        <div
          className="cars bg-pink-300 lg:h-[92svh] lg:overflow-y-scroll p-3 
grid grid-cols-[repeat(1,_min-content)] sm:grid-cols-[repeat(2,_min-content)] min-[1170px]:!grid-cols-[repeat(3,_min-content)] 2xl:!grid-cols-[repeat(4,_min-content)]
content-start justify-center gap-5 sm:gap-10 lg:gap-15  grow "
        >
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RentalCars;
