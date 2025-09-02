import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowDown from "./../Icons/ArrowDown";
import History from "./../Icons/History";
import LogOut from "./../Icons/LogOut";
import axios from "axios";
import { useGlobal } from "../GlobalContext";
import { apiBase } from "../data";

const ProfileDropdown = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { setUser } = useGlobal();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Avatar: fallback to first letter of username
  // const getAvatarLetter = () => {
  //   if (!user?.name) return "U";
  //   return user.name.charAt(0).toUpperCase();
  // };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Avatar Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-center  rounded-4xl text-sm bg-white dark:bg-gray-800 ring text-gray-700 dark:text-gray-100  hover:ring-2 hover:ring-cyan-400 transition-all duration-500 "
      >
        <div className="px-4 py-2 flex items-center gap-x-1 justify-center">
          <p>{user.firstName} </p>
          <span className="">
            <ArrowDown />
          </span>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute -right-1/2 sm:-right-2 mt-2 w-48 bg-white dark:bg-gray-600 rounded-lg shadow-lg ring-1 ring-gray-200 z-50 animate-fadeIn">
          <div className="px-4 py-3 border-b">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {user?.firstName + " " + user?.lastName || "User"}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-50">
              {user?.email || "email@example.com"}
            </p>
          </div>
          <ul className=" text-sm text-gray-700 flex flex-col dark:text-gray-100 transition-colors duration-500">
            <Link
              to="/rental-history"
             
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-x-1.5 px-2 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <History />
              <p>Rental History</p>
            </Link>
            <li
              className="flex items-center gap-x-1.5 px-2 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-b-lg cursor-pointer"
              onClick={async () => {
                setIsOpen(false);
                await axios.post(
                  apiBase + "/auth/sign-out",
                  {},
                  { withCredentials: true }
                );
                setUser(null); // remove user from state
              }}
            >
              <LogOut />
              <p className="text-red-600  dark:text-red-200">Log Out</p>
            </li>
          </ul>
          {/* <div className="border-t border-black flex  text-left px-1 gap-x-1 py-1 text-sm text-red-600 hover:bg-gray-100 hover:rounded-lg cursor-pointer">
            <LogOut />
            <button
              onClick={async () => {
                setIsOpen(false);
                await axios.post(
                  apiBase + "/auth/sign-out",
                  {},
                  { withCredentials: true }
                );
                setUser(null); // remove user from state
              }}
              className=""
            >
              Logout
            </button>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
