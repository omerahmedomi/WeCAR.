import React from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";

const RentalCars = () => {
  return (
    <>
      <Header />
      <div className="pt-20 bg h-svh bg-amber-300 flex flex-col items-center">
        <div className="search">
          <input type="search" className="border" />
        </div>
        <div className="categories bg-red-500 flex text-nowrap gap-x-2 p-2 text-sm flex-wrap max-[415px]:justify-around  ">
          <div className="type flex flex-col items-center gears max-[406px]:order-4 max-[406px]:flex-2 ">
            <p>Gear</p>
            <div className="self-center">
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
          <div className="price flex flex-col items-center">
            <p>
              Price / <span className="text-sm">Day</span>
            </p>
            <div className="grid grid-cols-2 *:bg-amber-400  bg-yellow-300 *:border prices">
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
          <div className="color flex flex-col items-center  ">
            <p>Color</p>
            <div className="colors grid grid-cols-2 *:bg-amber-400  bg-yellow-300 *:border">
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

        <div className="cars">Cars</div>
      </div>
      <Footer />
    </>
  );
};

export default RentalCars;
