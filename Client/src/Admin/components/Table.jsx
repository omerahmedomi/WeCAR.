// src/components/Table.jsx
import React from "react";

export default function Table({ columns, data, onEdit, onDelete }) {
  return (
    <table className="w-full border-collapse bg-white shadow-md rounded-lg">
      <thead className="bg-gray-200">
        <tr>
          {columns.map((col) => (
            <th key={col} className="p-2 border text-left">
              {col}
            </th>
          ))}
          <th className="p-2 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="hover:bg-gray-50">
            {columns.map((col) => (
              <td key={col} className="p-2 border">
                {col=='available' ? String(row[col]):row[col]}
              </td>
            ))}
            <td className="p-2 border space-x-2">
              <button
                onClick={() => onEdit(row)}
                className={`px-2 py-1 bg-blue-500 text-white rounded disabled:bg-gray-400 disabled:cursor-not-allowed`}
                disabled={row.email}
              >
                Edit 
              </button>
              <button
                onClick={() => onDelete(row)}
                className="px-2 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
