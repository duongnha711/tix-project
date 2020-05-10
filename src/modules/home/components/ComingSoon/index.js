import { Box, Paper, Typography } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { actOpenTrailer } from "../../actions";
import useStyles from "./styles";
import arrMovieListDemo from "./demoData";

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
function ComingSoon(props) {
  const classes = useStyles();

  const { dispatch } = props;

  const addEmptyImage = (e) => {
    e.target.src = "/images/defaultImage.png";
  };

  const renderMovie = () => {
    if (Array.isArray(arrMovieListDemo) && arrMovieListDemo.length > 0) {
      return arrMovieListDemo.map((movie, index) => {
        return (
          <Box key={index} className={classes.wrapperMovie}>
            <Box
              onClick={() => {
                handleOpenTrailer(movie.trailer);
              }}
              component="span"
              className={classes.iconPlay}
            >
              <img src="/images/play-video.png" alt="play-video" />
            </Box>
            <Link
              // to={`/detail/${movie.maPhim}/${movie.biDanh}`,"aa"}
              to={{
                pathname: `/detail/${movie.maPhim}/${movie.biDanh}`,
                state: { kind: "comingSoon", info: movie },
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
ComingSoon.propTypes = {
  movieList: PropTypes.array,
};

export default connect()(ComingSoon);
