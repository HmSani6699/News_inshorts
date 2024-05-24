import React from "react";
import logo from "../assets/images/logo_footer.png";
import { Link } from "react-router-dom";

const AdminNavber = () => {
  return (
    <div className="pt-[20px]">
      <div className="pl-[20px]">
        <img className="w-[170px]" src={logo} alt="" />
      </div>
      {/* Navn list  */}
      <div className=" mt-[50px]">
        <Link className="block bg-white py-[12px] pl-[20px]" to="/addPost">
          Add Post
        </Link>
      </div>
    </div>
  );
};

export default AdminNavber;
