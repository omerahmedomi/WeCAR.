import React from "react";
import { Navigate } from "react-router-dom";
import { useGlobal } from "../../GlobalContext";
import {Loader} from 'lucide-react'

const AdminRoute = ({children }) => {

    const { user, isLoading } = useGlobal();

    if (isLoading) {
      return <div className="flex justify-center items-center h-svh">
        <Loader/>
      </div>; 
    }

    if (!user) {
      return <Navigate to="/sign-up" replace />;
    }

    if (user.role == "user" ) {
      return <Navigate to="/" replace />;
    }

    return children; 
};

export default AdminRoute;
