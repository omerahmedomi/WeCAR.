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
import { apiBase } from "../../data";

export default function Users() {
  const [users, setUsers] = useState([
    // { id: 1, name: "John Doe", email: "john@example.com" },
  ]);

  const [error, setError] = useState("");
  const [searchText, setSearchText] = useState("");

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
      const response = await axios.delete(apiBase + `/users/${id}`, {
        withCredentials: true,
      });
      console.log(response);
      fetchUsers();
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  const [isLoading, setIsLoading] = useState(false);

  const dataArray = users.map((user) => ({
    column1: user._id,
    column2: user.firstName + " " + user.lastName,
    column3: user.email,
    column4: user.role,
    // column5: user.returnDate.split("T")[0],
    // column6: user.status,
    id: user._id,
  }));

  useEffect(() => {
    fetchUsers();
  }, []);

  const updateRole = async (id, value) => {
    try {
      const response = await axios.put(
        apiBase + `/users/role/${id}`,
        { role: value },
        { withCredentials: true }
      );
      console.log(response);
      fetchUsers();
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
    }
  };

  const CustomRoleEditor = ({ column, rowKeyValue, value }) => {
    const table = useTableInstance();

    const [editorValue, setValue] = useState(value);
    return (
      <div>
        <select
          className="dark:bg-gray-300"
          autoFocus={true}
          defaultValue={editorValue}
          onBlur={() => {
            //
            value != editorValue && updateRole(rowKeyValue, editorValue);
            table.closeEditor(rowKeyValue, column.key);
          }}
          onChange={(event) => {
            setValue(event.currentTarget.value);
          }}
        >
          <option value={"user"}>User</option>
          <option value={"admin"}>Admin</option>
          <option value={"super admin"}>Super Admin</option>
        </select>
      </div>
    );
  };

  const DeleteRow = ({ dispatch, rowKeyValue }) => {
    return (
      <Trash
        onClick={() => deleteUser(rowKeyValue)}
        className="size-6 transition-all rounded-full p-1 hover:bg-gray-200 hover:cursor-pointer dark:hover:bg-gray-500"
      />
    );
  };
  return (
    <div className="font-eczar">
      <h1 className="text-xl font-bold ">Users</h1>
      <p className="error-message text-sm text-red-600 h-2 mb-4">{error}</p>
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
            isEditable: false,
          },
          {
            key: "column2",
            title: "Name",
            dataType: DataType.String,
            isEditable: false,
          },
          {
            key: "column3",
            title: "Email",
            dataType: DataType.String,
            isEditable: false,
          },
          {
            key: "column4",
            title: "Role",
            dataType: DataType.String,
          },
          {
            key: ":delete",
            width: 70,
            style: { textAlign: "center" },
            isEditable: false,
          },
        ]}
        editingMode={EditingMode.Cell}
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
          cellEditor: {
            content: (props) => {
              switch (props.column.key) {
                // case "passed":
                //   return <CustomLookupEditor {...props} />;
                case "column4":
                  return <CustomRoleEditor {...props} />;
              }
            },
          },
        }}
      />
    </div>
  );
}
