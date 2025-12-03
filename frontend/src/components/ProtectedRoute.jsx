import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedRoles}) {
    const { user } = useContext(AuthContext);

    // Check if user is authenticated
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // Check if user has the required role
    if (allowedRoles && !allowedRoles.includes(user.role)) {
        return <Navigate to="/unauthorized" replace />;
    }

    return children; // Render the protected component
}