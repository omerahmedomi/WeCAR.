import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-50 shadow-lg text-cyan-900 p-2 font-eczar space-y-3 text-sm ">
      <div className="info flex gap-4 justify-around">
        <div className="socials  ">
          <h1 className="font-semibold">Pages</h1>
          <ul className="leading-10 text-nowrap *:hover:cursor-pointer *:hover:text-cyan-600 ">
            <li>About Us</li>
            <li>Our Services</li>
            <li>Rental Cars</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="socials ">
          <h1 className="font-semibold">Socials</h1>
          <ul className="leading-10 ">
            <li>Linkedin</li>
            <li>Instagram</li>
            <li>Telegram</li>
            <li>Facebook</li>
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
        <div className="flex sm:gap-5 font-semibold text-nowrap max-sm:justify-evenly">
          <p> Privacy Policy</p>
          <p>Rental Terms and Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
