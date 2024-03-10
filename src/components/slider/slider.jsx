import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import image_slider1 from "../../assets/image1.jpg";
import image_slider2 from "../../assets/image4.jpg";
import image_slider3 from "../../assets/image5.jpg";
import SearchBar from "../searchBar/search";
import { AiOutlineSwapRight } from "react-icons/ai"; 

const SliderPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="slider-page">
      <div className="carousel-container">
        <Slider {...settings}>
          <div>
            <img className="slider-image" src={image_slider1} alt="Slide 1" />
          </div>
          <div>
            <img className="slider-image" src={image_slider2} alt="Slide 2" />
          </div>
          <div>
            <img className="slider-image" src={image_slider3} alt="Slide 3" />
          </div>
        </Slider>
      </div>
     
      
     
    </div>
  );
};

export default SliderPage;
