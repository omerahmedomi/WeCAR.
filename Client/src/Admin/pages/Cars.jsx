// src/pages/Cars.jsx
import React, { useState,useEffect } from "react";
import Table from "../components/Table";
import Modal from "../components/Modal";
import axios from "axios";



export default function Cars() {
  const [cars, setCars] = useState([
    // { id: 1, name: "Toyota", model: "Corolla",year:2000,transmission:"auto",fuelType:"electric",mileage:85,doors:2,seats:2,pricePerDayInK:15,luggageCapacity:300,color:"Red",available:false },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
 const apiBase = "http://localhost:5500";

 const fetchCars = async () => {
   try {
     const response = await axios.get(apiBase + `/cars`);
     console.log(response);
     setCars(response.data.cars);
   } catch (error) {
     console.log(error);
   }
 };

 const addCar = async (data) => {
   try {
     const response = await axios.post(apiBase + `/cars`, {car:data});
     console.log(response);
   } catch (error) {
     console.log(error);
   }
 };

 const updateCar = async ()=>{
  try {
    const response = await axios.put(apiBase + `/cars`, {});
    console.log(response);
  } catch (error) {
    console.log(error);
  }
 }
  const handleSave = (data) => {
    if (data.id) {
      updateCar()
    } else {
      addCar(data);
    }
    setModalOpen(false);
  };

 
    useEffect(() => {
      
      fetchCars()
    }, []);

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
