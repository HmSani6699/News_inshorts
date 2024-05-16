import React from "react";
import logo from "../assets/images/logo_inshorts.png";
import menu from "../assets/images//menu.svg";

const Navber = () => {
  return (
    <div className="fixed flex items-center h-[72px] shadow-lg w-full py-[20px] px-[30px] bg-white">
      <div className="flex items-center gap-[10px] w-[200px]">
        <img className="w-[30px]" src={menu} alt="" />
        <h2>Menu</h2>
      </div>
      <div className="flex  justify-center w-full">
        <img className="h-[56px] lg:-ml-[200px]" src={logo} alt="" />
      </div>
    </div>
  );
};

export default Navber;
