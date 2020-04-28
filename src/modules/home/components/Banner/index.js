import React from "react";
import useStyles from "./styles";
import { Box, Hidden } from "@material-ui/core";
import Slider from "react-slick";
import FilterFilm from "../FilterFilm";

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src="./images/next-arrow.png" alt="next" />
    </div>
  );
}
function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src="./images/back-arrow.png" alt="back" />
    </div>
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 760,
      settings: {
        dots: false,
        arrows: false,
      },
    },
  ],
};

//demo data
const arrBanner = [
  { name: "Believe", url: "./images/banner-believe.jpg" },
  { name: "Vin", url: "./images/banner-vin.png" },
  { name: "Believe", url: "./images/banner-believe.jpg" },
  { name: "Vin", url: "./images/banner-vin.png" },
];

export default function Banner() {
  const classes = useStyles();

  const renderBanner = () => {
    if (Array.isArray(arrBanner) && arrBanner.length) {
      return arrBanner.map((banner, index) => (
        <Box key={index}>
          <img src={banner.url} alt={banner.name} />
        </Box>
      ));
    }
  };

  return (
    <Box className={classes.banner}>
      <Box className={classes.containerFluid}>
        <Box component="span" className={classes.iconPlay}>
          <img src="./images/play-video.png" alt="play-video" />
        </Box>
        {/* filter film */}
        <Hidden mdDown>
          <FilterFilm />
        </Hidden>
        <Slider {...settings}>{renderBanner()}</Slider>
      </Box>
    </Box>
  );
}
