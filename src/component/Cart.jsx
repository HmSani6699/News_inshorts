import React from "react";
import "./Cart.css";

import cart_img from "../assets/images/cart_img.jpg";
import { Box, Button } from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ShareIcon from "@mui/icons-material/Share";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Cart = () => {
  const description = ` News aggregator app Inshorts has featured in the Google Play Store's
          'Best Apps of 2015' list. The list features Google's selection of 50
          mobile applications across apps, games and entertainment categories in
          the Play Store. Available on both Android and iOS,`;

  const textColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--text-color"
  );

  const { t } = useTranslation();

  return (
    <div className="cart-container lg:h-[285px] lg:flex gap-[20px] p-[10px] rounded-md mb-[30px]">
      <div className="lg:w-[520px]">
        <img className="w-full h-full rounded-[6px]" src={cart_img} alt="" />
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h2
            className={`text-[${textColor}] text-[22px] mt-[20px] font-[300]`}
          >
            Inshorts featured in Google's Best
          </h2>
          <div className="flex gap-[20px]">
            <BookmarkBorderOutlinedIcon
              sx={{ color: "#828289", fontSize: "23px" }}
            />
            <ShareIcon sx={{ color: "#828289", fontSize: "20px" }} />
          </div>
        </div>

        <p className={`text-[${textColor}] text-[12px] lg:text-[16px]`}>
          <span
            className={` text-[${textColor}]  text-[12px] font-semibold pr-[4px] `}
          >
            short
          </span>
          Kabir Khan / 10:52 pm on Saturday, 5 December, 2015
        </p>
        <p className={` text-[#858586] text-[15px] mt-[20px]`}>
          {description}
          {/* <span
            className={`text-[14px] text-[${textColor}]-black cursor-pointer`}
          >
            {t("see_more")}
          </span> */}
        </p>
        {/* <Box
          sx={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            marginTop: "25px",
          }}
        >
          <BookmarkBorderOutlinedIcon
            sx={{ color: "#828289", fontSize: "23px" }}
          />
          <DescriptionOutlinedIcon
            sx={{ color: "#828289", fontSize: "20px" }}
          />
          <RemoveRedEyeOutlinedIcon
            sx={{ color: "#828289", fontSize: "20px" }}
          />
          <ShareIcon sx={{ color: "#828289", fontSize: "20px" }} />
        </Box> */}

        <div className=" mt-[40px]">
          <Link className="text-[14px]">read more at Goole play</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
