import "./Slider.css";
import cartImg from "../../src/assets/images/cart_img.jpg";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ShareIcon from "@mui/icons-material/Share";
import { Box } from "@mui/material";

const Slider = () => {
  const description = ` News aggregator app Inshorts has featured in the Google Play Store's
          'Best Apps of 2015' list. The list features Google's selection of 50
          mobile applications across apps, games and entertainment categories in
          the Play Store. Available on both Android and iOS, Inshorts offers
          stories summarised in 60 words or less for quick consumption.`;
  return (
    <div className="slider-container rounded-[15px]">
      <div className=" h-[250px]  w-full">
        <img className="rounded-t-[15px] h-full w-full" src={cartImg} alt="" />
      </div>
      <div className="px-[10px]">
        <h2 className="text-[#dfdfe5] text-[22px] my-[10px] font-[300]">
          Inshorts featured in Google's Best Apps of 2015
        </h2>
        <p className="text-[#dfdfe5] text-[12px] lg:text-[16px]">
          <span className="text-[#dfdfe5] text-[12px] font-semibold">
            short
          </span>
          Kabir Khan / 10:52 pm on Saturday, 5 December, 2015
        </p>
        <p className="text-[#dfdfe5] text-[16px] mt-[20px]">
          {description.slice(0, 375)}....{" "}
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
          <DescriptionOutlinedIcon
            sx={{ color: "#828289", fontSize: "25px" }}
          />
          <RemoveRedEyeOutlinedIcon
            sx={{ color: "#828289", fontSize: "25px" }}
          />
          <ShareIcon sx={{ color: "#828289", fontSize: "25px" }} />
        </Box>
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
