// src/pages/Users.jsx
import React, { useState,useEffect } from "react";
import Table from "../components/Table";
import Modal from "../components/Modal";
import  axios  from 'axios';

export default function Users() {
  const [users, setUsers] = useState([
    // { id: 1, name: "John Doe", email: "john@example.com" },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  const apiBase = 'http://localhost:5500';

  const fetchUsers = async ()=>{

    try {
      const response = await axios.get(apiBase +`/users`)
      console.log(response)
      setUsers(response.data.users)
      
      
    } catch (error) {
      console.log(error)
      
    }
  }
  useEffect(() => {
    
    fetchUsers()
  }, []);

  const handleSave = (data) => {
    if (data.id) {
      setUsers(users.map((u) => (u.id === data.id ? data : u)));
    } else {
      data.id = Date.now();
      setUsers([...users, data]);
    }
    setModalOpen(false);
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Users</h1>
      <button
        onClick={() => {
          setEditing(null);
          setModalOpen(true);
        }}
        className="mb-4 px-3 py-1 bg-green-500 text-white rounded"
      >
        Add User
      </button>
      <Table
        columns={["_id", "firstName","lastName", "email"]}
        data={users}
        onEdit={(row) => {
          setEditing(row);
          setModalOpen(true);
        }}
        onDelete={(row) => setUsers(users.filter((u) => u.id !== row.id))}
      />
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        initialData={editing}
        fields={["name", "email"]}
      />
    </div>
  );
}
