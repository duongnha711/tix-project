import { Box } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import { actOpenTrailer } from "../../actions";
import useStyles from "./styles";
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
  // autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 760,
      settings: {
        dots: false,
      },
    },
  ],
};

//demo data
const arrBanner = [
  {
    name: "DreamEyes",
    url: "/images/banner-eye.jpg",
    trailer: "https://www.youtube.com/embed/ITlQ0oU7tDA",
  },
  {
    name: "EndGame",
    url: "/images/banner-endGame.jpg",
    trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
  },
  {
    name: "Spider",
    url: "/images/banner-spider.jpeg",
    trailer: "https://www.youtube.com/embed/Nt9L1jCKGnE",
  },
  {
    name: "op",
    url: "/images/banner-op.jpg",
    trailer: "https://www.youtube.com/embed/S8_YwFLCh4U",
  },
];

function Banner(props) {
  const classes = useStyles();
  const { dispatch } = props;

  const renderBanner = () => {
    if (Array.isArray(arrBanner) && arrBanner.length) {
      return arrBanner.map((banner, index) => (
        <Box className={classes.wrapperImg} key={index}>
          <Box className={classes.contentImg}>
            <img src={banner.url} alt={banner.name} />
          </Box>
          <Box
            onClick={() => {
              handleOpenTrailer(banner.trailer);
            }}
            component="span"
            className={classes.iconPlay}
          >
            <img src="./images/play-video.png" alt="play-video" />
          </Box>
        </Box>
      ));
    }
  };

  const handleOpenTrailer = (trailer) => {
    dispatch(actOpenTrailer(trailer));
  };

  return (
    <Box className={classes.banner}>
      <Box className={classes.containerFluid}>
        <Slider {...settings}>{renderBanner()}</Slider>
      </Box>
      <FilterFilm />
    </Box>
  );
}

export default connect()(Banner);
