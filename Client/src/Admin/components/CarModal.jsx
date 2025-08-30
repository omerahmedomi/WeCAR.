// src/components/CarModal.jsx
import { Save, XCircle } from "lucide-react";
import React, { useState, useEffect } from "react";
import { TagsInput } from "react-tag-input-component";
export default function CarModal({
  isOpen,
  onClose,
  onSave,
  initialData,
  error,
  setError,
  // fields,
}) {
  const [formData, setFormData] = useState({});
  const [selected, setSelected] = useState(formData.features || []);

  useEffect(() => {
    if (isOpen) setFormData(initialData || {});
  }, [initialData, isOpen]);

  useEffect(() => {
    setSelected(formData.features || []);
  }, [formData.features]);
  if (!isOpen) return null;

  const handleChange = (e) => {
    setError("");
    const { name, value, type } = e.target;

    let newValue = value;
    if (name === "available" && type === "radio") {
      newValue = value === "true"; // convert string to boolean
    }

    setFormData({ ...formData, [name]: newValue });
    console.log(formData);
  };

  return (
    <div className="bg-white fixed inset-0  bg-opacity-40 flex items-center justify-center font-eczar z-50 overflow-y-scroll ">
      <div className=" rounded-lg  p-6 w-full h-full ">
        <h2 className="text-lg font-bold mb-4 text-center">
          {initialData ? "Edit Car" : "Add Car"}
        </h2>
        {/* {fields.map((field) => (
          <input
            key={field}
            placeholder={field}
            value={formData[field] || ""}
            onChange={(e) => handleChange(e, field)}
            className="w-full p-2 border rounded mb-2"
          />
        ))} */}
        <p className="error-message  text-sm text-red-600 h-5 mb-4">{error}</p>
        <div className="edit-car grid gap-x-24 gap-y-5 grid-cols-[repeat(2,auto)] *:mb-2   *:bg-amber-20 justify-center">
          <div>
            <span>Car Name:</span>
            <input
              placeholder="Car Name"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <span>Car Model:</span>
            <input
              placeholder="Car Model"
              name="model"
              value={formData.model || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <span>Year:</span>
            <input
              type="number"
              placeholder="Year"
              name="year"
              value={formData.year || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <span>Transmission:</span>
            <select name="transmission" id="" onChange={handleChange}>
              <option
                value=""
                disabled
                className="text-sm "
                selected={!formData.transmission}
              >
                {" "}
                Select Transmission
              </option>
              <option
                value="manual"
                selected={formData.transmission == "manual"}
              >
                Manual
              </option>
              <option value="auto" selected={formData.transmission == "auto"}>
                Auto
              </option>
            </select>
          </div>
          <div>
            <span>Fuel Type:</span>
            <select name="fuelType" id="" onChange={handleChange}>
              <option
                value=""
                disabled
                className="text-sm"
                selected={!formData.fuelType}
              >
                Select Fuel Type
              </option>
              <option value="petrol" selected={formData.fuelType == "petrol"}>
                Petrol
              </option>
              <option value="diesel" selected={formData.fuelType == "diesel"}>
                Diesel
              </option>
              <option
                value="electric"
                selected={formData.fuelType == "electric"}
              >
                Electric
              </option>
              <option value="hybrid" selected={formData.fuelType == "hybrid"}>
                Hybrid
              </option>
            </select>
          </div>
          <div>
            <span>Mileage:</span>
            <input
              type="number"
              placeholder="Mileage in kms"
              name="mileage"
              value={formData.mileage || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <span>Doors:</span>
            <input
              type="number"
              placeholder="Doors"
              min={2}
              max={4}
              name="doors"
              value={formData.doors || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <span>Seats:</span>
            <input
              type="number"
              placeholder="Seats"
              min={2}
              max={4}
              name="seats"
              value={formData.seats || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <span>Rental Price:</span>
            <input
              type="number"
              placeholder="Price per day in thousands"
              name="pricePerDayInK"
              value={formData.pricePerDayInK || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <span>Luggage Capacity:</span>
            <input
              type="number"
              placeholder="Luggage Capacity in Liters"
              name="luggageCapacity"
              value={formData.luggageCapacity || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <span>Color:</span>
            <input
              type="text"
              placeholder="Car Color"
              name="color"
              value={formData.color || ""}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center">
            <span>Available:</span>
            <div className=" flex items-center">
              <label for="available"></label>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="available"
                  value="true"
                  checked={formData.available}
                  className="!w-fit"
                  onChange={handleChange}
                />
                <span>Yes</span>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="available"
                  value="false"
                  className="!w-fit "
                  onChange={handleChange}
                  checked={
                    !formData.available &&
                    Object.keys(formData).includes("available")
                  }
                  // checked={!formData.available || ""}
                />
                <span>No</span>
              </div>
            </div>
          </div>
          <div className="max-w-80 features flex items-center">
            <span>Features:</span>
            <TagsInput
              value={selected}
              onChange={setSelected}
              name="features"
              placeHolder="Enter car features"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          <span title="Cancel">
            <XCircle
              size={34}
              onClick={onClose}
              className={`rounded-full p-1 hover:bg-fuchsia-50  cursor-pointer hover:  `}
            />
          </span>

          <span title="Save">
            <Save
              size={34}
              onClick={() => onSave({ ...formData, features: selected })}
              className={` rounded-lg disabled:cursor-not-allowed   cursor-pointer p-1 hover:bg-fuchsia-50

            }`}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
