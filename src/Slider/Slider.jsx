import "./Slider.css";
import cartImg from "../../src/assets/images/cart_img.jpg";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ShareIcon from "@mui/icons-material/Share";
import { Badge, Box, IconButton } from "@mui/material";
import styled from "styled-components";
import { Link } from "react-router-dom";

const RedBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#FF0000", // Custom red color
    color: "#ffff", // Adjust the color as needed
  },
}));

const Slider = () => {
  const description = ` News aggregator app Inshorts has featured in the Google Play Store's
          'Best Apps of 2015' list. The list features Google's selection of 50
          mobile data or it applications across apps, games and entertainment categories in
          the Play Store. Available on both sotro Android and iOS, Inshorts offers
          stories janina summarised in 60 words or less for quick letter pabo kina consumption.
          mobile data or it applications across apps, games and entertainment categories in
          the Play Store. Available on both sotro Android and iOS, Inshorts offers
          stories janina summarised in 60 words or less for quick letter pabo kina consumption.
          mobile data or it applications across apps, games and entertainment categories in
          the Play Store. Available on both sotro Android and iOS, Inshorts offers
          stories janina summarised in 60 words or less for quick letter pabo kina consumption.`;

  const textColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--text-color"
  );

  return (
    <div className="slider-container  pt-[100px] pb-[20px] w-full  flex items-center">
      <div className="border lg:mx-[0px] mx-[10px] border-gray-500 rounded-[15px] shadow-lg   lg:mb-[20px] w-full ">
        <div>
          <div className=" h-[260px] lg:h-[210px] w-full">
            <img
              className="h-full w-full rounded-t-[15px]"
              src={cartImg}
              alt=""
            />
          </div>
          <div className="px-[10px] ">
            <h2
              className={`text-[${textColor}] text-[20px] my-[15px] lg:my-[8px]  font-[300]`}
            >
              Inshorts featured in Google's Apps
            </h2>
            <p className={`text-[${textColor}] text-[12px] lg:text-[14px]`}>
              <span
                className={`text-[${textColor}] text-[15px] lg:text-[13px] font-semibold pr-[3px]`}
              >
                short
              </span>
              Kabir Khan / 10:52 pm on Saturday, 5 December, 2015
            </p>
            <p
              className={`text-[${textColor}] text-[15px]  mt-[10px] lg:mt-[5px]`}
            >
              News aggregator app Inshorts has featured in the Google Play
              Store's 'Best Apps of 2015' list. The list features Google's
              selection of 50 mobile applications across apps, games and
              entertainment categories in the Play Store. Available on both
              Android and iOS, Inshorts offers stories summarised in 60
              {/* <span className="text-[14px]  cursor-pointer">See more</span> */}
            </p>
            <div className=" mt-[20px]  mb-[20px]  flex  items-center justify-between pr-[10px]">
              <Link className="text-[14px]">read more at Goole play</Link>
              <div className="lg:hidden gap-[20px] flex">
                <BookmarkBorderOutlinedIcon
                  sx={{
                    fontSize: "25px",
                    color: "gray",
                  }}
                />
                <div className="flex gap-2">
                  <ShareIcon
                    sx={{
                      fontSize: "25px",
                      color: "gray",
                    }}
                  />
                  <p>10k</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="  absolute bottom-0 mb-[12px] lg:mb-[2px] w-full ">
          <div className=" flex justify-center mb-[10px] lg:mb-[3px]">
            <div className="border border-[#a8abafb3]  w-[95%]"></div>
          </div>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <BookmarkBorderOutlinedIcon
              sx={{ color: "#828289", fontSize: "27px" }}
            />
            <IconButton aria-label="cart">
              <RedBadge badgeContent={2}>
                <DescriptionOutlinedIcon
                  sx={{ color: "#828289", fontSize: "25px" }}
                />
              </RedBadge>
            </IconButton>
            <IconButton aria-label="cart">
              <RedBadge badgeContent={4}>
                <RemoveRedEyeOutlinedIcon
                  sx={{ color: "#828289", fontSize: "25px" }}
                />
              </RedBadge>
            </IconButton>
            <IconButton aria-label="cart">
              <RedBadge badgeContent={6}>
                <ShareIcon sx={{ color: "#828289", fontSize: "25px" }} />
              </RedBadge>
            </IconButton>
          </Box>
        </div> */}
      </div>
      <div className="  lg:ml-[20px] lg:block hidden">
        {/* <BookmarkBorderOutlinedIcon
          sx={{ color: "#828289", fontSize: "23px" }}
        /> */}

        <div className="mb-[15px]">
          <button className="bg-[#403d3d] h-[40px] w-[40px] rounded-full mb-[6px]">
            <BookmarkBorderOutlinedIcon
              sx={{
                fontSize: "23px",
              }}
            />
          </button>
          <p className="text-center">20k</p>
        </div>
        <div className="mb-[15px]">
          <button className="bg-[#403d3d] h-[40px] w-[40px] rounded-full mb-[15px]">
            <ShareIcon
              sx={{
                fontSize: "23px",
              }}
            />
          </button>
          <p className="text-center">50k</p>
        </div>

        {/* <ShareIcon sx={{ color: "#828289", fontSize: "20px" }} /> */}
      </div>
    </div>
  );
};

export default Slider;
