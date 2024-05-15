import React from "react";
import Navber from "../../../Navber/Navber";
import appStore from "../../../assets/images/appstore.png";
import playStore from "../../../assets/images/playstore.png";

const Home = () => {
  return (
    <div>
      <Navber />
      {/* Home content */}
      <div className="pt-[140px]">
        <div className="bg-[#f44336] text-white h-[70px] flex items-center justify-between px-[40px] max-w-[1200px] mx-auto">
          <p className="">
            For the best experience use{" "}
            <span className="font-semibold">Inshorts</span> app on your
            smartphone
          </p>
          <div className="flex gap-[20px]">
            <img className="h-[45px]" src={appStore} alt="" />
            <img className="h-[45px]" src={playStore} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
