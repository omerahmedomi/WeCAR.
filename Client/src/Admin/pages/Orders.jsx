// src/pages/Orders.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataType, EditingMode, SortingMode } from "ka-table/enums";
import { Table } from "ka-table";

export default function Orders() {
  const [orders, setOrders] = useState([
    // { id: 1, user: "John Doe", car: "Toyota Corolla" },
  ]);

  const dataArray = orders.map((order, index) => ({
    column1: order._id,
    column2: order.user.firstName + " " + order.user.lastName,
    column3: order.car.name + " " + order.car.model,
    column4: order.pickUpDate.split("T")[0],
    column5: order.returnDate.split("T")[0],
    column6: order.status,
    id: index,
  }));

  const handleSave = (data) => {
    if (data.id) {
      setOrders(orders.map((o) => (o.id === data.id ? data : o)));
    } else {
      data.id = Date.now();
      setOrders([...orders, data]);
    }
    setModalOpen(false);
  };

  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:5500/orders");
      console.log(response);
      setOrders(response.data.orders);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Orders</h1>
      <Table
        columns={[
          {
            key: "column1",
            title: "Order ID",
            dataType: DataType.String,
            width: "200px ",
          },
          { key: "column2", title: "Orderd by", dataType: DataType.String },
          { key: "column3", title: "Car Ordered", dataType: DataType.String },
          { key: "column4", title: "Pick-Up Date", dataType: DataType.String },
          { key: "column5", title: "Return Date", dataType: DataType.String },
          { key: "column6", title: "Status", dataType: DataType.String },
        ]}
        data={dataArray}
        editingMode={EditingMode.Cell}
        rowKeyField={"id"}
        editableCells={[
          {
            columnKey: "column6",
            // rowKeyValue: 1,
          },
        ]}
        // sortingMode={SortingMode.Single}
      />

      {/* <button
        onClick={() => {
          setEditing(null);
          setModalOpen(true);
        }}
        className="mb-4 px-3 py-1 bg-green-500 text-white rounded"
      >
        Add Order
      </button> */}
      {/* <Table
        columns={["_id", `user`, "car"]}
        data={orders}
        onEdit={(row) => {
          setEditing(row);
          setModalOpen(true);
        }}
        onDelete={(row) => setOrders(orders.filter((o) => o.id !== row.id))}
      />
      <OrderModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        initialData={editing}
        fields={["user", "car"]}
      />*/}
    </div>
  );
}
