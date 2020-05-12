import { Box, Paper, Typography } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StarIcon from "@material-ui/icons/Star";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import Alert from "../../../../components/Alert";
import { actOpenTrailer } from "../../actions";
import useStyles from "./styles";
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
  const history = useHistory();

  const { dispatch, movieList, isLogged } = props;

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
            
            <Box
              onClick={() => {
                handleGoToDetail(movie);
              }}
              className={classes.itemWrapper}
              padding={1}
            >
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
          </Box>
        );
      });
    }
  };

  const handleOpenTrailer = (trailer) => {
    dispatch(actOpenTrailer(trailer));
  };

  const handleGoToDetail = (movie) => {
    if (isLogged) {
      history.push({
        pathname: `/detail/${movie.maPhim}/${movie.biDanh}`,
        state: { kind: "showTime" },
      });
    } else {
      Alert({ icon: "warning", text: "Vui lòng đăng nhập" });
    }
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

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

export default connect(mapStateToProps)(Showtime);
