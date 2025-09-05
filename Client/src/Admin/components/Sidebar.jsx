import React from "react";

export default function Sidebar({ page, setPage }) {
  const menu = [
    { id: "users", label: "Users" },
    { id: "cars", label: "Cars" },
    { id: "orders", label: "Orders" },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 dark:shadow-gray-500 dark:shadow-md shadow-lg">
      <div className="p-4 font-semibold text-3xl font-grenze">Admin Dashboard</div>
      <nav className="font-eczar">
        {menu.map((item) => (
          <button
            key={item.id}
            onClick={() => setPage(item.id)}
            className={`w-full text-left px-4 py-2 hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 ${
              page === item.id ? "bg-gray-200 dark:bg-gray-700 font-semibold" : ""
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
