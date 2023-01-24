import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLoggedin } from "./auth";

const PrivateRoute = () => {
  if (isLoggedin()) {
    return <Outlet />;
  } else {
    return <Navigate to={"/"} />;
  }
};

export default PrivateRoute;
