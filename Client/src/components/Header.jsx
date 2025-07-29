import React, { useState } from "react";
import HamburgerMenu from "../Icons/HamburgerMenu";
import XMark from "../Icons/XMark";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated,setIsAuthenticated] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev)=> !prev)
  }

  
  return (
    <header className="flex justify-between sm:justify-between sm:p-3  md:px-8 text-gray-900 relative sm:gap-4 font-roboto shadow-sm">
      <h1 className="max-sm:p-4">WeCAR.</h1>
      <div
        className={`sm:hidden max-sm:flex items-center gap-3 max-sm:p-4`}
        onClick={() => {
          toggleMenu();
        }}
      >
        <button>Sign In</button>
        <button>{isMenuOpen ? <XMark /> : <HamburgerMenu />}</button>
      </div>
      <ul
        className={` absolute  top-full  right-0  
          ${
            !isMenuOpen && "hidden"
          } sm:relative sm:flex sm:gap-5 md:gap-10  lg:gap-15 xl:gap-20 justify-center space-y-1 px-2  max-sm:*:hover:bg-gray-300 `}
      >
        <li className="">Home</li>
        <li>Rental Cars</li>
        <li>Our Services</li>
        <li>About Us</li>
        <li>FAQs</li>
      </ul>
      <div className="sign-up sm:flex gap-2 hidden text-nowrap ">
        <button>Sign In</button>
      </div>
    </header>
  );
};

export default Header;
