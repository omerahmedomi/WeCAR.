import React, { useState, useRef, useEffect } from "react";
import HamburgerMenu from "../Icons/HamburgerMenu";
import XMark from "../Icons/XMark";
import { Link,useLocation } from "react-router-dom";

const Header = () => {
  const [activeNav, setActiveNav] = useState(0);
  const Navs = ["Home", "Rental Cars", "Our Services", "About Us", "FAQs"];
  const navRoutes = ['/','/rental-cars','/services','/about','/faqs']
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

useEffect(() => {
  const currentPath = location.pathname
  const foundIndex = navRoutes.indexOf(currentPath)
  if(foundIndex !== -1)
    setActiveNav(foundIndex);
  
    
  }
, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="flex  justify-between sm:justify-between sm:p-3  md:px-8 text-gray-900 relative sm:gap-4 font-eczar shadow-sm items-center ">
      <h1 className="max-sm:p-3  hover:cursor-pointer text-lg font-semibold">
        WeCAR.
      </h1>
      <div className={`sm:hidden max-sm:flex items-center gap-3 max-sm:p-4 `}>
        <Link
          className="border-2 outline-none focus:outline-none focus:ring-1 border-gray-700 px-2 cursor-pointer rounded-sm bg-white transition-colors duration-300 ring-gray-400 hover:bg-gray-50 active:bg-gray-50"
          to={"/sign-up"}
        >
          Sign In
        </Link>
        <button
          className="hover:text-gray-600 hover:cursor-pointer"
          onClick={() => {
            toggleMenu();
          }}
        >
          {isMenuOpen ? <XMark /> : <HamburgerMenu />}
        </button>
      </div>
      <ul
        className={` absolute  top-[100%]  max-sm:right-0 max-sm:pr-1  max-sm:h max-sm:shadow-sm text-sm sm:text-base 
          ${
            !isMenuOpen && "hidden"
          } sm:relative sm:flex sm:gap-5 md:gap-10  lg:gap-15 xl:gap-20 justify-center  z-100 bg-gray-100 `}
      >
        {Navs.map((nav, index) => (
          <Link
            key={index}
            to={navRoutes[index]}
            className={`hover:text-blue-500 bg-yellow-00 ${
              activeNav == index && "text-blue-700 border-b"
            } max-sm:hover:bg-white   cursor-pointer max-sm:p-2 text-nowrap max-sm:border-b max-sm:block`}
            onClick={() => {
              setActiveNav(index);
            }}
          >
            {nav}
          </Link>
        ))}
      </ul>
      <div className="sign-up sm:flex gap-2 hidden text-nowrap ">
        <Link
          className="border-2 outline-none focus:outline-none focus:ring-1 border-gray-700 px-2 cursor-pointer rounded-sm bg-white transition-colors duration-300 ring-gray-400 hover:bg-gray-50 "
          to={"/sign-up"}
        >
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Header;
