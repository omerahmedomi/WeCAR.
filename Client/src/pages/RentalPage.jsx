import React, { useEffect,useState } from "react";
import Header from "./../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { useGlobal } from "../GlobalContext";

import ArrowDown from "../Icons/ArrowDown";
import Footer from './../components/Footer';

const toUTCDate = (s) => {
  if (!s) return null;
  const [y, m, d] = s.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d));
};

const dayDiff = (startStr, endStr) => {
  const start = toUTCDate(startStr);
  const end = toUTCDate(endStr);
  if (!start || !end) return 0; // not both picked yet
  const msPerDay = 24 * 60 * 60 * 1000;
  return Math.max(1, Math.round((end - start) / msPerDay)); // exclusive of pickup day
  // If you want same-day return to count as 1 day, use:
  // return Math.max(1, Math.round((end - start) / msPerDay));
};


const RentalPage = () => {
  const { state: car } = useLocation();
  const { user } = useGlobal();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const options = ["Self Drive", "Chauffeur Drive",];
  const [selected, setSelected] = useState(options[0]);
const [dates, setDates] = useState({ pickUpDate: "", returnDate: "" });
  const totalDays = dayDiff(dates.pickUpDate, dates.returnDate);
  const totalPrice = totalDays > 0 ?  car.pricePerDayInK * totalDays + (selected == options[1] && 0.5 * totalDays) : 0;

  

  const today = new Date();

  // Min = tomorrow
  const minDate = new Date(today);
  minDate.setDate(today.getDate()+1);

  // Max = 5 days from today
  const maxDate = new Date(today);
  maxDate.setDate(today.getDate() + 5);

  const returnMinDate =new Date(dates.pickUpDate || today)
  returnMinDate.setDate(returnMinDate.getDate() + 1)

  const returnMaxDate = new Date(today)
  returnMaxDate.setDate(returnMinDate.getDate() +30)
    
  

  const handleDateChange = (e)=>{

  
    setDates((prev)=>({...prev,[e.target.name]:e.target.value}))
    console.log(dates)
    console.log(selected)

  }

   const [option, setOption] =useState("");

   
  useEffect(() => {
    if (!user) {
      navigate("/sign-up");
    }
  }, []);

  return (
    <div>
      <Header />
      <main className="pt-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto space-y-3">
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
        <div className="rental-options bg-amber-200 p-2 flex flex-col space-y-3 items-center ">
          <p className="text-xl lg:text-2xl font-grenze text-center font-semibold ">
            Rental Options
          </p>
          <div className="options-wrapeer lg:flex space-y-4 gap-4 text-nowrap items-center">
            <div className="options  flex gap-2 items-center font-eczar">
              <p className="font-semibold ">Rental Option: </p>
              <div className="relative w-40">
                <button
                  onClick={() => setOpen(!open)}
                  className="w-full flex justify-between items-center py-1 px-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  {selected}
                  <span>
                    <ArrowDown />
                  </span>
                </button>

                {open && (
                  <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                    {options.map((opt, idx) => (
                      <li
                        key={idx}
                        onClick={() => {
                          setSelected(opt);
                          setOpen(false);
                        }}
                        className="py-1 px-2 cursor-pointer hover:bg-blue-100"
                      >
                        {opt}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="pick-up-date flex gap-4 items-center">
              <p className="font-semibold font-eczar">Pick Up Date: </p>
              <input
                type="date"
                value={dates.pickUpDate}
                name="pickUpDate"
                onChange={handleDateChange}
                min={minDate.toISOString().split("T")[0]} // no past dates
                max={maxDate.toISOString().split("T")[0]} // no past dates
                className="px-2 py-1 w-40 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div
              className={`pick-up-date flex gap-5.5 items-center self-start ${
                selected == options[2] && "hidden"
              }`}
            >
              <p className="font-semibold font-eczar">Return Date: </p>
              <input
                type="date"
                value={dates.returnDate}
                name="returnDate"
                onChange={handleDateChange}
                min={returnMinDate.toISOString().split("T")[0]}
                max={returnMaxDate.toISOString().split("T")[0]}
                disabled={!dates.pickUpDate}
                className="px-2 py-1 w-40 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
          </div>
          <p className="font-eczar font-bold text-center text-lg">
            Total Price:
            <span className="ml-2">{totalPrice}K ETB</span>
          </p>
        </div>
        <div className="note mb-10 max-w-250 mx-auto bg-amber-700 ">
          <span className="font-grenze font-bold text-lg">Note:</span>
          <p className="font-eczar">
            Please make sure you have selected your desired correct dates and
            pay total amount to one of our accounts listed in below. Make sure
            to bring your valid credentials and payment proof to our store on a
            pick up date you specified otherwise rentals may not be granted
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RentalPage;
