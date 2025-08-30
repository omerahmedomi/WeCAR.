// src/pages/Users.jsx
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
import { Trash } from "lucide-react";

export default function Users() {
  const [users, setUsers] = useState([
    // { id: 1, name: "John Doe", email: "john@example.com" },
  ]);
 const[searchText,setSearchText] =useState('')
  const apiBase = "http://localhost:5500";

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(apiBase + `/users`);
      console.log(response);
      setUsers(response.data.users);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const deleteUser = async (id) => {
    try {
      // setUsers((prev) => prev.filter((u) => u._id !== id));
      const response = await axios.delete(apiBase + `/users/${id}`);
      console.log(response);
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const [isLoading, setIsLoading] = useState(false);

  const dataArray = users.map((user) => ({
    column1: user._id,
    column2: user.firstName + " " + user.lastName,
    column3: user.email,
    // column4: user.pickUpDate.split("T")[0],
    // column5: user.returnDate.split("T")[0],
    // column6: user.status,
    id: user._id,
  }));

  useEffect(() => {
    fetchUsers();
  }, []);

  const DeleteRow = ({ dispatch, rowKeyValue }) => {
      return (
        <Trash
          onClick={() => deleteUser(rowKeyValue)}
          className="size-6 transition-all rounded-full p-1 hover:bg-gray-200 hover:cursor-pointer"
        />
      );
    };
  return (
    <div className="font-eczar">
      <h1 className="text-xl font-bold mb-4">Users</h1>
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
        columns={[
          {
            key: "column1",
            title: "User ID",
            dataType: DataType.String,
          },
          {
            key: "column2",
            title: "Name",
            dataType: DataType.String,
          },
          {
            key: "column3",
            title: "Email",
            dataType: DataType.String,
          },
          {
            key: ":delete",
            width: 70,
            style: { textAlign: "center" },
          },
        ]}
        data={dataArray}
        loading={{ enabled: isLoading }}
        rowKeyField={"id"}
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
          cellText: {
            content: (props) => {
              switch (props.column.key) {
                case ":delete":
                  return <DeleteRow {...props} />;
              }
            },
          },
        }}
      />
    </div>
  );
}
