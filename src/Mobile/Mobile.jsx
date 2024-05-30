import React from "react";
import "./Mobile.css";
import Slider from "../Slider/Slider";

const Mobile = () => {
  return (
    <div className="app">
      <div className="app__videos">
        {Array.from({ length: 5 }).map((vid) => (
          <Slider />
        ))}
      </div>
    </div>
  );
};

export default Mobile;
