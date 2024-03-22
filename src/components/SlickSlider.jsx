import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Item from "./Item";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "../styles/slider.css"

var items = [
    {
        name: "Random Name #1",
        image:"https://i.imgur.com/i3mtRmb.jpeg",
        description: "Random Description 1"
    },
    {
        name: "Random Name #2",
        image:"https://i.imgur.com/XPCvLgf.jpeg",
        description: "Random Description 2"
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
          {items.map((item) => {
            return(
                <Item item={item}/>
            )
          })}
        </Slider>
      </div>
  )
}

export default SlickSlider