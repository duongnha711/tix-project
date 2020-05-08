import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import MobileApp from "../../modules/home/components/AppMobile/index.js";
import Banner from "../../modules/home/components/Banner";
import InfoCinema from "../../modules/home/components/InfoCinema/index.js";
import Marvel from "../../modules/home/components/Marvel/index.js";
import Showtime from "../../modules/home/components/Showtime/index.js";
import {
  actGetCinemaBranch,
  actGetCinemaList,
  actGetMovieList,
  actGetShowTimeAll,
  actGetShowTimeDetail,
} from "./../../modules/home/actions";
import VideoModal from "../../components/index.js";
import { Typography, Box } from "@material-ui/core";
import useStyles from "./styles";
import DC from "../../modules/home/components/DC/index.js";
import cn from "classnames";

function HomePage(props) {
  const classes = useStyles();
  const [marvelDC, setMarvelDC] = useState("marvel");

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

  return (
    <Fragment>
      <VideoModal />
      <Banner />
      <Showtime movieList={movieList} />
      <InfoCinema
        maCumRap={maCumRap}
        maHeThongRap={maHeThongRap}
        cinemaList={cinemaList}
        handleGetCinemaBrach={handleGetCinemaBrach}
        cinemaBrach={cinemaBrach}
        handleGetShowTimeDetail={handleGetShowTimeDetail}
        showTimeDetail={showTimeDetail}
      />
      {/* ~~~~~~~~~~~~ */}
      <Box display="flex" justifyContent="center">
        <Box
          onClick={() => {
            handleMarvelDC("marvel");
          }}
          id="news"
          className={cn(
            classes.newsTitle,
            marvelDC === "marvel" && classes.active
          )}
          marginRight={2}
        >
          <Typography variant="h5">Marvel</Typography>
        </Box>
        <Box
          onClick={() => {
            handleMarvelDC("dc");
          }}
          className={cn(classes.newsTitle, marvelDC === "dc" && classes.active)}
          marginRight={2}
        >
          <Typography variant="h5">DC</Typography>
        </Box>
      </Box>
      {/* ~~~~~~~~~~~~ */}
      {marvelDC === "marvel" && <Marvel />}
      {marvelDC === "dc" && <DC />}
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
