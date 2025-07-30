import React, { useState, useRef, useEffect } from "react";
import HamburgerMenu from "../Icons/HamburgerMenu";
import XMark from "../Icons/XMark";

const Header = () => {
  const [activeNav, setActiveNav] = useState(0);
  const Navs = ["Home", "Rental Cars", "Our Services", "About Us", "FAQs"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navListRef = useRef(null);

  const moveSlider = () => {
    const navItems = navListRef.current.querySelectorAll("li");
    const slider = navListRef.current.querySelector(".slider");
    const activeItem = navItems[activeNav];

    if (activeItem && slider) {
      const offsetLeft = activeItem.offsetLeft;
      const width = activeItem.offsetWidth;
      slider.style.transform = `translateX(${offsetLeft}px)`;
      slider.style.width = `${width}px`;
    }
  };

  useEffect(() => {
    moveSlider();

    window.addEventListener('resize',moveSlider)
    
  }, [activeNav, isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="flex  justify-between sm:justify-between sm:p-3  md:px-8 text-gray-900 relative sm:gap-4 font-roboto shadow-sm items-center ">
      <h1 className="max-sm:p-3  hover:cursor-pointer text-lg font-semibold">
        WeCAR.
      </h1>
      <div className={`sm:hidden max-sm:flex items-center gap-3 max-sm:p-4 `}>
        <button className="border-2 outline-none focus:outline-none focus:ring-1 border-gray-700 px-2 cursor-pointer rounded-sm bg-white transition-colors duration-300 ring-gray-400 hover:bg-gray-50">
          {" "}
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
          } sm:relative sm:flex sm:gap-5 md:gap-10  lg:gap-15 xl:gap-20 justify-center  `}
        ref={navListRef}
      >
        {Navs.map((nav, index) => (
          <li
            key={index}
            className={`hover:text-blue-900 bg-yellow-00 ${
              activeNav == index && "text-blue-700"
            } max-sm:hover:bg-white   cursor-pointer max-sm:p-2 text-nowrap max-sm:border-b`}
            onClick={() => {
              setActiveNav(index);
              moveSlider();
            }}
          >
            {nav}
          </li>
        ))}

        <div className="slider h-1 w-[50px] bg-blue-500 absolute top-full rounded-full left-0 hidden sm:block transition-all duration-300"></div>
      </ul>
      <div className="sign-up sm:flex gap-2 hidden text-nowrap ">
        <button className="border-2 outline-none focus:outline-none focus:ring-1 border-gray-700 px-2 cursor-pointer rounded-sm bg-white transition-colors duration-300 ring-gray-400 hover:bg-gray-50 ">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
