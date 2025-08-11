import React, { useState, useEffect, useRef } from "react";

export default function ProfileDropdown({ user, onLogout }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!user) return null;

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex justify-center items-center px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-expanded={open}
        aria-haspopup="true"
      >
        Hello, {user.firstName} ▼
      </button>

      {open && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1">
            <button
              onClick={() => alert("Go to Profile")}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Profile
            </button>
            <button
              onClick={() => alert("Go to Settings")}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Settings
            </button>
            <button
              onClick={() => {
                onLogout();
                setOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
            >
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
