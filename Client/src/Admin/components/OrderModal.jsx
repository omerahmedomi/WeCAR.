// src/components/Modal.jsx
import React, { useState, useEffect } from "react";

export default function OrderModal({
  isOpen,
  onClose,
  onSave,
  initialData,
  fields,
}) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(initialData || {});
  }, [initialData]);

  if (!isOpen) return null;

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-lg font-bold mb-4">Edit Item</h2>
        {fields.map((field) => (
          <input
            key={field}
            placeholder={field}
            value={formData[field] || ""}
            onChange={(e) => handleChange(e, field)}
            className="w-full p-2 border rounded mb-2"
          />
        ))}
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-3 py-1 rounded bg-gray-300">
            Cancel
          </button>
          <button
            onClick={() => onSave(formData)}
            className="px-3 py-1 rounded bg-green-500 text-white"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
