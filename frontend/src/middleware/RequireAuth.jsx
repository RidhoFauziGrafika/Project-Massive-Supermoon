import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  // console.log("allowedRoles", allowedRoles);

  const hasAccess =
    auth?.roles &&
    (Array.isArray(allowedRoles)
      ? allowedRoles.map(String).includes(auth.roles.toString())
      : false);

  return hasAccess ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

// Example usage:
// <RequireAuth allowedRoles={[ROLES.CLIENT]} />

export default RequireAuth;
