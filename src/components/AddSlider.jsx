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
        name: "Aldi Onions",
        image:"https://i.imgur.com/fkYsC90.jpeg",
        description: "£0.55"
    },
    {
        name: "Lidl Onions",
        image:"https://i.imgur.com/5d7oXIw.jpeg",
        description: "£0.58"
    },
    {
        name: "Tesco Onions",
        image:"https://i.imgur.com/tQGINzF.jpeg",
        description: "£0.60"
    },
    {
        name: "Aldi Potatoes",
        image:"https://i.imgur.com/7SdCHph.jpeg",
        description: "£0.85"
    },
    {
        name: "Lidl Potatoes",
        image:"https://i.imgur.com/bRc32Vi.jpeg",
        description: "£0.88"
    },
    {
        name: "Tesco Potatoes",
        image:"https://i.imgur.com/pROYUkM.jpeg",
        description: "£0.90"
    },
    {
      name: "Aldi Salmon",
      image:"https://i.imgur.com/aFo4UIH.jpeg",
      description: "£4.90"
  },
  {
      name: "Lidl Salmon",
      image:"https://i.imgur.com/Uwqb3Xt.jpeg",
      description: "£4.95"
  },
  {
      name: "Tesco Salmon",
      image:"https://i.imgur.com/brJsLTY.jpeg",
      description: "£5.00"
  }
    
    
]

const AddSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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