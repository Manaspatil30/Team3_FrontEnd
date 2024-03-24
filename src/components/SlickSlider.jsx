import React from "react";
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

    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        nextArrow: <NavigateNextIcon />,
        prevArrow: <ArrowBackIosIcon />
      };

  return (
    <div>
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="slick-slide">
              <img src={item.image} alt={`Slide ${index}`} className="slick-image" />
              <div className="slick-caption">
                <Button variant="contained" color="success" href="/Explore" className="shop-now-button">
                  Shop Now
                </Button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
  )
}

export default SlickSlider;
