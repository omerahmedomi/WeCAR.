// src/components/Modal.jsx
import React, { useState, useEffect } from "react";

export default function Modal({
  isOpen,
  onClose,
  onSave,
  initialData,
  // fields,
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
    <div className="fixed inset-0 bg-black/10 bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full h-full">
        <h2 className="text-lg font-bold mb-4">Edit Item</h2>
        {/* {fields.map((field) => (
          <input
            key={field}
            placeholder={field}
            value={formData[field] || ""}
            onChange={(e) => handleChange(e, field)}
            className="w-full p-2 border rounded mb-2"
          />
        ))} */}
        <p className="error-message"></p>
        <div className="edit-car grid grid-cols-3 gap-4  *:mb-2 ">
          <div>
            <span>Car Name:</span>
            <input placeholder="Car Name" />
          </div>
          <div>
            <input placeholder="Car Model" />
          </div>
          <div>
            <input type="number" placeholder="Year" />
          </div>
          <div>
            <select name="transmission" id="">
              <option value="manual">Manual</option>
              <option value="auto">Auto</option>
            </select>
          </div>
          <div>
            <select name="fuelType" id="">
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
              <option value="electric">Electric</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
          <div>
            <input type="number" placeholder="Mileage in kms" />
          </div>
          <div>
            <input type="number" placeholder="Doors" min={2} max={4} />
          </div>
          <div>
            <input type="number" placeholder="Seats" min={2} max={4} />
          </div>
          <div>
            <input type="number" placeholder="Price per day in thousands" />
          </div>
          <div>
            <input type="number" placeholder="Luggage Capacity in Liters" />
          </div>
          <div>
            <input type="text" placeholder="color" />
          </div>
          <div>
            <input type="radio" value="Yes" />
            <input type="radio" value="No" />
          </div>
        </div>

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
