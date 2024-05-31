import "./Slider.css";
import cartImg from "../../src/assets/images/cart_img.jpg";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ShareIcon from "@mui/icons-material/Share";
import { Badge, Box, IconButton } from "@mui/material";
import styled from "styled-components";

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
          stories janina summarised in 60 words or less for quick letter pabo kina consumption.`;
  return (
    <div className="slider-container rounded-[15px]">
      <div className=" h-[210px]  w-full">
        <img className="rounded-t-[15px] h-full w-full" src={cartImg} alt="" />
      </div>
      <div className="px-[10px] ">
        <h2 className="text-[#dfdfe5] text-[19px] mt-[8px] mb-[5px] font-[300]">
          Inshorts featured in Google's Apps
        </h2>
        <p className="text-[#dfdfe5] text-[12px] lg:text-[16px]">
          <span className="text-[#dfdfe5] text-[12px] font-semibold pr-[3px]">
            short
          </span>
          Kabir Khan / 10:52 pm on Saturday, 5 December, 2015
        </p>
        <p className="text-[#dfdfe5] text-[13px] mt-[10px]">
          {description.slice(0, 410)}....{" "}
          <span className="text-[14px]  cursor-pointer">See more</span>
        </p>
      </div>

      <div className="  absolute bottom-0 mb-[10px] w-full ">
        <div className=" flex justify-center mb-[10px]">
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
      </div>
    </div>
  );
};

export default Slider;
