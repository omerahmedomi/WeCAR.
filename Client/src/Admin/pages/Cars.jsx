// src/pages/Cars.jsx
import React, { useState,useEffect } from "react";
import Table from "../components/Table";
import Modal from "../components/Modal";
import axios from "axios";



export default function Cars() {
  const [cars, setCars] = useState([
    // { id: 1, name: "Toyota", model: "Corolla",year:2000,transmission:"auto",fuelType:"electric",mileage:85,doors:2,seats:2,pricePerDayInK:15,luggageCapacity:300,color:"Red",available:false },
  ]);
  const [error,setError]=useState('')
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
     fetchCars()
     setModalOpen(false)
   } catch (error) {
     console.log("Error adding car:",error);
     setError(error.response.data.error)
   }
 };

 const updateCar = async (data)=>{
  try {
    const response = await axios.put(apiBase + `/cars/${data._id}`, {car:data});
    console.log(response);
    fetchCars()
    setModalOpen(false)
  } catch (error) {
    console.log(error);
  }
 }

 const deleteCar = async (id) => {
   try {
     const response = await axios.delete(apiBase + `/cars/${id}`);
     console.log(response);
     fetchCars()
   } catch (error) {
     console.log(error);
   }
 };
  const handleSave = (data) => {
    if (data._id) {
      updateCar(data)
    } else {
      addCar(data);
    }
     
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
        columns={["_id", "name", "model","available"]}
        data={cars}
        onEdit={(row) => {
          setEditing(row);
          setModalOpen(true);
        }}
        onDelete={(row) => deleteCar(row._id)}
      />
      <Modal
        isOpen={modalOpen}
        onClose={() => {setModalOpen(false) ,setError('')}}
        onSave={handleSave}
        initialData={editing}
        error={error}
        setError={setError}
        // fields={["name", "model"]}
      />
    </div>
  );
}
