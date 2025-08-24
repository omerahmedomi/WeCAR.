// src/App.jsx
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Users from "./pages/Users";
import Cars from "./pages/Cars";
import Orders from "./pages/Orders";

export default function Admin() {
  const [page, setPage] = useState("users");

  return (
    <div className="flex h-screen ">
      <Sidebar page={page} setPage={setPage} />
      <main className="flex-1 p-6 overflow-auto">
        {page === "users" && <Users />}
        {page === "cars" && <Cars />}
        {page === "orders" && <Orders />}
      </main>
    </div>
  );
}
