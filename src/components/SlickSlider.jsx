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
        image:"https://media.self.com/photos/599c997a774b667d3bbe1214/16:9/w_1279,h_719,c_limit/groceries-family-month.jpg",
        description: "Random Description 1"
    },
    {
        name: "Random Name #2",
        image:"https://static.blog.bolt.eu/LIVE/wp-content/uploads/2022/04/30135418/grocery-list-1024x536.jpg",
        description: "Random Description 2"
    },
    {
        name: "Random Name #3",
        image:"https://ecocart.io/wp-content/uploads/resized/2023/01/iStock-1371318211-1120x455-c-default.jpg",
        description: "Random Description 3"
    }
]

const SlickSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
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