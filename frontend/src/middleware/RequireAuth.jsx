import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PublicRoute from "./PublicRoute";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  return (
    <>
      <PublicRoute element={<Navigate to="/dashboard" replace />} />
      {Array.isArray(auth?.roles) &&
      auth.roles.length > 0 &&
      allowedRoles.some((role) => auth.roles.includes(role)) ? (
        <Outlet />
      ) : (
        <Navigate to="/unauthorized" state={{ from: location }} replace />
      )}
    </>
  );
};

export default RequireAuth;
