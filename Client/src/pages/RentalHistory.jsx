import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useGlobal } from "../GlobalContext";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Loader } from "lucide-react";
import "ka-table/style.css";
import { Table } from "ka-table";
import { DataType, EditingMode, SortingMode } from "ka-table/enums";
import { BeatLoader } from "react-spinners";
import { Capitalize } from "./RentalPage";
import { apiBase, dayDiff } from "../data";
import Footer from "../components/Footer";

const RentalHistory = () => {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const { user, isLoading } = useGlobal();

  // --- fetch function (defined before useEffect)
  const fetchUserOrders = useCallback(async (id) => {
    if (!id) return; // extra safety
    try {
      setLoading(true);
      const response = await axios.get(`${apiBase}/orders/${id}`, {
        withCredentials: true,
      });
      setOrders(response.data.userOrders || []);
    } catch (error) {
      console.error("fetchUserOrders error:", error);
      setOrders([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Redirect only after auth check finishes and user is explicitly null
  useEffect(() => {
    if (!isLoading && user === null) {
      navigate("/sign-up", { replace: true });
    }
  }, [isLoading, user, navigate]);

  // Fetch orders when we have a confirmed user id and auth check finished.
  useEffect(() => {
    // Guard: wait for auth check to finish and ensure a proper id exists
    if (!isLoading && user && (user._id || user.id)) {
      // prefer _id if available, fall back to id
      const id = user._id || user.id;
      fetchUserOrders(id);
    }
  }, [isLoading, user, fetchUserOrders]);

  // prevent flicker / ensure top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Render gating: while auth check is running (or user undefined), show loader
  if (isLoading || typeof user === "undefined") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader className="animate-spin" />
      </div>
    );
  }

  // If user is null we are redirecting (useEffect). Render nothing to avoid flicker.
  if (user === null) return null;

  const dataArray = orders.map((order, index) => ({
    column1:
      order._id.slice(0, 5) +
      " " +
      order._id.slice(5, 10) +
      " " +
      order._id.slice(10, 15) +
      " " +
      order._id.slice(15),
    column2: Capitalize(order.car.name) + " " + Capitalize(order.car.model),
    column3: order.pickUpDate.split("T")[0],
    column4: order.returnDate.split("T")[0],
    column5: order.price * 1000 + " ETB",
    column6:
      order.price ==
      order.car.pricePerDayInK *
        dayDiff(order.pickUpDate.split("T")[0], order.returnDate.split("T")[0])
        ? "Self"
        : "Chauffeur",
    column7: Capitalize(order.status),
    id: index,
  }));

  return (
    <div>
      <Header />
      <main className="pt-17 min-h-svh">
        {loading || isLoading ? (
          <span className="flex justify-center items-center mt-4">
            <BeatLoader size={10} color="gray" />
          </span>
        ) : orders?.length ? (
          <Table
            columns={[
              {
                key: "column1",
                title: "Order ID",
                dataType: DataType.String,
              },
              {
                key: "column2",
                title: "Rented Car",
                dataType: DataType.String,
              },
              {
                key: "column3",
                title: "Pick Up Date",
                dataType: DataType.String,
              },
              {
                key: "column4",
                title: "Return Date",
                dataType: DataType.String,
              },
              {
                key: "column5",
                title: "Total Price",
                dataType: DataType.String,
              },
              {
                key: "column6",
                title: "Drive Type",
                dataType: DataType.String,
              },
              { key: "column7", title: "Status", dataType: DataType.String },
            ]}
            data={dataArray}
            // editingMode={EditingMode.Cell}
            rowKeyField={"id"}
            sortingMode={SortingMode.Single}
          />
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-100 font-eczar">
            No Orders
          </p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default RentalHistory;
