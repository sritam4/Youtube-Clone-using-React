import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="mt-12 flex p-3">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
