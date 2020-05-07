import { Box, Paper, Typography } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
// import FilterFilm from "../FilterFilm";
import FilterFilm from "../FilterFilm";

import useStyles from "./styles";

function Arrow(props) {
  const { className, onClick, url } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={url} alt="next" />
    </div>
  );
}

const settings = {
  infinite: true,
  slidesToShow: 1,
  speed: 500,
  rows: 2,
  slidesPerRow: 4,
  nextArrow: <Arrow url="./images/next-arrow.png" />,
  prevArrow: <Arrow url="./images/back-arrow.png" />,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesPerRow: 3,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesPerRow: 2,
        arrows: false,
      },
    },
  ],
};

export default function Showtime(props) {
  const classes = useStyles();

  const { movieList } = props;

  const addEmptyImage = (e) => {
    e.target.src = "/images/defaultImage.png";
  };

  const renderMovie = () => {
    if (Array.isArray(movieList) && movieList.length > 0) {
      return movieList.map((movie, index) => (
        <Link
          key={index}
          to={`/detail/${movie.maPhim}/${movie.biDanh}`}
          className={classes.link}
        >
          <Box className={classes.itemWrapper} padding={1}>
            <Paper className={classes.itemCarousel} elevation={1}>
              <img
                onError={addEmptyImage}
                src={movie.hinhAnh}
                alt={movie.tenPhim}
                className={classes.images}
              />
              <Box component="span" className={classes.iconPlay}>
                <img src="/images/play-video.png" alt="play-video" />
              </Box>
              <Box className={classes.ageType}>C16</Box>
              <Box className={classes.avgPoint}>
                <Box>{movie.danhGia}</Box>
                <Box>
                  <StarIcon color="primary" className={classes.star} />
                  <StarIcon color="primary" className={classes.star} />
                  <StarIcon color="primary" className={classes.star} />
                </Box>
              </Box>
              <Box component="span" className={classes.overLay}></Box>
            </Paper>
            <Typography className={classes.nameMovie} variant="h6">
              {movie.tenPhim}
            </Typography>
            <Typography className={classes.duration}>110 phút</Typography>
          </Box>
        </Link>
      ));
    }
  };

  return (
    <Box id="showTime" className={classes.showtime}>
      <FilterFilm />

      <Box className={classes.container}>
        <Box className={classes.titleWrapper}>
          <Typography className={classes.title} variant="h5">
            Đang chiếu
          </Typography>
          <Typography className={classes.title} variant="h5">
            Sắp chiếu
          </Typography>
        </Box>
        <Box className={classes.contentCarousel}>
          <Slider {...settings}>{renderMovie()}</Slider>
        </Box>
      </Box>
    </Box>
  );
}
Showtime.propTypes = {
  movieList: PropTypes.array,
};
