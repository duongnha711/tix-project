import React from "react";
import useStyles from "./styles";
import { Box } from "@material-ui/core";
import Slider from "react-slick";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1500,
};

//data demo
const arrCarousel = [
  { url: "./images/slide1.jpg", name: "slide1" },
  { url: "./images/slide2.jpg", name: "slide2" },
  { url: "./images/slide3.jpg", name: "slide3" },
  { url: "./images/slide4.jpg", name: "slide4" },
  { url: "./images/slide5.jpg", name: "slide5" },
  { url: "./images/slide6.jpg", name: "slide6" },
  { url: "./images/slide7.jpg", name: "slide7" },
];

export default function Mobile() {
  const classes = useStyles();

  const renderItemCarousel = () => {
    if (Array.isArray(arrCarousel) && arrCarousel.length > 0) {
      return arrCarousel.map((carousel, index) => (
        <Box key={index} className={classes.itemCarousel}>
          <img src={carousel.url} alt={carousel.name} />
        </Box>
      ));
    }
  };

  return (
    <Box className={classes.containerMobile}>
      <img
        src="./images/mobile.png"
        alt="mobile"
        width="195px"
        height="415px"
      />
      <Box className={classes.contentCarousel}>
        <Slider {...settings}>{renderItemCarousel()}</Slider>
      </Box>
    </Box>
  );
}
