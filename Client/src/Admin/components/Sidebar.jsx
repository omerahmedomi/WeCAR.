// src/components/Sidebar.jsx
import React from "react";

export default function Sidebar({ page, setPage }) {
  const menu = [
    { id: "users", label: "Users" },
    { id: "cars", label: "Cars" },
    { id: "orders", label: "Orders" },
  ];

  return (
    <aside className="w-64 bg-white shadow-lg">
      <div className="p-4 font-bold text-lg">Admin Dashboard</div>
      <nav>
        {menu.map((item) => (
          <button
            key={item.id}
            onClick={() => setPage(item.id)}
            className={`w-full text-left px-4 py-2 hover:bg-gray-200 ${
              page === item.id ? "bg-gray-300 font-semibold" : ""
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
