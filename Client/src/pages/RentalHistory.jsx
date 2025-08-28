import React, { useEffect, useState } from "react";
import axios from "axios";
import { useGlobal } from "../GlobalContext";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Loader } from "lucide-react";
import "ka-table/style.css";
import { Table } from "ka-table";
import { DataType, EditingMode, SortingMode } from "ka-table/enums";
import { BeatLoader } from "react-spinners";

const RentalHistory = () => {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [loading, SetLoading] = useState(false);

  const { user, isLoading } = useGlobal();

  console.log("From orders", user);

  if (!isLoading && !user) {
    navigate("/sign-up", { replace: true });
    // return null;
  }



  // if (isLoading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <p className="text-xl font-eczar">
  //         <Loader />
  //       </p>
  //     </div>
  //   );
  // }

  const apiBase = "http://localhost:5500";

  const fetchUserOrders = async (id) => {
    try {
      SetLoading(true);
      const response = await axios.get(apiBase + `/orders/${id}`);
      console.log(response);
      setOrders(response.data.userOrders);
      console.log(orders);
    } catch (error) {
      console.log(error);
    } finally {
      SetLoading(false);
    }
  };

  const dataArray = orders.map((order, index) => ({
    column1: order._id.slice(0,5) +' '+order._id.slice(5,10)+' '+order._id.slice(10,15)+' '+order._id.slice(15),
    column2: order.car.name + " " + order.car.model,
    column3: order.pickUpDate.split('T')[0],
    column4: order.returnDate.split('T')[0],
    column5: order.status,
    id: index,
  }));
  
    useEffect(() => {
      if (user?._id) {
        fetchUserOrders(user._id);
      }
    }, [user]);
  return (
    <div>
      <Header />
      <main className="pt-17 ">
        {loading || isLoading ? (
          <span className="flex justify-center items-center mt-4">
            <BeatLoader size={10} color="gray" />
          </span>
        ) : orders?.length   ? (
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
              { key: "column5", title: "Status", dataType: DataType.String },
            ]}
            data={dataArray}
            // editingMode={EditingMode.Cell}
            rowKeyField={"id"}
            sortingMode={SortingMode.Single}
          />
        ) : (
          <p className="text-center text-gray-600 font-eczar">No Orders</p>
        )}
      </main>
    </div>
  );
};

export default RentalHistory;
