// src/pages/Cars.jsx
import React, { useState, useEffect } from "react";
// import Table from "../components/Table";
import axios from "axios";
import CarModal from "../components/CarModal";
import {
  DataType,
  EditingMode,
  SortingMode,
  PagingPosition,
  ActionType,
} from "ka-table/enums";
import { Table, useTable, useTableInstance } from "ka-table";
import { Edit, PlusCircle, Trash } from "lucide-react";
import { apiBase } from "../../data";

export default function Cars() {
  const [cars, setCars] = useState([
    // { id: 1, name: "Toyota", model: "Corolla",year:2000,transmission:"auto",fuelType:"electric",mileage:85,doors:2,seats:2,pricePerDayInK:15,luggageCapacity:300,color:"Red",available:false },
  ]);
  const [error, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  const [searchText, setSearchText] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const dataArray = cars.map((car) => ({
    column1: car._id,
    column2: car.name + " " + car.model,
    column3: car.available,

    id: car._id,
  }));

  const fetchCars = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(apiBase + `/cars`);
      console.log(response);
      setCars(response.data.cars);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const addCar = async (data, images) => {
    try {
      console.log("DATA", data, "Images", images);
      // Add all text fields

      const fd = new FormData();

      // Keep your car object intact by sending it as JSON
      fd.append("car", JSON.stringify(data));

      // Add images for Multer
      images?.forEach((file) => fd.append("images", file));

      console.log("FormData contents:");
      for (let [key, value] of fd.entries()) {
        console.log(key, value);
      }

      const response = await axios.post(
        apiBase + `/cars`,
        fd,
        {
          withCredentials: true,
        }
      );

      console.log(response);
      fetchCars();
      setModalOpen(false);
    } catch (error) {
      console.log("Error adding car:", error);
      setError(error.response?.data?.error || error.message);
    }
  };

  const updateCar = async (data) => {
    try {
      const response = await axios.put(apiBase + `/cars/${data._id}`, {
        car: data,
      });
      console.log(response);
      fetchCars();
      setModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCar = async (id) => {
    try {
      const response = await axios.delete(apiBase + `/cars/${id}`);
      console.log(response);
      fetchCars();
    } catch (error) {
      console.log(error);
    }
  };

  // const DeleteRow = ({  rowKeyValue }) => {
  //   return (
  //     <Trash
  //       onClick={() => deleteCar(rowKeyValue)}
  //       className="size-6 transition-all rounded-full p-1 hover:bg-gray-200 hover:cursor-pointer"
  //     />
  //   );
  // };
  const handleSave = (data, images) => {
    if (data._id) {
      updateCar(data, images);
    } else {
      addCar(data, images);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div className="font-eczar">
      <h1 className="text-xl font-bold mb-4">Cars</h1>
      <div className="flex gap-x-2 mb-2">
        <PlusCircle
          onClick={() => {
            setEditing(null);
            setModalOpen(true);
          }}
          className="hover:bg-gray-200 dark:hover:bg-gray-900 rounded-full p-1 transition-all text-gray-700 dark:text-gray-400 hover:cursor-pointer"
          size={30}
        />
        <input
          type="search"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.currentTarget.value);
          }}
          className="ring focus:outline-none focus:ring-2 ring-gray-400 rounded-md caret-gray-500  px-2 py-0.5 font-eczar "
          placeholder="Search for cars"
        />
      </div>
      <Table
        // columns={["_id", "name", "model", "available"]}
        // data={cars}
        // onEdit={(row) => {
        //   setEditing(row);
        //   setModalOpen(true);
        // }}
        // onDelete={(row) => deleteCar(row._id)}
        columns={[
          {
            key: "column1",
            title: "Car ID",
            dataType: DataType.String,
          },
          {
            key: "column2",
            title: "Name",
            dataType: DataType.String,
          },
          {
            key: "column3",
            title: "Available",
            dataType: DataType.Boolean,
          },
          {
            key: ":delete",
            width: 70,
            style: { textAlign: "center" },
            isEditable: false,
          },
          {
            key: ":edit",
            width: 70,
            style: { textAlign: "center" },
          },
        ]}
        data={dataArray}
        rowKeyField="id"
        childComponents={{
          cellText: {
            content: (props) => {
              switch (props.column.key) {
                case ":delete":
                  return (
                    <Trash
                      onClick={() => {
                        console.log("Deleting car with id:", props.rowKeyValue);
                        deleteCar(props.rowKeyValue);
                      }}
                      className="size-6 transition-all rounded-full p-1 hover:bg-gray-200 hover:cursor-pointer dark:hover:bg-gray-500"
                    />
                  );
                case ":edit":
                  return (
                    <Edit
                      size={23}
                      onClick={() => {
                        const carToEdit = cars.find(
                          (car) => car._id == props.rowKeyValue
                        );
                        console.log(carToEdit);
                        setEditing(carToEdit);
                        setModalOpen(true);
                      }}
                      className="p-1 hover:bg-gray-200 hover:cursor-pointer dark:hover:bg-gray-500"
                    />
                  );
              }
            },
          },
        }}
        loading={{ enabled: isLoading }}
        searchText={searchText}
        noData={{
          text: "No Data Found",
        }}
        paging={{
          enabled: true,
          pageIndex: 0,
          pageSize: 10,
          pageSizes: [5, 10, 15],
          position: PagingPosition.Bottom,
        }}
      />
      <CarModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false), setError("");
        }}
        onSave={handleSave}
        initialData={editing}
        error={error}
        setError={setError}
        // fields={["name", "model"]}
      />
    </div>
  );
}
