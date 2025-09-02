import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-600 shadow-lg text-cyan-900 dark:text-cyan-200 p-2 font-eczar space-y-3 text-sm transition-colors duration-500">
      <div className="info flex gap-4 justify-around">
        <div className="socials  ">
          <h1 className="font-semibold">Pages</h1>
          <ul className="leading-10 text-nowrap *:hover:cursor-pointer *:hover:text-cyan-600 *:active:text-cyan-600  *:dark:hover:text-cyan-100 *:dark:active:text-cyan-100">
            <li>
              <Link to={"/about"}>About Us</Link>
            </li>
            <li>
              <Link to={"/services"}>Our Services</Link>
            </li>
            <li>
              <Link to={"/rental-cars"}>Rental Cars</Link>
            </li>
            <li>
              <Link to={"/faqs"}>FAQs</Link>
            </li>
          </ul>
        </div>
        <div className="socials ">
          <h1 className="font-semibold">Socials</h1>
          <ul className="leading-10 *:hover:cursor-pointer  *:hover:text-cyan-600 *:active:text-cyan-600  *:dark:hover:text-cyan-100 *:dark:active:text-cyan-100">
            <li>
              <Link>Linkedin</Link>
            </li>
            <li>
              <Link>Instagram</Link>
            </li>
            <li>
              <Link>Telegram</Link>
            </li>
            <li>
              <Link>Facebook</Link>
            </li>
          </ul>
        </div>
        <div className="contacts max-[365px]:space-y-3">
          <h1 className="font-semibold">Contacts</h1>
          <ul className="leading-10  ">
            <li className="max-[365px]:leading-5">
              Telephone: +25122-112-33-44{" "}
            </li>
            <li className="max-[365px]:leading-5">Email: support@wecar.com</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-around text-xs md:text-sm max-sm:flex-col max-sm:gap-y-5">
        <p className="font-semibold  text-nowrap max-sm:order-2 max-sm:self-center">
          &copy; {new Date().getFullYear()} WeCAR. All Rights Reserved.
        </p>
        <div className="flex sm:gap-5 font-semibold text-nowrap max-sm:justify-evenly *:hover:cursor-pointer  *:hover:text-cyan-600 *:active:text-cyan-600  *:dark:hover:text-cyan-100 *:dark:active:text-cyan-100 ">
          <p> Privacy Policy</p>
          <p>Rental Terms and Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
