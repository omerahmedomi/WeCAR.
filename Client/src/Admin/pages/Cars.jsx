// src/pages/Cars.jsx
import React, { useState } from "react";
import Table from "../components/Table";
import Modal from "../components/Modal";

export default function Cars() {
  const [cars, setCars] = useState([
    { id: 1, brand: "Toyota", model: "Corolla" },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  const handleSave = (data) => {
    if (data.id) {
      setCars(cars.map((c) => (c.id === data.id ? data : c)));
    } else {
      data.id = Date.now();
      setCars([...cars, data]);
    }
    setModalOpen(false);
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Cars</h1>
      <button
        onClick={() => {
          setEditing(null);
          setModalOpen(true);
        }}
        className="mb-4 px-3 py-1 bg-green-500 text-white rounded"
      >
        Add Car
      </button>
      <Table
        columns={["id", "name", "model","quantity","available"]}
        data={cars}
        onEdit={(row) => {
          setEditing(row);
          setModalOpen(true);
        }}
        onDelete={(row) => setCars(cars.filter((c) => c.id !== row.id))}
      />
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        initialData={editing}
        // fields={["name", "model"]}
      />
    </div>
  );
}
