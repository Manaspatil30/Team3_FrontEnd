import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "../styles/slider.css"
import SliderCard from "./SliderCard";

var items = [
    {
        name: "Random Name #1",
        image:"https://i.imgur.com/fkYsC90.jpeg",
        description: "Random Description 1"
    },
    {
        name: "Random Name #2",
        image:"https://i.imgur.com/5d7oXIw.jpeg",
        description: "Random Description 2"
    },
    {
        name: "Random Name #3",
        image:"https://i.imgur.com/tQGINzF.jpeg",
        description: "Random Description 3"
    },
    {
        name: "Random Name #4",
        image:"https://i.imgur.com/7SdCHph.jpeg",
        description: "Random Description 1"
    },
    {
        name: "Random Name #5",
        image:"https://i.imgur.com/bRc32Vi.jpeg",
        description: "Random Description 2"
    },
    {
        name: "Random Name #6",
        image:"https://i.imgur.com/pROYUkM.jpeg",
        description: "Random Description 3"
    }
    
    
]

const AddSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <NavigateNextIcon />,
        prevArrow: <ArrowBackIosIcon />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div>
        <Slider {...settings}>
          {items.map((item) => {
            return(
                <SliderCard item={item}/>
            )
          })}
        </Slider>
      </div>
  )
}

export default AddSlider