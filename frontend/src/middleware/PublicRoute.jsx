import React from "react";
import { Route, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PublicRoute = ({ element, redirectTo = "/" }) => {
  const { auth } = useAuth();

  console.log("auth:", auth);

  return auth.user ? <Navigate to={redirectTo} replace /> : element;
};

export default PublicRoute;
