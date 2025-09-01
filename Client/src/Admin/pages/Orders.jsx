// src/pages/Orders.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  DataType,
  EditingMode,
  SortingMode,
  PagingPosition,
  ActionType,
} from "ka-table/enums";
import { Table, useTable, useTableInstance } from "ka-table";
// import { updateCellValue, deleteRow } from "ka-table/actionCreators";
// // import "./CustomEditorDemo.scss";
// import { ICellEditorProps } from "ka-table/props";
import {
  Delete,
  DeleteIcon,
  LucideDelete,
  RemoveFormattingIcon,
  Trash,
} from "lucide-react";

export default function Orders() {
  const [orders, setOrders] = useState([
    // { id: 1, user: "John Doe", car: "Toyota Corolla" },
  ]);
  const [searchText,setSearchText] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [editableCells, setEditableCells] = useState([]); // empty array
  const dataArray = orders.map((order, index) => ({
    column1: order._id,
    column2: order.user?.firstName + " " + order.user?.lastName,
    column3: order.car?.name + " " + order.car?.model,
    column4: order?.pickUpDate.split("T")[0],
    column5: order?.returnDate.split("T")[0],
    column6: order?.price,
    column7: order?.price === order.car?.pricePerDayInK ? "self" : "chauffeur",
    column8: order?.status,
    id: order._id,
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
      setIsLoading(true);
      const response = await axios.get("http://localhost:5500/orders");
      console.log(response);
      setOrders(response.data.orders);
    
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);
  const updateStatus = async (id, value) => {
    try {
      const response = await axios.put(`http://localhost:5500/orders/status/${id}`, {
        status: value,
      });
      console.log(response);
      fetchOrders();
    } catch (error) {
      console.log(error);
    }
  };
  const deleteOrder = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5500/orders/${id}`);
      console.log(response);
      fetchOrders();
    } catch (error) {
      console.log(error);
    }
  };
  const table = useTable({
    // not needed if using custom editor
    onDispatch: (action) => {
      if (action.type == ActionType.UpdateCellValue) {
        console.log("From");
        updateStatus(action.rowKeyValue, action.value);
      }
    },
  });

  const CustomEditor = ({ column, rowKeyValue, value }) => {
    const table = useTableInstance();
    const close = () => {
      table.closeEditor(rowKeyValue, column.key);
    };
    const [editorValue, setValue] = useState(value);
    return (
      <div>
        <select
          className="form-control"
          autoFocus={true}
          defaultValue={editorValue}
          onBlur={() => {
            //
            value != editorValue && updateStatus(rowKeyValue, editorValue);
            table.closeEditor(rowKeyValue, column.key);
          }}
          onChange={(event) => {
            setValue(event.currentTarget.value);
          }}
        >
          <option value={"submitted"}>Submitted</option>
          <option value={"in use"}>In Use</option>
          <option value={"completed"}>Completed</option>
        </select>
      </div>
    );
  };

  const DeleteRow = ({ dispatch, rowKeyValue }) => {
    return (
      <Trash
        onClick={() => deleteOrder(rowKeyValue)}
        className="size-6 transition-all rounded-full p-1 hover:bg-gray-200 hover:cursor-pointer"
      />
    );
  };
  return (
    <div className="font-eczar">
      <h1 className="text-xl font-bold mb-4">Orders</h1>
      <input
        type="search"
        value={searchText}
        onChange={(event) => {
          setSearchText(event.currentTarget.value);
        }}
        className="ring focus:outline-none focus:ring-2 ring-gray-400 rounded-md caret-gray-500  px-2 py-0.5 font-eczar mb-3"
        placeholder="Search for cars"
      />
      <Table
        // table={table}
        columns={[
          {
            key: "column1",
            title: "Order ID",
            dataType: DataType.String,
            width: "",
            isEditable: false,
            style: { wordBreak: "break-word" },
          },
          {
            key: "column2",
            title: "Orderd by",
            dataType: DataType.String,
            isEditable: false,
          },
          {
            key: "column3",
            title: "Car Ordered",
            dataType: DataType.String,
            isEditable: false,
          },
          {
            key: "column4",
            title: "Pick-Up Date",
            dataType: DataType.String,
            isEditable: false,
          },
          {
            key: "column5",
            title: "Return Date",
            dataType: DataType.String,
            isEditable: false,
          },
          {
            key: "column6",
            title: "Total Price (K)",
            dataType: DataType.Number,
            isEditable: false,
            style: { textAlign: "center" },
          },
          {
            key: "column7",
            title: "Drive Type",
            dataType: DataType.String,
            isEditable: false,
            style: { textAlign: "center" },
          },

          {
            key: "column8",
            title: "Status",
          },
          {
            key: ":delete",
            width: 70,
            style: { textAlign: "center" },
            isEditable: false,
          },
        ]}
        data={dataArray}
        editingMode={EditingMode.Cell}
        rowKeyField={"id"}
        loading={{ enabled: isLoading }}
        noData={{
          text: "No Data Found",
        }}
        searchText={searchText}
        paging={{
          enabled: true,
          pageIndex: 0,
          pageSize: 10,
          pageSizes: [5, 10, 15],
          position: PagingPosition.Bottom,
        }}
        childComponents={{
          // table: {
          //   elementAttributes: () => ({
          //     className: "custom-editor-demo-table",
          //   }),
          // },
          cellEditor: {
            content: (props) => {
              switch (props.column.key) {
                // case "passed":
                //   return <CustomLookupEditor {...props} />;
                case "column8":
                  return <CustomEditor {...props} />;
              }
            },
          },
          cellText: {
            content: (props) => {
              switch (props.column.key) {
                case ":delete":
                  return <DeleteRow {...props} />;
              }
            },
          },
        }}

        // editableCells={[
        //   {
        //     columnKey: "column1",
        //     rowKeyValue: 1,
        //   },
        // ]}
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
