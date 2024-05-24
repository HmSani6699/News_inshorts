import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavber from "../Navber/AdminNavber";

const AdminLayout = () => {
  return (
    <div className="flex">
      {/* Left side */}
      <div className="w-[250px] bg-[#364756] min-h-screen fixed">
        <AdminNavber />
      </div>

      <div className="pl-[300px]">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
