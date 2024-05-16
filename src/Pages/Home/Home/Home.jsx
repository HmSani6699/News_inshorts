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
      <div className="pt-[110px]">
        <div className="bg-[#f44336] text-white min-h-[60px] lg:flex items-center justify-between lg:px-[35px] py-[20px] lg:py-[0px] max-w-[965px] mx-auto">
          <p className="text-center text-[14px]">
            For the best experience use{" "}
            <span className="font-semibold">Inshorts</span> app on your
            smartphone
          </p>
          <div className="flex justify-center lg:justify-start lg:mt-[0px] mt-[15px] gap-[20px]">
            <img className="h-[40px]" src={appStore} alt="" />
            <img className="h-[40px]" src={playStore} alt="" />
          </div>
        </div>
      </div>

      {/* Cart content */}
      <div className="my-[40px] max-w-[890px] mx-auto">
        {allCart?.map((item) => (
          <Cart />
        ))}
      </div>

      <div className=" flex justify-center my-[50px]">
        <button className=" shadow-xl border py-[3px] px-[30px] text-[16px]">
          Lead More
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
