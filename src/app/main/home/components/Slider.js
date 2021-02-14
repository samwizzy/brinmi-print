import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="/assets/slider/slider-1.jpg" alt="" className="w-full" />
      </div>
      <div>
        <img src="/assets/slider/slider-2.jpg" alt="" className="w-full" />
      </div>
      <div>
        <img src="/assets/slider/slider-3.jpg" alt="" className="w-full" />
      </div>
      <div>
        <img src="/assets/slider/slider-1.jpg" alt="" className="w-full" />
      </div>
      <div>
        <img src="/assets/slider/slider-3.jpg" alt="" className="w-full" />
      </div>
      <div>
        <img src="/assets/slider/slider-1.jpg" alt="" className="w-full" />
      </div>
    </Slider>
  );
}
