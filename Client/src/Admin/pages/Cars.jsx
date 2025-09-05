import React, { useState, useEffect } from "react";
import axios from "axios";
import CarModal from "../components/CarModal";
import { DataType, PagingPosition } from "ka-table/enums";
import { Table } from "ka-table";
import { Edit, PlusCircle, Trash } from "lucide-react";
import { apiBase } from "../../data";

export default function Cars() {
  const [cars, setCars] = useState([]);
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
      
      setCars(response.data.cars);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const addCar = async (data, images) => {
    try {
      const fd = new FormData();
      fd.append("car", JSON.stringify(data));
      images?.forEach((file) => fd.append("images", file));

      await axios.post(apiBase + `/cars`, fd, {
        withCredentials: true,
      });

      fetchCars();
      setModalOpen(false);
    } catch (error) {
      console.log("Error adding car:", error);
      setError(error.response?.data?.error || error.message);
    }
  };

  const updateCar = async (data) => {
    try {
     await axios.put(apiBase + `/cars/${data._id}`, {
        car: data,
      });

      
      fetchCars();
      setModalOpen(false);
    } catch (error) {
      console.log(error);
      setError(error.response?.data?.error || error.message);
    }
  };

  const deleteCar = async (id) => {
    try {
      await axios.delete(apiBase + `/cars/${id}`);
     
      fetchCars();
    } catch (error) {
      console.log(error);
    }
  };

 
  const handleSave = (data, images) => {
    if (data._id) {
      updateCar(data);
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
