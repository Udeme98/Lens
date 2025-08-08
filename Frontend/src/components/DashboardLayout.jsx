import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";

const DashboardLayout = () => {
  return (
    <div className="bg-zinc-950 font-sans min-h-screen">
      <SideNav />
      <div className="ml-64 p-8 text-gray-200 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};
export default DashboardLayout;
