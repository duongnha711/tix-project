import { Box } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import { actOpenTrailer } from "../../actions";
import useStyles from "./styles";
import FilterFilm from "../FilterFilm";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon color="primary" />
    </div>
  );
}
function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon color="primary" />
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
      },
    },
  ],
};

//demo data
const arrBanner = [
  {
    name: "EndGame",
    url: "/images/banner-endGame.jpg",
    trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
  },
  {
    name: "Joker",
    url: "/images/banner-joker.jpg",
    trailer: "https://www.youtube.com/embed/RO3SxYwjlMk",
  },
  {
    name: "Spider",
    url: "/images/banner-spider.jpg",
    trailer: "https://www.youtube.com/embed/akRHNEK_5is",
  },
  {
    name: "DreamEyes",
    url: "/images/banner-eye.jpg",
    trailer: "https://www.youtube.com/embed/ITlQ0oU7tDA",
  },
  {
    name: "Venom",
    url: "/images/banner-venom.jpg",
    trailer: "https://www.youtube.com/embed/u9Mv98Gr5pY",
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
            <PlayArrowIcon color="primary" />
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
