import React, { useRef, useState } from "react";
import { Avatar } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import NearMeIcon from "@material-ui/icons/NearMe";
import "./Slider.css";

import cartImg from "../../src/assets/images/cart_img.jpg";
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { PiShareFatBold } from "react-icons/pi";

const Slider = ({ description, like, dislike, share, comment }) => {
  const [subs, setSubs] = useState(false);

  const handleSubscribe = () => {
    setSubs((sub) => !sub);
  };
  return (
    <div className="slider-container rounded-[15px]">
      <div className=" h-[250px]  w-full">
        <img className="rounded-t-[15px] h-full w-full" src={cartImg} alt="" />
      </div>
      <div className="px-[10px]">
        <h2 className="text-[#ffff] text-[22px] my-[10px] font-[300]">
          Inshorts featured in Google's Best Apps of 2015
        </h2>
        <p className="text-[#ffff] text-[12px] lg:text-[16px]">
          <span className="text-[#ffff] text-[12px] font-semibold">short</span>
          Kabir Khan / 10:52 pm on Saturday, 5 December, 2015
        </p>
        <p className="text-white pt-[15px] text-[15px]">
          News aggregator app Inshorts has featured in the Google Play Store's
          'Best Apps of 2015' list. The list features Google's selection of 50
          mobile applications across apps, games and entertainment categories in
          the Play Store. Available on both Android and iOS, Inshorts offers
          stories summarised in 60 words or less for quick consumption.
        </p>
      </div>

      <div className="  absolute bottom-0 mb-[10px] w-full ">
        <div className=" flex justify-center mb-[10px]">
          <div className="border border-[#a8abafb3]  w-[95%]"></div>
        </div>
        <div className="flex justify-around">
          <BiLike className="text-[25px] text-[#a8abaf]" />
          <MdOutlineRemoveRedEye className="text-[28px] text-[#a8abaf]" />
          <FaRegComment className="text-[25px] text-[#a8abaf]" />
          <PiShareFatBold className="text-[25px] text-[#a8abaf]" />
        </div>
      </div>

      <div className="shortsContainer">
        <div className="shortsVideoSideIcons">
          {/* <div className="shortsVideoSideIcon">
            <ThumbUpIcon />
            <p>{like}</p>
          </div> */}

          {/* <div className="shortsVideoSideIcon">
            <ThumbDownIcon />
            <p>{dislike}</p>
          </div> */}
          {/* <div className="shortsVideoSideIcon">
            <InsertCommentIcon />
            <p>{comment}</p>
          </div>

          <div className="shortsVideoSideIcon">
            <NearMeIcon />
            <p>{share}</p>
          </div> */}
        </div>
        {/* <div className="shortsBottom">

          <div className="shortDetails">
            <Avatar
              src={
                "https://lh3.googleusercontent.com/ogw/ADGmqu8BCzU8GejYorGqXeu98A1kfEFYKFT85I3_9KJBzfw=s32-c-mo"
              }
            />
            <p>{channel}</p>
            <button
              style={{
                background: subs ? "red" : "hsla(0,0%,69.4%,.609)",
              }}
              onClick={handleSubscribe}
            >
              {subs ? "SUBSCRIBED" : "SUBSCRIBE"}
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Slider;
