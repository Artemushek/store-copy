import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

const Slider = ({ startingImageIndex = 0 }) => {
  const [currentSlide, setCurrentSlide] = useState(startingImageIndex);

  const data = [
    "https://images.pexels.com/photos/6166602/pexels-photo-6166602.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/10926610/pexels-photo-10926610.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/7621778/pexels-photo-7621778.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
