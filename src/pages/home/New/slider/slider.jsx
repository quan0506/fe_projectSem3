// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner2 from "../../../../../public/assets/banner2.png"
import "./slider.css";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
    appendDots: dots => (
      <div style={{ 
        position: 'absolute', 
        bottom: '10px', 
        left: '50%', 
        transform: 'translateX(-50%)' 
      }}>
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    )
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {/* <div>
          <img src={banner1} alt="Banner 1" />
        </div> */}
        <div>
          <img src={banner2} alt="Banner 2" />
        </div>
        <div>
          <img src={banner2} alt="Banner 3" />
        </div>
        <div>
          <img src={banner2} alt="Banner 4" />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
