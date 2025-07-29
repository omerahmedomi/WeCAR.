import React, { useState } from "react";
import HamburgerMenu from "../Icons/HamburgerMenu";
import XMark from "../Icons/XMark";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="flex  justify-between sm:justify-between sm:p-3  md:px-8 text-gray-900 relative sm:gap-4 font-roboto shadow-sm items-center ">
      <h1 className="max-sm:p-3  hover:cursor-pointer text-lg font-semibold">
        WeCAR.
      </h1>
      <div className={`sm:hidden max-sm:flex items-center gap-3 max-sm:p-4 `}>
        <button className="border px-2 cursor-pointer rounded-sm text-sm py-0.5">
          Sign In
        </button>
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
          } sm:relative sm:flex sm:gap-2 md:gap-10  lg:gap-15 xl:gap-20 justify-center max-sm:space-y-2 max-sm:*:hover:bg-gray-200 *:px-2  *:cursor-pointer max-sm:*:p-2 *:text-nowrap`}
      >
        <li className="">Home</li>
        <li>Rental Cars</li>
        <li>Our Services</li>
        <li>About Us</li>
        <li>FAQs</li>
      </ul>
      <div className="sign-up sm:flex gap-2 hidden text-nowrap ">
        <button className="border px-2 cursor-pointer rounded-sm text-sm py-0.5">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
