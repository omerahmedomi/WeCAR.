import React from "react";
import { Navigate } from "react-router-dom";
import { useGlobal } from "../../GlobalContext";
import {Loader} from 'lucide-react'

const AdminRoute = ({children }) => {

    const { user, isLoading } = useGlobal();

    if (isLoading) {
      // Wait for user info to load
      return <div className="flex justify-center items-center h-svh">
        <Loader/>
      </div>; // or a spinner
    }

    if (!user) {
      // Not logged in
      return <Navigate to="/sign-up" replace />;
    }

    if (user.role == "user" ) {
      // Logged in but not admin
      return <Navigate to="/" replace />;
    }

    return children; 
};

export default AdminRoute;
