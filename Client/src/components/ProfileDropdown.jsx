import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowDown from './../Icons/ArrowDown';

const ProfileDropdown = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

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
        className="flex items-center justify-center  rounded-4xl text-sm bg-white ring text-gray-700  hover:ring-2 hover:ring-cyan-400 transition "
      >
        <div className="px-4 py-2 flex items-center gap-x-1 justify-center">
          <p>{user.firstName} </p>
          <span className=""><ArrowDown/></span>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg ring-1 ring-gray-200 z-50 animate-fadeIn">
          <div className="px-4 py-3 border-b">
            <p className="text-sm font-medium text-gray-900">
              {user?.firstName + " " + user?.lastName || "User"}
            </p>
            <p className="text-xs text-gray-500">
              {user?.email || "email@example.com"}
            </p>
          </div>
          <ul className="py-1 text-sm text-gray-700">
            <li>
              <Link
                to="/profile"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Rental History
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Notifications
              </Link>
            </li>
          </ul>
          <div className="border-t">
            <button
              onClick={() => {
                setIsOpen(false);
                console.log("Logout clicked");
              }}
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 hover:rounded-lg cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
