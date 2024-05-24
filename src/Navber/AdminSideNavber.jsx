import React from "react";
import logo from "../assets/images/logo_footer.png";
import { Link, useLocation } from "react-router-dom";
import { MdPostAdd } from "react-icons/md";
import Navlist from "../component/Navlist";

const AdminSideNavber = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div className="">
      <div className="pl-[20px] border-b border-b-gray-500 py-[10px]">
        <img className="w-[170px]" src={logo} alt="" />
      </div>
      {/* Navn list  */}
      <div className=" mt-[50px]">
        <Navlist
          name="Dashboard"
          url={"/admin/dashboard"}
          Icon={MdPostAdd}
          pathname={location?.pathname}
        />

        <Navlist
          name="Add Post"
          url={"/admin/addPost"}
          Icon={MdPostAdd}
          pathname={location?.pathname}
        />
      </div>
    </div>
  );
};

export default AdminSideNavber;
