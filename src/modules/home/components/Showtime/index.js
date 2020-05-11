import { Box, Paper, Typography } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { actOpenTrailer } from "../../actions";
import useStyles from "./styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
// import arrMovieListDemo from "./demoData";


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
  infinite: true,
  slidesToShow: 1,
  speed: 500,
  rows: 2,
  slidesPerRow: 4,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
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
      },
    },
  ],
};
function Showtime(props) {
  const classes = useStyles();

  const { dispatch, movieList } = props;

  const addEmptyImage = (e) => {
    e.target.src = "/images/defaultImage.png";
  };

  const renderMovie = () => {
    if (Array.isArray(movieList) && movieList.length > 0) {
      return movieList.map((movie, index) => {
        return (
          <Box key={index} className={classes.wrapperMovie}>
              <Box
                onClick={() => {
                  handleOpenTrailer(movie.trailer);
                }}
                component="span"
                className={classes.iconPlay}
              >
                <PlayArrowIcon color="primary" />
              </Box>
              <Link
                // to={`/detail/${movie.maPhim}/${movie.biDanh}`}
                to={{
                  pathname: `/detail/${movie.maPhim}/${movie.biDanh}`,
                  state: { kind: "showTime" },
                }}
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

                    <Box className={classes.ageType}>C16</Box>
                    <Box className={classes.avgPoint}>
                      <Box>{movie.danhGia}</Box>
                      <Box className={classes.star}>
                        <StarIcon color="primary" />
                        <StarIcon color="primary" />
                        <StarIcon color="primary" />
                      </Box>
                    </Box>
                    <Box component="span" className={classes.overLay}></Box>
                  </Paper>
                  <Typography className={classes.nameMovie} variant="h6">
                    {movie.tenPhim}
                  </Typography>
                  <Typography className={classes.duration}>2020</Typography>
                </Box>
              </Link>
          </Box>
        );
      });
    }
  };

  const handleOpenTrailer = (trailer) => {
    dispatch(actOpenTrailer(trailer));
  };

  return (
    <Box className={classes.showtime}>
      {/* <FilterFilm /> */}

      <Box className={classes.container}>
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

export default connect()(Showtime);
