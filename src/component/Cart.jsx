import React from "react";
import "./Cart.css";

import cart_img from "../assets/images/cart_img.jpg";

const Cart = () => {
  return (
    <div className="cart-container lg:h-[285px] lg:flex gap-[20px] p-[10px] rounded-md mb-[30px]">
      <div className="lg:w-[520px]">
        <img className="w-full h-full rounded-[6px]" src={cart_img} alt="" />
      </div>
      <div className="w-full">
        <h2 className="text-[#44444d] text-[22px] mt-[20px] font-[300]">
          Inshorts featured in Google's Best Apps of 2015
        </h2>
        <p className="text-[#808290] text-[12px] lg:text-[16px]">
          <span className="text-[#2a2a33] text-[12px] font-semibold">
            short
          </span>
          Kabir Khan / 10:52 pm on Saturday, 5 December, 2015
        </p>
        <p className="text-[#828289] text-[16px] mt-[20px]">
          News aggregator app Inshorts has featured in the Google Play Store's
          'Best Apps of 2015' list. The list features Google's selection of 50
          mobile applications across apps, games and entertainment categories in
          the Play Store. Available on both Android and iOS, Inshorts offers
          stories summarised in 60 words or less for quick consumption.
        </p>
        <p className="mt-[25px] text-[13px]">read more at Goole Play</p>
      </div>
    </div>
  );
};

export default Cart;
