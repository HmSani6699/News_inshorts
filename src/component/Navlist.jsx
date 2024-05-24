import React from "react";
import { Link } from "react-router-dom";

const Navlist = ({ name, url, Icon, pathname }) => {
  return (
    <div
      className={`flex items-center gap-[10px] w-full  py-[12px] mb-[10px] pl-[20px] ${
        pathname === url ? "bg-white " : ""
      }`}
    >
      <Icon
        className={`text-[25px]  ${
          pathname === url ? "text-[#1d5276]" : " text-white"
        }`}
      />
      <Link
        className={`inline-block  w-full text-[15px]   ${
          pathname === url ? "text-[#1d5276]" : " text-white"
        }`}
        to={url}
      >
        {name}
      </Link>
    </div>
  );
};

export default Navlist;
