import React, { useState, useRef, useEffect } from "react";
import HamburgerMenu from "../Icons/HamburgerMenu";
import XMark from "../Icons/XMark";
import { Link,useLocation } from "react-router-dom";
import { useGlobal } from "../GlobalContext";
import ProfileDropdown from "./ProfileDropdown";
import ToggleSwitch from "./ToggleSwitch";

const Header = () => {
  const [activeNav, setActiveNav] = useState(0);
  const Navs = ["Home", "Rental Cars", "Our Services", "About Us", "FAQs"];
  const navRoutes = ['/','/rental-cars','/services','/about','/faqs']
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const location = useLocation();
  


  const {user,isLoading}=useGlobal()
  console.log("From header",user)

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
    <header className="flex  justify-between sm:justify-between sm:p-3  md:px-8 text-gray-900 fixed top-0 w-full z-50 sm:gap-4 font-eczar shadow-sm dark:shadow-gray-600 items-center bg-gray-100 dark:bg-gray-700 dark:text-gray-50 transition-colors duration-500">
      <h1 className="max-sm:p-3  hover:cursor-pointer text-lg font-semibold dark:text-white">
        <Link to={"/"}>WeCAR.</Link>
      </h1>
      <span className="order sm:order-4">
        {" "}
        <ToggleSwitch />
      </span>
      <div className={`sm:hidden max-sm:flex items-center gap-3 max-sm:p-4 `}>
        {/* <ToggleSwitch /> */}
        {isLoading ? (
          <p className="text-sm text-gray-600">Checking Status...</p>
        ) : user ? (
          <ProfileDropdown user={user} />
        ) : (
          <Link
            className="ring-2 outline-none focus:outline-none  px-3 py-0.5 cursor-pointer rounded-sm bg-white dark:bg-gray-600 ring-gray-400
            dark:ring-gray-800 hover:bg-gray-50 
            dark:hover:bg-gray-900
            hover:ring-cyan-400
            active:bg-gray-50
            active:ring-cyan-400 transition-all duration-100 
            "
            to={"/sign-up"}
          >
            Sign In
          </Link>
        )}

        <button
          className="hover:text-gray-600 dark:hover:text-white hover:cursor-pointer"
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
          } sm:relative sm:flex sm:gap-5 md:gap-10  lg:gap-15 xl:gap-20 justify-center  z-100 max-sm:bg-gray-100 max-sm:dark:bg-gray-600 max-sm:divide-y divide-black dark:divide-white`}
      >
        {Navs.map((nav, index) => (
          <Link
            key={index}
            to={navRoutes[index]}
            className={` bg-yellow-00 ${
              activeNav == index &&
              "text-cyan-600 dark:text-cyan-300  font-medium"
            } max-sm:hover:bg-gray-200 max-sm:dark:hover:bg-gray-500   cursor-pointer max-sm:p-2 text-nowrap  max-sm:block sm:hover:text-cyan-400 sm:dark:hover:text-cyan-100`}
            onClick={() => {
              setActiveNav(index);
            }}
          >
            {nav}
          </Link>
        ))}
      </ul>

      <div className="sign-up sm:flex gap-2 hidden text-nowrap space-x-1 items-center">
        {isLoading ? (
          <p className="text-xs ">Checking Status...</p>
        ) : user ? (
          <ProfileDropdown user={user} />
        ) : (
          <Link
            className="ring-2 outline-none focus:outline-none  px-3 py-0.5 cursor-pointer rounded-sm bg-white dark:bg-gray-600 ring-gray-400
            dark:ring-gray-800 hover:bg-gray-50 
            dark:hover:bg-gray-900
            hover:ring-cyan-400
            active:bg-gray-50
            active:ring-cyan-400 transition-all duration-100 
            "
            to={"/sign-up"}
          >
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
