import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { user, loadingAuth } = useContext(AuthContext);

    if (loadingAuth) return <div>Loading...</div>;

    return user ? children : <Navigate to="/login" replace />;

};

export default ProtectedRoute;