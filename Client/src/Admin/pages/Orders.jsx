// src/pages/Orders.jsx
import React, { useState } from "react";
import Table from "../components/Table";
import Modal from "../components/Modal";

export default function Orders() {
  const [orders, setOrders] = useState([
    { id: 1, user: "John Doe", car: "Toyota Corolla" },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  const handleSave = (data) => {
    if (data.id) {
      setOrders(orders.map((o) => (o.id === data.id ? data : o)));
    } else {
      data.id = Date.now();
      setOrders([...orders, data]);
    }
    setModalOpen(false);
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Orders</h1>
      <button
        onClick={() => {
          setEditing(null);
          setModalOpen(true);
        }}
        className="mb-4 px-3 py-1 bg-green-500 text-white rounded"
      >
        Add Order
      </button>
      <Table
        columns={["id", "user", "car"]}
        data={orders}
        onEdit={(row) => {
          setEditing(row);
          setModalOpen(true);
        }}
        onDelete={(row) => setOrders(orders.filter((o) => o.id !== row.id))}
      />
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        initialData={editing}
        fields={["user", "car"]}
      />
    </div>
  );
}
