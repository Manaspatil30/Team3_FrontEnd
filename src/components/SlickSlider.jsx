import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button } from "@mui/material";
import "../styles/slider.css";

var items = [
    {
        image:"https://i.imgur.com/ygECDHo.jpeg"
    },
    {
        image:"https://i.imgur.com/JPtoQnj.jpeg"
    }
]

const SlickSlider = () => {
  const sliderRef = useRef(null);
  const [sliderHeight, setSliderHeight] = useState(0);

  useEffect(() => {
    // Calculate the maximum height among the images
    let maxHeight = 0;
    items.forEach(item => {
      const img = new Image();
      img.src = item.image;
      img.onload = () => {
        if (img.height > maxHeight) {
          maxHeight = img.height;
          setSliderHeight(maxHeight);
        }
      };
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    nextArrow: <NavigateNextIcon />,
    prevArrow: <ArrowBackIosIcon />,
    // Set the adaptive height option to true
    adaptiveHeight: true
  };

  return (
    <div style={{height: sliderHeight}}>
      <Slider ref={sliderRef} {...settings}>
        {items.map((item, index) => (
          <div key={index} className={`slick-slide ${index === 1 ? 'custom-slide' : ''}`}>
            <img src={item.image} alt={`Slide ${index}`} className="slick-image" />
            <div className="slick-caption">
              <Button variant="contained" color="success" href={index === 1 ? '/custom-link' : '/default-link'} className="shop-now-button">
                Shop Now
              </Button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
