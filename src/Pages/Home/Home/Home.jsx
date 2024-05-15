import React from "react";
import Navber from "../../../Navber/Navber";
import appStore from "../../../assets/images/appstore.png";
import playStore from "../../../assets/images/playstore.png";
import Cart from "../../../component/Cart";
import Footer from "../../../Footer/Footer";

const Home = () => {
  const allCart = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <Navber />
      {/* Home app and play sotr  content */}
      <div className="pt-[140px]">
        <div className="bg-[#f44336] text-white min-h-[70px] lg:flex items-center justify-between lg:px-[40px] py-[20px] lg:py-[0px] max-w-[1230px] mx-auto">
          <p className="text-center">
            For the best experience use{" "}
            <span className="font-semibold">Inshorts</span> app on your
            smartphone
          </p>
          <div className="flex justify-center lg:justify-start lg:mt-[0px] mt-[15px] gap-[20px]">
            <img className="h-[45px]" src={appStore} alt="" />
            <img className="h-[45px]" src={playStore} alt="" />
          </div>
        </div>
      </div>

      {/* Cart content */}
      <div className="my-[40px] max-w-[1150px] mx-auto">
        {allCart?.map((item) => (
          <Cart />
        ))}
      </div>

      <div className=" flex justify-center my-[50px]">
        <button className=" shadow-xl border py-[6px] px-[50px] text-[20px]">
          Lead More
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
