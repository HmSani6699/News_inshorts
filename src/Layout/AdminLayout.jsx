import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavber from "../Navber/AdminNavber";
import AdminSideNavber from "../Navber/AdminSideNavber";

const AdminLayout = () => {
  return (
    <div className="flex">
      {/* Left side */}
      <div className="w-[250px] bg-[#364756] min-h-screen fixed">
        <AdminSideNavber />
      </div>

      <div className="pl-[250px]  w-full">
        <AdminNavber />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
