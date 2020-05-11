import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import MobileApp from "../../modules/home/components/AppMobile/index.js";
import Banner from "../../modules/home/components/Banner";
import InfoCinema from "../../modules/home/components/InfoCinema/index.js";
import Showtime from "../../modules/home/components/Showtime/index.js";
import ComingSoon from "../../modules/home/components/ComingSoon/index.js";

import {
  actGetCinemaBranch,
  actGetCinemaList,
  actGetMovieList,
  actGetShowTimeAll,
  actGetShowTimeDetail,
} from "./../../modules/home/actions";
import { Typography, Box } from "@material-ui/core";
import useStyles from "./styles";
import cn from "classnames";
import News from "../../modules/home/components/News/index.js";

function HomePage(props) {
  const classes = useStyles();
  const [marvelDC, setMarvelDC] = useState("marvel");
  const [showTimeComingSoon, setShowTimeComingSoon] = useState("showTime");

  const {
    dispatch,
    movieList,
    cinemaList,
    cinemaBrach,
    showTimeDetail,
    maHeThongRap,
    maCumRap,
  } = props;
  useEffect(() => {
    dispatch(actGetMovieList());
    dispatch(actGetCinemaList());
  }, [dispatch]);

  const handleGetCinemaBrach = (maHeThongRap) => {
    dispatch(actGetCinemaBranch({ maHeThongRap }));
    dispatch(actGetShowTimeAll({ maHeThongRap }));
    // dispatch()
  };

  //lay lich chieu theo cum rap
  const handleGetShowTimeDetail = (maCumRap) => {
    dispatch(actGetShowTimeDetail(maCumRap));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMarvelDC = (value) => {
    setMarvelDC(value);
  };

  const handleShowTimeComingSoon = (value) => {
    setShowTimeComingSoon(value);
  };

  return (
    <Fragment>
      <Banner />

      {/* ~~~~~~~~~~~~~~~~SHOW TIME!~~~~~~~~~~~~~~~~~~~ */}
      <Box
        className={classes.wrapperTitle}
        id="showTime"
        display="flex"
        justifyContent="center"
      >
        <Box
          onClick={() => {
            handleShowTimeComingSoon("showTime");
          }}
          className={cn(
            classes.newsTitle,
            showTimeComingSoon === "showTime" && classes.activeTime
          )}
          marginRight={2}
        >
          <Typography variant="h5">Đang chiếu</Typography>
        </Box>
        <Box
          onClick={() => {
            handleShowTimeComingSoon("comingSoon");
          }}
          className={cn(
            classes.newsTitle,
            showTimeComingSoon === "comingSoon" && classes.activeTime
          )}
          marginRight={2}
        >
          <Typography variant="h5">Sắp chiếu</Typography>
        </Box>
      </Box>
      {showTimeComingSoon === "showTime" && <Showtime movieList={movieList} />}
      {showTimeComingSoon === "comingSoon" && <ComingSoon />}

      {/* ~~~~~~~~~~~~~~~~SHOW TIME!~~~~~~~~~~~~~~~~~~~ */}

      <InfoCinema
        maCumRap={maCumRap}
        maHeThongRap={maHeThongRap}
        cinemaList={cinemaList}
        handleGetCinemaBrach={handleGetCinemaBrach}
        cinemaBrach={cinemaBrach}
        handleGetShowTimeDetail={handleGetShowTimeDetail}
        showTimeDetail={showTimeDetail}
      />
      {/* ~~~~~~~~~~~~Marvel DC ~~~~~~~~~~~~~~~~~~~ */}
      <Box
        className={classes.wrapperTitle}
        id="news"
        display="flex"
        justifyContent="center"
      >
        <Box
          onClick={() => {
            handleMarvelDC("marvel");
          }}
          className={cn(
            classes.newsTitle,
            marvelDC === "marvel" && classes.activeMarvelDC
          )}
          marginRight={2}
        >
          <Typography variant="h5">Marvel</Typography>
        </Box>
        <Box
          onClick={() => {
            handleMarvelDC("dc");
          }}
          className={cn(
            classes.newsTitle,
            marvelDC === "dc" && classes.activeMarvelDC
          )}
          marginRight={2}
        >
          <Typography variant="h5">DC</Typography>
        </Box>
      </Box>
      {/* ~~~~~~~~~~~~Marvel DC ~~~~~~~~~~~~~~~~~~~ */}

      <News marvelDC={marvelDC} />
      <MobileApp />
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  movieList: state.home.movieList,
  cinemaList: state.home.cinemaList,
  cinemaBrach: state.home.cinemaBrach,
  showTimeDetail: state.home.showTimeDetail,
  maHeThongRap: state.home.maHeThongRap,
  maCumRap: state.home.maCumRap,
});

export default connect(mapStateToProps)(HomePage);
