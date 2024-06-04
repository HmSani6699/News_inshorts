import React, { useRef } from "react";
import "./Mobile.css";
import Slider from "../Slider/Slider";
import Navbar from "../Navber/Navbar";
import SideNavebar from "../Navber/SideNavebar";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const Mobile = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollRef = useRef(null);

  const scrollUp = () => {
    scrollRef.current.scrollBy({
      top: -window.innerHeight,
      behavior: "smooth",
    });
  };

  const scrollDown = () => {
    scrollRef.current.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const textColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--text-color"
  );

  const bgColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--bg-color"
  );

  return (
    <div className={`app bg-[${bgColor}]`}>
      <Navbar toggleDrawer={toggleDrawer} />
      <SideNavebar toggleDrawer={toggleDrawer} open={open} />
      <div className="flex items-center lg:justify-between">
        <div></div>
        <div
          className="app__videos w-full lg:w-[400px] relative h-screen"
          ref={scrollRef}
        >
          {Array.from({ length: 5 }).map((vid) => (
            <Slider />
          ))}
        </div>
        <div className="lg:mr-[40px] hidden lg:block">
          <button
            className="bg-[#403d3d] h-[40px] w-[40px] rounded-full mb-[15px]"
            onClick={scrollUp}
          >
            <ArrowUpwardIcon
              sx={{
                fontSize: "23px",
              }}
            />
          </button>
          <br />
          <button
            className="bg-[#403d3d] h-[40px] w-[40px] rounded-full"
            onClick={scrollDown}
          >
            <ArrowDownwardIcon
              sx={{
                fontSize: "23px",
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
