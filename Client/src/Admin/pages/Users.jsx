// src/pages/Users.jsx
import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import Modal from "../components/Modal";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([
    // { id: 1, name: "John Doe", email: "john@example.com" },
  ]);

  const apiBase = "http://localhost:5500";

  const fetchUsers = async () => {
    try {
      const response = await axios.get(apiBase + `/users`);
      console.log(response);
      setUsers(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteUser = async (id) => {
    try {
      setUsers((prev) => prev.filter((u) => u._id !== id));
      const response = await axios.delete(apiBase + `/users/${id}`);
      console.log(response);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Users</h1>

      <Table
        columns={["_id", "firstName", "lastName", "email"]}
        data={users}
        onDelete={(row) => deleteUser(row._id)}
      />
    </div>
  );
}
