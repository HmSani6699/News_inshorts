import React from "react";
import { FaUserAlt } from "react-icons/fa";

const AdminNavber = () => {
  return (
    <div className="py-[12px] px-[20px] flex items-center justify-between w-full border-b border-b-gray-500 ">
      <h2 className="text-[27px] font-bold text-[#1d5276]">Welcome to Admin</h2>
      <div className="h-[45px] w-[45px] flex items-center justify-center rounded-full border border-[#000]">
        <FaUserAlt className="text-[25px]" />
      </div>
    </div>
  );
};

export default AdminNavber;
